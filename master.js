/*! Author: Vopilovsky Constantine <flash.vkv@gmail.com> */

'use strict';

var new_master = new function() {

	function new_master(tmpl) {

		function master(uu, q) {
			if (!uu) return;

			var nn = uu
			, i, x, id, css, pn, sx, v, p, a, c, type
			, append_index = 1 // с какого аргумента наченаются потомки
			, pm = false // параметры
			, is_group // флаг что это компонент (nodeType < 0)
			, u
			;

			arguments[0] = u;

			if (q && !q.nodeType && typeof q == 'object') {
				if (q.length === u || !isArray(q)) {
					pm = q;
					arguments[1] = u;
					append_index = 2; // можно начать с 3го элемента
				};
			};


			// create element
			switch (nn) { 
				case 'nobr': case 'input': case 'link': case 'em': case 'blockquote': case 'strong': case 'img': case 'dt': case 'dl': case 'dd': case 'div': case 'li': case 'ul': case 'br': case 'span': case 'a': case 'td': case 'th': case 'tr': case 'abbr': case 'h1': case 'h2': case 'h3': case 'h4': case 'b': case 'font': case 'p': case 'small': case 'tbody': case 'table': case 'i': case 'body': case 'html':
					// много "case" может плохо сказаться. но это нужно тестить
					nn = {nodeType: 1, nodeName: nn};
					break;

				default:
					if (typeof nn !== 'string') {
						if (typeof nn === 'function') {
							if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
							nn = new nn(master, pm, false);
						};

						if (!nn.nodeType) {
							return text('[ ups!! **** ]') // ошибка в шаблоне. отобразим ее чтоб было видно
						};

						is_group = nn.nodeType < 0; // кешируем флажок что это обьект не HTMLElement
						break;
					};

					if (nn.indexOf('tmpl:') === 0) { // только "tmpl:" это шаблоны все остальное это элементы
						c = tmpl[nn.substr(5)];
						if (typeof c === 'function') {
							if (!c.prototype.nodeType) c.prototype.nodeType = -1; // чтобы в шаблоне каждый рас не опредлять
							v = new c(master, pm, false);

							if (!nn.nodeType) {
								return text('[ ups!! '+ nn +']') // ошибка в шаблоне. отобразим ее чтоб было видно
							};

							is_group = v.nodeType < 0;
							nn = v;
							break;
						}
						else {
							return text('[ no template '+ nn +']') // ошибка в шаблоне. отобразим ее чтоб было видно
						}
					};


					// tag.className#idNode
					// ------------------------------

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
					nn = id ? {nodeType: 1, nodeName: nn, id: id} : {nodeType: 1, nodeName: nn};
			};

			
			// set params
			if (pm) {
				if (is_group) {
					// nn._set_parameters - дает право мастеру изменянять значения через функцию set({key: value, ...})
					if (nn._set_parameters === true && typeof nn.set == 'function') {
						nn.set(pm);
					};
				} 
				else {
					for (x in pm) {
						v = pm[x];
						if (v === u) continue;

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

							// у меня сомнение что идеологически это правильно. но он зараза удобен ). 
							// атрибут text при этом создать не получиться
							case 'text': 
								arguments[0] = {nodeType: 3, data: v};
								append_index = 0;
								break;

							// зарезервированные значения
							case 'parent': case 'before': case 'after': case 'nodeName': case 'nodeType': case 'children':
								break;


							default:
								nn[x] = v;
						};
					};
				};
			};

			if (!is_group && css) {
				nn['class'] = css;
			};

			// append child
			pn = nn;

			if (is_group) {
				sx = typeof nn.append === 'function'; // у обьекта свой способ добавления элементов
				if (!sx) pn = nn.box || nn.node;
			};

			if (!sx) {
				if (pn) {// && append_index < arguments.length
					if (x = pn.children) {
						append_nativ(pn, x, arguments, append_index)
					} else {
						append_nativ(pn, x = [], arguments, append_index); 
						if (x.length > 0) {
							pn.children = x;
						};
					};
				};
			} else {
				append_other(nn, arguments)
			};

			// return and insert element
			return pm && !is_group ? pm.parent || pm.after || pm.before ? insert(nn, pm, is_group) : nn : nn ;
		};

		master.text = text;
		master.write = write;
		master.map = map;

		return master;
	};

	function append_nativ(nn, childs, m, ix) {
		//var i = start_index || 0, l = m.length, a, x, n, u;
		var i = ix, l = m.length, a, x, n, u; //, l = len || m.length

		while(i < l) {
			a = m[i++];

			if (a === u) continue; 

			if (a) {
				x = a.nodeType;

				if (x > 0) {
					if (a.parentNode) {
						if (n = a.parentNode.children) {
							n[n.indexOf(a)] = u;  // просто отмечу пустым. так будет быстрее
							//n.splice(n.indexOf(a), 1);
						};
					} else {
						a.parentNode = nn;
					};
					
					childs.push(a);
					continue;
				} 
				else if (x < 0) {
					if (a = a.node) {
						x = a.nodeType;

						if (x > 0) { // должен быть только элемент

							if (a.parentNode) {
								if (n = a.parentNode.children) {
									// у элемента может быть только один родитель
									n[n.indexOf(a)] = u;
									//n.splice(n.indexOf(a), 1);
								};
							} else {
								a.parentNode = nn;
							};

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
						append_nativ(nn, childs, a, 0); //, a.length
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
		};

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
			v = func(a[0], e, this);
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
				switch(x) {
					case 'class': case 'id': // эти атрибуты не экранирую потому как обычно в них не помешают недоверенные данные
						attrs += ' ' + x + '="' + v + '"';
						break;
					default:
						attrs += ' ' + x + '="' + String(v).replace(entities_rg, entities_re) + '"';
				};
			}
			else if (v === 0) {
				attrs += ' ' + x + '="0"';
			};
		};

		switch(name) {
			case 'meta': case 'br': 
				buu.push('<' + name + attrs + '/>'); // потомков у него нет
				return;
		};

		buu.push('<' + name + attrs + '>');


		// потомки
		if (m = nn.children) {
			for(i = 0, l = m.length; i < l ;i++) {
				n = m[i];

				if (!n) continue;

				switch(n.nodeType) {
					case 1:
						objectToHTML(n, buu);
						continue;
					
					case 3: // text
						buu.push(String(n.data).replace(entities_rg, entities_re) );
						continue;
					
					case 42: // как есть _.write('...')
						buu.push(n.data);
						continue;
				};
			};
		};
		

		buu.push('</'+name+'>');
	};

	//return objectToHTML;


	function turn(m, buu) {
		var i = 0, l = m.length, n;
		
		for(;i < l; i++) {
			n = m[i];

			if (!x && x !== 0) continue;

			switch(n.nodeType) {
				case 1:
					objectToHTML(n, buu);
					continue;
				
				case 3: // text
					buu.push(String(n.data).replace(entities_rg, entities_re) );
					continue;
				
				case 42: // как есть _.write('...')
					buu.push(n.data);
					continue;
			};

			switch(typeof n) {
				case 'number': buu.push(n); break;
				case 'string': 
					buu.push(n.replace(entities_rg, entities_re) );
					break;

				case 'object':
					if (Array.isArray(nn)) {
						turn(m, buu)
					};
			};
		};
	};
	

	function toHTML(nn, buu) {
		if (nn.nodeType === 1) {
			objectToHTML(nn, buu);
		}
		else if (Array.isArray(nn) ) {
			turn(nn, buu);
		}
		else if (nn.nodeType < 0 && nn.node) {
			toHTML(nn.node, buu);
		};
	};
	
	return toHTML;
};




// help
// -----------------------

// global.tmpl единственная область видимости шаблонов
// для других используйте прямые сылки вида _(mytmpl.xxxxx, ...)
// ненужно создавать иераргию tmpl.xxxx.eeee . это усложняет код.
// прямой вызов _(tmpl.xxx) шаблона немного быстрее чем через _('tmpl:xxx')
// но незначительно и небудет сообшений об ошибках



// setup
// -----------------------

var tmpl = global.tmpl||(global.tmpl = {});
var master = new_master(tmpl); 


exports.master = master; // конструктор
exports.toHTML = objectToHTML; // конвектор обьектной модели в тект HTML 

// html рендринг
exports.render = function(nn, params) {
	var B = [], s, x;

	switch(typeof nn) {
		case 'function': break;
		case 'string':
			if (nn = nn.indexOf('tmpl:') === 0 ? tmpl[nn.substr(5)] : false) {
				break;
			};

		default:
			return;
	};

	if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
	objectToHTML(new nn(master, params, false), B);

	return B.join('')
};


