﻿/*! Author: Vopilovsky Constantine <flash.vkv@gmail.com> */

'use strict';

var new_master = new function() {
	var new_master = function (ns) {

		//var attr_name = {cellSpacing: 'cellspacing', 'constructor': 'constructor'};
		var attr_reserved = {parent: true, before: true, after: true, nodeName: true, nodeType: true, children: true, constructor: false}


		function master(uu, q) {
			if (!uu) return;

			var nn = uu
			, i, x, id, css, pn, sx, v, p, a
			, append_index = 1 // с какого аргумента наченаются потомки
			, is_group // флаг что это компонент (nodeType < 0)
			, u
			;

			arguments[0] = u;

			if (q && !q.nodeType && typeof q == 'object') {
				if (q.length === u || !isArray(q)) {
					p = q;
					arguments[1] = u;
					append_index = 2; // можно начать с 3го элемента
				};
			};


			// create element
			switch (nn) { // какнибуть нужно попробовать засунуть хеш вместо switch
				case 'div': case 'li': case 'br': case 'span': case 'a': case 'td': case 'tr': case 'abbr': case 'h1': case 'b': case 'font': case 'p': case 'small': case 'tbody': case 'table': case 'i': case 'body': case 'html':
					// много "case" может плохо сказаться. но это нужно тестить
					nn = {nodeType: 1, nodeName: nn};
					break;


				default:
					switch(typeof nn) {
						case 'string': break;
						case 'function':
							if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
							nn = new nn(this, pr, false);
						default:
							if (!nn || !nn.nodeType) return; // подсунили чтота нето
							is_group = nn.nodeType < 0; // кешируем флажок что это обьект не HTMLElement
							break;
					};


					if (nn.indexOf(':') !== -1) {  // оптимезирую так как : редко встречается
						
						i = nn.indexOf(':');
						nn = create_group(i ? nn.substring(0, i) : 'tmpl'
							, nn.substring(++i)
							, p || false // хеш параметров
							, ns // пространство имен наборов шаблонов
							, master
						);

						if (!nn || !nn.nodeType) return  // подсунили чтота нето
						is_group = nn.nodeType < 0;
						break;
					};

					

					// tag.className#idNode
					if (nn.indexOf('#') > 0) {  // оптимезирую так как id редко встречается
						x = nn.indexOf('#');
						id = nn.substr(x + 1);
					} else {
						x = u;
					};

					i = nn.indexOf('.'); // класс встречается часто
					if (i > 0) {
						css = x ? nn.substring(i + 1, x) : nn.substring(i + 1);
						x = i;
					};

					if (x) nn = nn.substring(0, x);

					nn = {nodeType: 1, nodeName: nn};
			};

			
			// set params
			if (p) {
				if (is_group) {
					// nn._set_parameters - дает право мастеру изменянять значения через функцию set({key: value, ...})
					if (nn._set_parameters === true && typeof nn.set == 'function') {
						nn.set(p);
					};
				} 
				else {
					for (x in p) {
						v = p[x];
						if (v === u) continue;

						/*
						if (i = attr_name[x]) { // алиасы атрибутов
							nn[i] = v; 
							continue;
						};
						*/

						switch (x) {
							case 'css':
								if (v) { // && typeof v === 'string'
									if (css) {
										css += ' ' + v;
									} else {
										css = v;
									};
								};
								break;

							case 'id':
								if (v) id = v; 
								break;


							case 'text': // у меня сомнение что идеологически это правильно. но он зараза удобен )
								arguments[0] = {nodeType: 3, data: v};
								append_index = 0;
								break;

								// зарезервированные значения обьекта
							case 'parent': case 'before': case 'after': case 'nodeName': case 'nodeType': case 'children':
								break;


							default:
								nn[x] = v;
						};
					};
				};
			};
			

			if (!is_group) { // params
				if (css) nn['class'] = css;
				if (id) nn['id'] = id;
			};

			// append child
			pn = nn;

			if (is_group) {
				sx = typeof nn.append === 'function'; // у обьекта свой способ добавления элементов
				if (!sx) pn = nn.box || nn.node;
			};

			if (!sx) {
				if (pn) {
					if (x = pn.children) {
						append_nativ(pn, arguments, x, append_index)
					} else {
						append_nativ(pn, arguments, x = [], append_index); 
						if (x.length > 0) {
							pn.children = x;
						};
					};
				};
			} else {
				append_other(nn, arguments)
			};

			// return and insert element
			return p && !is_group ? p.parent || p.after || p.before ? insert(nn, p, is_group) : nn : nn ;
		};

		master.global = ns || (ns = {});
		master.namespace = ns.tmpl;

		master.text = text;
		master.write = write;
		master.map = map;

		return master;
	};


	function append_nativ(nn, m, childs, start_index) {
		//var i = start_index || 0, l = m.length, a, x, n, u;
		var i = start_index, l = m.length, a, x, n, u;

		while(i < l) {
			a = m[i++];

			if (a === u) continue; 

			if (a) {
				x = a.nodeType;

				if (x > 0) {
					/*
					if (n = a.parentNode ? a.parentNode.children : false) {
						n.splice(n.indexOf(a), 1);
					};
					*/
					a.parentNode = nn;

					childs.push(a);
					continue;
				} 
				else if (x < 0) {
					if (a = a.node) {
						x = a.nodeType;

						if (x > 0) { // должен быть только элемент
							/*
							if (x > 0) {
								if (n = a.parentNode ? a.parentNode.children : false) {
									n.splice(n.indexOf(a), 1);
								};
							};
							*/

							a.parentNode = nn;
							childs.push(a);
						};
					};
					continue;
				};
			};



			switch (typeof a) {
				case 'number': case 'string':
					childs.push({nodeType: 3, data: a, parentNode: nn});
					break;

				case 'object':
					if (isArray(a)) {
						append_nativ(nn, a, childs, 0);
					};
			};
			
			
		};
	};

	function append_other(nn, m) {
		var i = 0, l = m.length, a, x, u;

		while (i < l) {
			a = m[i++];
			if (a || a !== '' || a !== 0) {
				/*
				switch(typeof a){
					case 'string':case: 'number':
						a = {nodeType: 3, data: a}
				};
				*/
				
				a.nodeType || !isArray(a) ? nn.append(a) : append_other(a, nn);
			};
		};
	};



	function create_group(type, ui, p, global_space, master) {
		if (!ui) return;
		

		var ns = type === 'default' ? master.namespace : global_space[type]
		, x = master.namespace
		, s, c
		;
		
		if (!ns) return false;

		if (c = ns[ui]) {

			if (typeof c === 'function') {
				s = {name: ui, type: type, namespace: ns, uiclass: c};

				master.namespace = ns;

				if (!c.prototype.nodeType) c.prototype.nodeType = -1;
				ui = new c(master, p, s);

				master.namespace = x;
			}
			else {
				return false;
			};

			return ui;
		};
	};
	
	var isArray = Array.isArray || new function (o) {
		var x = Object.prototype.toString, s = x.call([]);
		return function (o) {
			return x.call(o) === s
		};
	};


	// будет вставляться как текст
	function text(x) {
		return {nodeType: 3, data: x}
	};

	// будет вставляться как есть
	function write(x) {
		return {nodeType: 42, data: x}
	};

	// корневой элемент у которого нет тега
	function doc(x) {
		
	};

	function insert(nn, p, is_group) {
		var x, a, ip, ib, pn, i;

		if (is_group) {
			return nn;
		}

		// insert
		if (a = p.after) {
			ib = a.nextSibling;
			if (!ib) ip = a.parentNode;
		};

		if (a = p.parent || ip)
			return a.appendChild(nn);

		if (a = p.before || ib)
			return a.parentNode.insertBefore(nn, a);

		return nn;
	};

	function map(a, func) {
		if (!a || typeof func !== 'function') {
			return;
		};

		if (typeof a === 'number') {
			a = {length: a};
		};

		var l = a.length
		, i = 1
		, iend = l - 1
		, m = []
		, e = {first: true, last: false, list: a, index: 0} //, master: this
		, v, u
		;


		if (0 < l) {
			v = func(a[i], e, this);
			if (v || v === 0 || v === '') {
				m.push(v)
			};

			e.first = false;
		};

		for (; i < l; i++) {
			if (i === iend) e.last = true;
			e.index = i;

			v = func(a[i], e, this);
			if (v || v === 0 || v === '') {
				m.push(v)
			};
		};

		return m;
	};
	
	return new_master;
};


