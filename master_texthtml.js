﻿/*! Author: Vopilovsky Constantine <flash.vkv@gmail.com> */

'use strict';

var new_master = new function() {

	function new_master(tmpl) {

		var hash_elements = {constructor: false, 'td': true, 'tr': true, 'a': true, 'span': true, 'hr': true, 'meta': true, 'head': true, 'nobr': true, 'input': true, 'link': true, 'em': true, 'blockquote': true, 'strong': true, 'img': true, 'dt': true, 'dl': true, 'dd': true, 'div': true, 'li': true, 'ul': true, 'br': true, 'th': true, 'abbr': true, 'h1': true, 'h2': true, 'h3': true, 'h4': true, 'b': true, 'font': true, 'p': true, 'small': true, 'tbody': true, 'table': true, 'i': true, 'body': true, 'html': true};

		function master(uu, q) {
			if (!uu) return;

			var nn = uu
			, i, x, css, nbox, v, p, a, c //, id
			, append_index = 1 // с какого аргумента наченаются потомки
			, pm = false // параметры
			, is_group = false // флаг что это компонент (nodeType < 0)
			, u
			;

			//arguments[0] = u;

			if (q !== null && typeof q === 'object' && !q.nodeType && (q.length === u || !isArray(q)) ) {
				pm = q;
				append_index = 2; // можно начать с 3го элемента
				//arguments[1] = u; //нет смысла сбрасывать в undf если его не будут брать в расчет
			};

			if (typeof nn === 'string') { // если строка, то требуется создать новый обьект
				if (hash_elements[nn]) {
					nn = {nodeType: 1, nodeName: nn, parentNode: false};
				} 
				else if (nn.length > 5 && nn[4] === ':' && nn[0] === 't' && nn[1] === 'm' && nn[2] === 'p' && nn[3] === 'l') { // по тестам вроде есть прирост
				// else if (nn.indexOf('tmpl:') === 0) {
					c = tmpl[nn.substring(5)];
					if (typeof c === 'function') {
						if (!c.prototype.nodeType) c.prototype.nodeType = -1; // чтобы в шаблоне каждый рас не опредлять
						v = new c(master, pm, false);

						if (!v.nodeType) {
							return text('[ ups!! '+ nn +']') // ошибка в шаблоне. отобразим ее чтоб было видно
						};

						is_group = v.nodeType < 0;
						nn = v;
						// break;
					} else {
						return text('[ no template '+ nn +']') // ошибка в шаблоне. отобразим ее чтоб было видно
					};

				} else { 
					// tag.className#idNode
					// ------------------------------

					if (nn.indexOf('#') !== -1) {
						x = nn.indexOf('#');
						i = nn.indexOf('.');

						if (css = i !== -1) {
							nn = {nodeType: 1, nodeName: nn.substring(0, i), 'class': nn.substring(i + 1, x), id: nn.substring(x + 1), parentNode: false};
						} else {
							nn = {nodeType: 1, nodeName: nn.substring(0, x), id: nn.substring(x + 1), parentNode: false};
						};
					} else {
						i = nn.indexOf('.'); 
						if (css = i !== -1) {
							nn = {nodeType: 1, nodeName: nn.substring(0, i), 'class': nn.substring(i + 1), parentNode: false};
						} else {
							nn = {nodeType: 1, nodeName: nn, parentNode: false};
						};
					};


					// можно попробовать кешировать определенные правила чтобы создавать элементы через конструктор
					// возможно будет выигрыш при многократном создании похожих элементов. а возможно нет
					// но если будут динамические правила то памяти не хватит
				};

			} else { // значит обьект или конструктор
				if (typeof nn === 'function') {
					if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
					nn = new nn(master, pm, false);
				};

				if (!nn.nodeType) {
					return text('[ ups!! **** ]') // ошибка в шаблоне. отобразим ее чтоб было видно
				};

				is_group = nn.nodeType < 0; // кешируем флажок что это обьект не HTMLElement
			};


			// set params
			if (pm) {
				if (is_group) {
					// nn._set_parameters - дает право мастеру изменянять значения через функцию set({key: value, ...})
					if (nn._set_parameters === true && typeof nn.set == 'function') {
						nn.set(pm);
					};
				} else {
					for (x in pm) {
						v = pm[x];
						// if (v === u) continue;

						switch (x) {
							case 'css': case 'class':
								if (v) {
									if (css) {
										nn['class'] += ' ' + v;
									} else {
										nn['class'] = v;
									};
								};
								continue; 

							// у меня сомнение что идеологически это правильно. но он зараза удобен ). 
							// атрибут text при этом создать не получиться
							case 'text':
								if (v || v === 0) {
									arguments[1] = {nodeType: 3, data: v}; // второй аргумет свободен потому как есть параметры
									append_index = 1;
								};
								continue;

							// зарезервированные значения
							case 'nodeName': case 'nodeType': case 'childNodes': case 'appendChild': case 'parentNode':  //case 'parent': case 'before': case 'after': 
								continue;

							default:
								if (v != null) { 
									nn[x] = v;
								};
						};
					};
				};
			};


			// append child
			if (is_group) {
				if (typeof nn.appendChild !== 'function') {
					nbox = nn.box || nn.node || false;
				} else {
					append_other(nn, arguments)
					// nbox = false;
				};
			} else {
				nbox = nn;
			};

			if (nbox && append_index < arguments.length) {
				if (nbox.childNodes) {
					append_nativ(nbox, nbox.childNodes, arguments, append_index)
				} else {
					append_nativ(nbox, x = [], arguments, append_index); 
					if (x.length > 0) {
						nbox.childNodes = x;
					};
				};
			};

			return nn;
		};

		master.text = text;
		master.write = write;
		master.map = map;
		master.set = set;
		master.htmlEscape = htmlEscape;
		master.urlEscape = urlEscape;

		return master;
	};

	function append_nativ(nn, childs, m, i) {
		var l = m.length, a, n, u; 

		while(i < l) {
			a = m[i++];

			if (!a) {
				if (a === 0) {
					childs.push({nodeType: 3, data: a});
				};
				continue;
			};


			if (a.nodeType > 0) {
				if (a.parentNode) {
					if (n = a.parentNode.childNodes) {
						n[n.indexOf(a)] = u;  // просто отмечу пустым. так будет быстрее
						//n.splice(n.indexOf(a), 1);
					};
				};

				a.parentNode = nn; // зашита от зацикливания

				childs.push(a);
				continue;
			};

			if (a.nodeType < 0) {
				if (a = a.node) {
					// x = a.nodeType;
					if (a.nodeType > 0) { // должен быть только элемент
						if (a.parentNode) {
							if (n = a.parentNode.childNodes) {
								// у элемента может быть только один родитель
								n[n.indexOf(a)] = u;
								//n.splice(n.indexOf(a), 1);
							};
						};

						a.parentNode = nn;

						childs.push(a);
					};
				};
				continue;
			};


			if (typeof a === 'object') {
				if (isArray(a)) {
					append_nativ(nn, childs, a, 0); //, a.length
				};
			}
			else if (typeof a === 'string' || typeof a === 'number' ) {
				childs.push({nodeType: 3, data: a});
			};
		};
	};

	function append_other(nn, m) {
		var i = 0, l = m.length, a, x, u;

		while (i < l) {
			a = m[i++];
			if (!a && a !== 0) continue;

			if (a.nodeType) {
				nn.appendChild(a);
				continue;
			};

			switch(typeof a){
				case 'string': case 'number':
					nn.appendChild({nodeType: 3, data: a});
					break;

				case 'object':
					if (isArray(a)) append_other(a, nn);
					break;
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

		// бегаю от a[0] до a[a.length] . проверку на наличие индекса не делаю ради производительности

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

	function set(nn, p) {
		var x, v;

		for (x in p) {
			v = p[x];
			if (v != null) {
				if (x === 'css') {
					nn['class'] = v;
				} else {
					nn[x] = v;
				};
			};

		};
	};

	
	var entities_rg = /["&<>]/g, entities_cm = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'};
	function entities_re(a) {return entities_cm[a]};

	function htmlEscape(v) {
		return String(A).replace(entities_rg, entities_re); 
	};


	function urlEscape(x) {
		return encodeURIComponent(x);
	};
	
	return new_master;
};


// конвектор обьектной модели в HTML

var objectToHTML = new function(rr) {
	var attr_name = { constructor: 'constructor', nodeType: false, nodeName: false, parentNode: false, childNodes: false, appendChild: false
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
		
		, 'method': 'method'
		, 'action': 'action'
	};
	
	var textBuffer = '';

	var entities_attr = /["&<>]/g, entities_text = /[&<>]/g, ecm = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}; // for html entity
	function entities_re(a) {return ecm[a]};

	function attrGen(nn) {
		// атрибуты 
		var x, v, i, u, attrs = '';

		for(i in nn) {
			x = attr_name[i];

			if (x === false) continue;

			if (x === u) {
				// if (i.indexOf('_') === 0 ) continue;
				if (i[0] === '_') continue;
				x = i;
			};

			v = nn[i];

			if (!v) {
				if (v === 0) {
					attrs += ' ' + x + '="0"';
				};
				continue;
			};

			switch(x) {
				case 'class': // эти атрибуты не экранирую потому как обычно в них не помешают недоверенные данные
					attrs += ' class="' + v + '"';
					break;

				case 'id': // эти атрибуты не экранирую потому как обычно в них не помешают недоверенные данные
					attrs += ' id="' + v + '"';
					break;

				default:
					attrs += ' ' + x + '="' + String(v).replace(entities_attr, entities_re) + '"';
			};
		};

		return attrs;
	};
	
	function objectToHTML(nn) {
		var n, i, l
		, childs = nn.childNodes
		, attrs = attrGen(nn) // атрибуты 
		, name = nn.nodeName 
		;

		switch(name) {
			case 'meta': 
			case 'br': 
				textBuffer += '<' + name + attrs + '/>';
				return;
		};

		// потомки
		if (!childs) {
			textBuffer += '<' + name + attrs + '></' + name + '>';
			return;
		};

		textBuffer += '<' + name + attrs + '>';

		for(i = 0, l = childs.length; i < l ; i++) {
			n = childs[i];

			if (!n) continue;

			switch(n.nodeType) {
				case 1:
					objectToHTML(n);
					continue;
				
				case 3: // text
					textBuffer += String(n.data).replace(entities_text, entities_re); // /[&<>]/g
					continue;
				
				case 42: // как есть _.write('...')
					textBuffer += n.data;
					continue;
			};
		};
		
		textBuffer += '</' + name + '>';
	};

	//return objectToHTML;


	function turn(m) {
		var i = 0, l = m.length, n;
		
		for(;i < l; i++) {
			n = m[i];

			if (!n && n !== 0) continue;

			switch(n.nodeType) {
				case 1:
					objectToHTML(n);
					continue;
				
				case 3: // text
					textBuffer += String(n.data).replace(entities_text, entities_re);
					continue;
				
				case 42: // как есть _.write('...')
					textBuffer += n.data;
					continue;
			};

			switch(typeof n) {
				case 'number': 
					textBuffer += n;
					break;

				case 'string': 
					textBuffer += n.replace(entities_text, entities_re);
					break;

				case 'object':
					if (Array.isArray(nn)) {
						turn(m)
					};
			};
		};
	};
	

	function toHTML(nn) {
		if (nn.nodeType === 1) {
			objectToHTML(nn);
		}
		else if (Array.isArray(nn) ) {
			turn(nn);
		}
		else if (nn.nodeType < 0 && nn.node) {
			toHTML(nn.node);
		};

		var r = textBuffer;
		textBuffer = '';

		return r;
	};
	
	return toHTML;
};




// help
// -----------------------

// global.tmpl единственная область видимости шаблонов
// для других используйте прямые сылки вида _(mytmpl.xxxxx, ...)
// ненужно создавать иераргию tmpl.xxxx.eeee . это усложняет шаблоны
// прямой вызов _(tmpl.xxx) шаблона немного быстрее чем через _('tmpl:xxx')
// но небудет сообшений об ошибках



// setup
// -----------------------

var tmpl = global.tmpl||(global.tmpl = {});
var master = new_master(tmpl); 


exports.master = master; // конструктор
exports.toHTML = objectToHTML; // конвектор обьектной модели в тект HTML 


// html рендринг

// var BF = new Buffer(1024*1024*10);
exports.render = function(nn, params) {

	if (typeof nn === 'string') {
		// if (nn.indexOf('tmpl:') === 0) {
		if (nn[0] === 't' && nn[1] === 'm' && nn[2] === 'p' && nn[3] === 'l' && nn[4] === ':') {
			nn = tmpl[nn.substr(5)];
		} else {
			return;
		};
	};

	if (typeof nn !== 'function') {
		return;
	};


	if (!nn.prototype.nodeType) nn.prototype.nodeType = -1;
	return objectToHTML(new nn(master, params||false));
};




