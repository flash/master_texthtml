/*! Author: Vopilovsky Constantine <flash.vkv@gmail.com> */

'use strict';

var new_master = new function() {

	function new_master(tmpl) {

		var hash_elements = {constructor: false, 'td': true, 'tr': true, 'a': true, 'span': true, 'hr': true, 'meta': true, 'head': true, 'nobr': true, 'input': true, 'link': true, 'em': true, 'blockquote': true, 'strong': true, 'img': true, 'dt': true, 'dl': true, 'dd': true, 'div': true, 'li': true, 'ul': true, 'br': true, 'th': true, 'abbr': true, 'h1': true, 'h2': true, 'h3': true, 'h4': true, 'b': true, 'font': true, 'p': true, 'small': true, 'tbody': true, 'table': true, 'i': true, 'body': true, 'html': true};

		function master(uu, q) {
			if (!uu) return;

			var nn = uu
			, i, x, css, pn, sx, v, p, a, c //, id
			, append_index = 1 // с какого аргумента наченаются потомки
			, pm = false // параметры
			, is_group // флаг что это компонент (nodeType < 0)
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
					nn = {nodeType: 1, nodeName: nn};
				} 
				else if (nn.length > 5 && nn[4] === ':' && nn[0] === 't' && nn[1] === 'm' && nn[2] === 'p' && nn[3] === 'l') { // по тестам вроде есть прирост
				// else if (nn.indexOf('tmpl:') === 0) {
					c = tmpl[nn.substring(5)];
					if (typeof c === 'function') {
						if (!c.prototype.nodeType) c.prototype.nodeType = -1; // чтобы в шаблоне каждый рас не опредлять
						v = new c(master, pm, false);

						if (!nn.nodeType) {
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
							nn = {nodeType: 1, nodeName: nn.substring(0, i), 'class': nn.substring(i + 1, x), id: nn.substring(x + 1)};
						} else {
							nn = {nodeType: 1, nodeName: nn.substring(0, x), id: nn.substring(x + 1) };
						};
					} else {
						i = nn.indexOf('.'); 
						if (css = i !== -1) {
							nn = {nodeType: 1, nodeName: nn.substring(0, i), 'class': nn.substring(i + 1)};
						} else {
							nn = {nodeType: 1, nodeName: nn};
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
				} 
				else {
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
								break; 

							// у меня сомнение что идеологически это правильно. но он зараза удобен ). 
							// атрибут text при этом создать не получиться
							case 'text':
								if (v || v === 0) {
									arguments[1] = {nodeType: 3, data: v}; // второй аргумет свободен потому как есть параметры
									append_index = 1;
								};
								break;

							// зарезервированные значения
							case 'nodeName': case 'nodeType': case 'childNodes': case 'appendChild': //case 'parent': case 'before': case 'after': 
								break;

							default:
								if (v !== u) { 
									nn[x] = v;
								};
						};
					};
				};
			};


			// append child
			if (is_group) {
				if (typeof nn.appendChild === 'function') {
					pn = nn.box || nn.node || false;
				} else {
					sx = true; // у обьекта свой способ добавления элементов
				};
			} else {
				pn = nn;
			};

			if (sx) {
				append_other(nn, arguments)
			} 
			else if (pn) {
				if (pn.childNodes) {
					append_nativ(pn, pn.childNodes, arguments, append_index)
				} else {
					append_nativ(pn, x = [], arguments, append_index); 
					if (x.length > 0) {
						pn.childNodes = x;
					};
				};
			};

			// return and insert element
			return nn;
			//return pm && !is_group ? pm.parent || pm.after || pm.before ? insert(nn, pm, is_group) : nn : nn ;
		};

		master.text = text;
		master.write = write;
		master.map = map;

		return master;
	};

	function append_nativ(nn, childs, m, i) {
		var l = m.length, a, n, u; //, i = ix, x, l = len || m.length 

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


	var entities_rg = /["&<>]/g, ecm = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}; // for html entity
	function entities_re(a) {return ecm[a]};

	
	// в тестах вроде выигрывает такой подход. но на практике получается другой. нужно больше тестировать
	function entities(S) {
		return String(S).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
		//return /[&<>"]/.test(S) ? String(S).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : S;
	};


	
	function objectToHTML(nn, buu) {
		var m, n, x, v, i, l, u
		, name = nn.nodeName 
		, attrs = ''
		;

		// атрибуты 
		for(i in nn) {
			x = attr_name[i];
			if (x === false) continue;

			if (x === u) {
				// if (i.indexOf('_') === 0 ) continue;
				if (i[0] === '_' ) continue;
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

		


		// потомки
		if (m = nn.childNodes) {
			buu.push('<' + name + attrs + '>');

			for(i = 0, l = m.length; i < l ;i++) {
				n = m[i];

				if (!n) continue;

				/*
				if (n.nodeType === 1) {
						objectToHTML(n, buu);
						continue;
				};

				if (n.nodeType === 3) {
						buu.push(String(n.data).replace(entities_rg, entities_re) );
						continue;
				};
				
				if (n.nodeType === 42) {
						buu.push(n.data);
						continue;
				};
				*/

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
			
			buu.push('</' + name + '>');
		} else {
			buu.push('<' + name + attrs + '></' + name + '>');
		};
	};

	//return objectToHTML;


	function turn(m, buu) {
		var i = 0, l = m.length, n;
		
		for(;i < l; i++) {
			n = m[i];

			if (!n && n !== 0) continue;

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
	var B = [];

	//var B = {push: function(x) {s += x}}, s = '', x; // в ноде строки быстрее соберать чем через массив. но не всегда. 
	//var s = 0, B = {push: function(x) {s += BF.write(x, s, 'binary') }}; // через буфер медленно
	

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
	objectToHTML(new nn(master, params||false), B);

	return B.join('')

	//return s; // в некоторых тестах заметен небольшой прирост, но в других наоборот деградация
	//return BF.toString('binary',0, s); // через буфер медленно
};