// конвектор обьектной модели в HTML

var objectToHTML = new function(rr) {
	var attr_name = { constructor: false, nodeType: false, nodeName: false, parentNode: false, children: false
		// допустимые атрибуты 
		, 'title': 'title'
		, 'style': 'style'
		, 'name': 'name'
		, 'value': 'value'
		, 'type': 'type'
		, 'width': 'width'
		, 'height': 'height'
		, 'src': 'src'
		, 'href': 'href'
		, 'rel': 'rel'
		, 'cellPadding': 'cellpadding'
		, 'cellSpacing': 'cellspacing'
		, 'border': 'border'
		, 'valign': 'valign'
		, 'content': 'content'
		, 'bgColor': 'bgcolor'
		, 'color': 'color'
		, 'colSpan': 'colspan'
		, 'align': 'align'
		, 'httpEquiv': 'http-equiv'
		, 'tabIndex': 'tabindex'
		, 'class': 'class'
		, 'id': 'id'
		
		, 'http-equiv': 'http-equiv'
		, 'cellpadding': 'cellpadding'
		, 'cellspacing': 'cellspacing'
		, 'bgcolor': 'bgcolor'
		, 'colspan': 'colspan'
	};


	var entities_rg = /[&<>"]/g, entities_cm = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}; // for html entity
	function entities_re(A) {return entities_cm[A]};

	function objectToHTML(nn, buu) {
		var m, n, x, v, i, l, u
		, name = nn.nodeName
		, attrs = ''
		;
 
		// атрибуты
		for(i in nn) {
			x = attr_name[i];

			if (!x) {
				if (x === false || i.indexOf('_') === 0 ) continue;
				x = i;
			};
			
			if (v = nn[i]) {
				if (x === 'class' || x === 'id') {
					attrs += ' ' + x + '="' + v + '"';
					continue;
				} else {
					attrs += ' ' + x + '="' + String(v).replace(entities_rg, entities_re) + '"';
				};
			}
			else if (v === 0) {
				attrs += ' ' + x + '="0"';
			};
		};

		if (name === 'br' || name === 'meta') {
			buu.push('<' + name + attrs + ' />'); // потомков у него нет
			return 
		};
		
		buu.push('<' + name + attrs + '>');

		
		// потомки
		if (m = nn.children) {
			for(i = 0, l = m.length; i < l ;) {
				if (n = m[i++] ) {
					if (n.parentNode !== nn) continue;
					

					switch(n.nodeType) {
						case 1:
							objectToHTML(n, buu);

							break;
						
						case 3: // text
							//buu.push(htmlEscape(n.data));

							buu.push(String(n.data).replace(entities_rg, entities_re) );
							break;
						
						case 42: // как есть
							buu.push(n.data);
							break;
					};
				};
			};
		};
		
		buu.push('</'+name+'>');
	};

	return objectToHTML;

};


;new function() {
	var master = new_master({
		tmpl: global.tmpl || (global.tmpl = {})
	});

	var tmpl_global = master.global;

	exports.master = master; // конструктор по умолчанию 
	exports.master_create = new_master; // если вдруг нужно создать свой новый.
	exports.toHTML = objectToHTML; // конвектор обьектной модели в тект HTML
	
	exports.render = function(nn, params) {
			var B = [], s, x;

			if (!nn) return;

			switch(typeof nn) {
				case 'function': break;
				case 'string':
					x = nn.indexOf(':');
					if (x > 0) {
						if (s = tmpl_global[nn.substring(0, x)]) {
							if (nn = s[x = nn.substr(++x)]) {
								break;
							};
						};
					};
					return;

				default:
					return;
			};

		if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;

		objectToHTML(new nn(master, params, false), B);
		return B.join('')
	};
};

