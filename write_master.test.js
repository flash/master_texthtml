/*! Author: Vopilovsky Constantine <flash.vkv@gmail.com> */

'use strict';

var rr = this.rr || (this.rr = {});

(function(rr) {
	rr.new_master = function (ns) {

		//var attr_name = {cellSpacing: 'cellspacing', 'constructor': 'constructor'};
		var attr_reserved = {parent: true, before: true, after: true, nodeName: true, nodeType: true, children: true, constructor: false}
		

		function master(uu, q) {
			if (!uu) return;

			var nn = uu
			, i, x, id, css, pn, sx, v, p, a
			, is_group // флаг что это компонент (nodeType < 0)
			, u
			;
			
			arguments[0] = u;

			if (q && !q.nodeType && typeof q == 'object') {
				if (q.length === u || !isArray(q)) {
					p = q;
					arguments[1] = u;
				};
			};


			// create element
			switch (nn) {
				case 'div': case 'li': case 'br': case 'span': case 'a': case 'td': case 'abbr':
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


							case 'text':
								arguments[0] = {nodeType: 3, data: v};
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
						append_nativ(pn, arguments, x)
					} else {
						append_nativ(pn, arguments, x = []); 
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


	function append_nativ(nn, m, childs) {
		var i = 0, l = m.length, a, x, n, u;

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
					childs.push({nodeType: 3, data: a});
					break;

				case 'object':
					if (isArray(a)) {
						append_nativ(nn, a, childs);
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


})(rr);

var tmpl = this.tmpl || (this.tmpl = {});
rr.master = rr.new_master({tmpl: tmpl});


// конвектор обьектной модели в HTML
(function(rr) {
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

	rr.object2html = function(n) {
		var buu = [];

		objectNode2html(n, buu);

		return buu.join('')
	};

	rr.renderhtml = function(n, p) {
		var buu = [];
		
		
		this.master.namespace
		
		rr.writeMaster(n, p)

		tmpl_test(_, false)

		objectNode2html(n, buu);

		return buu.join('')
	};

	var entities_rg = /[&<>"]/g, entities_cm = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}; // for html entity
	function entities_re(A) {return entities_cm[A]};

	function objectNode2html(nn, buu) {
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
							objectNode2html(n, buu)
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

})(rr);




// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------










var value_for_test = new function() {
	var m = [], x = 1000;
	while(x--) m.push([1,2,3,4,5,6,7,8,9,10])
	return m
};



tmpl.testA = function(_, p) {
	return _('table'
		, _.map(p.table, function(row) {
			return _('tr'
				, _.map(row, function(v) {
					return _('td.s'
						, _.text(v)
						)
				})
			)
		})
	)
};

tmpl.testB = function(_, p) {
	return _('table.b-xxx_table'
		, _.map(p.table, function(row) {
			return _('tr.b-xxx_row'//, {"data-url": "wwww"}
				, _.map(row, function(v) {
					return _('td.b-xxx_cell'
						, _.text(v + " eee <ddd> eee") 
						)
				})
			)
		})
	)
};


tmpl.testC = function(_,pr){return _('table',{width:'800'},_('tbody',_('tr',_('td',{width:'200'},_('table',{cellPadding:'4',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('h1',"Lebowski benchmark")))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Walter")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"You see what happens, Larry?"))))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Walter")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"I don\'t roll on Shabbos!"))))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Blond Thug")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"Where\'s the money, Lebowski?"))))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Nihilist")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"We believe in nothing, Lebowski."))))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Walter")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"Is this your homework, Larry?"))))))),_('td',{width:'200'},_('table',{cellPadding:'2',cellSpacing:'2',border:'0',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',"Nihilist")))),_('tr',_('td',_('small',_('a',{href:'http://www.imdb.com/title/tt0118715/quotes'},"Ve vant ze money, Lebowski")))))))),_('tr',_('td',{width:'200'},_('table',{cellPadding:'3',width:'100%'},_('tbody',_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=1234'},"The Dude"))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=2345'},"Walter Sobchak"))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=3456'},"Donny"),_('font',"R.I.P."))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=4567'},"Maude Lebowski"))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=5678'},"The Big Lebowski"))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=6789'},"Brandt"))))),_('tr',_('td',_('font',_('b',_('a',{href:'http://lb/section.phtml?id=7890'},"Jesus Quintana"))))))),_('p',_('b',"Users"),": 654329",_('br'),_('b',"Online"),": 18",_('br'),_('small',_('i',_('a',{href:'http://lb/user.phtml?id=1'},"true"),_('a',{href:'http://lb/user.phtml?id=2'},"false"),_('a',{href:'http://lb/user.phtml?id=3'},"short"),_('a',{href:'http://lb/user.phtml?id=4'},"long"),_('a',{href:'http://lb/user.phtml?id=5'},"apha"),_('a',{href:'http://lb/user.phtml?id=6'},"omega"),_('a',{href:'http://lb/user.phtml?id=7'},"drag"),_('a',{href:'http://lb/user.phtml?id=8'},"drop"),_('a',{href:'http://lb/user.phtml?id=9'},"make"),_('a',{href:'http://lb/user.phtml?id=10'},"clean"),_('a',{href:'http://lb/user.phtml?id=11'},"east"),_('a',{href:'http://lb/user.phtml?id=12'},"west"),_('a',{href:'http://lb/user.phtml?id=13'},"up"),_('a',{href:'http://lb/user.phtml?id=14'},"down"),_('a',{href:'http://lb/user.phtml?id=15'},"sun"),_('a',{href:'http://lb/user.phtml?id=16'},"rain"),_('a',{href:'http://lb/user.phtml?id=17'},"secondary"),_('a',{href:'http://lb/user.phtml?id=18'},"main"))))),_('td',{colSpan:3,width:'400'},_('b',"03:45 The Stranger"),_('br'),_('small',"See, they call Los Angeles the \"City Of Angels\"; but I didn\'t find it to be that, exactly. But I\'ll allow it as there are s ome nice folks there. \'Course I ain\'t never been to London, and I ain\'t never seen France. And I ain\'t never seen no queen in her damned undies, so the feller says. But I\'ll tell you what - after seeing Los Angeles, and this here story I\'m about to unfold, well, I guess I seen somethin\' every bit as stupefyin\' as you\'d seen in any of them other places. And in English , too. So I can die with a smile on my face, without feelin\' like the good Lord gypped me. Now this here story I\'m about to unfold took place in the early \'90s - just about the time of our conflict with Sad\'m and the I-raqis. I only mention it be cause sometimes there\'s a man...",_('a',{href:'http://lb/news.phtml?id=987'},"[ read full story ]")),_('br'),_('b',"03:48 The Stranger"),_('br'),_('small',"...I won\'t say a hero, \'cause, what\'s a hero? Sometimes, there\'s a man. And I\'m talkin\' about the Dude here - the Dude from Los Angeles. Sometimes, there\'s a man, well, he\'s the man for his time and place. He fits right in there. And that\'s the Dude. The Dude, from Los Angeles. And even if he\'s a lazy man - and the Dude was most certainly that. Quite possibly the laziest in all of Los Angeles County, which would place him high in the runnin\' for laziest worldwide. Sometimes there\'s a man , sometimes, there\'s a man. Well, I lost my train of thought here. But... aw, hell. I\'ve done introduced it enough.",_('a',{href:'http://lb/news.phtml?id=876'},"[ read full story ]")),_('br'),_('b',"03:50 Walter Sobchak"),_('br'),_('small',"Donny was a good bowler, and a good man. He was one of us. He was a man who loved the outdoors... and bowling, and as a surfer he explored the beaches of Southern California, from La Jolla to Leo Carrillo and... up to... Pismo. He died, like so many young men of his generation, he died before his time. In your wisdom, Lord, you took him, as you took so many bright flowering young men at Khe Sanh, at Langdok, at Hill 364. These young men gave their lives. And so would Donny. Donny, who loved bowling. And so, Theodore Donald Karabotsos, in accordance with what we think your dying wishes might well have been, we commit your final mortal remains to the bosom of the Pacific Ocean, which you loved so well. Good night, sweet prince.",_('a',{href:'http://lb/news.phtml?id=765'},"[ read full story ]")),_('br'),_('b',"03:52 The Dude"),_('br'),_('small',"God damn you Walter! You fuckin\' asshole! Everything\'s a fuckin\' travesty with you, man! And what was all that shit about Vietnam? What the FUCK, has anything got to do with Vietnam? What the fuck are you talking about?",_('a',{href:'http://lb/news.phtml?id=654'},"[ read full story ]")),_('br'),_('b',"03:57 Jesus Quintana"),_('br'),_('small',"What\'s this day of rest shit? What\'s this bullshit? I don\'t fuckin\' care! It don\'t matter to Jesus. But you\'re not foolin\'me, man. You might fool the fucks in the league office, but you don\'t fool Jesus. This bush league psyche-out stuff. Laughable, man - ha ha! I would have fucked you in the ass Saturday. I fuck you in the ass next Wednesday instead. Wooo! You gotadate Wednesday, baby!",_('a',{href:'http://lb/news.phtml?id=543'},"[ read full story ]")),_('br'),_('b',"03:59 Jesus Quintana"),_('br'),_('small',"Let me tell you something, pendejo. You pull any of your crazy shit with us, you flash a piece out on the lanes, I\'ll take it away from you, stick it up your ass and pull the fucking trigger \'til it goes \"click.\"",_('a',{href:'http://lb/news.phtml?id=432'},"[ read full story ]")),_('br'),_('b',"04:01 The Dude"),_('br'),_('small',"Let me explain something to you. Um, I am not \"Mr. Lebowski\". You\'re Mr. Lebowski. I\'m the Dude. So that\'s what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you\'re not into the whole brevity thing.",_('a',{href:'http://lb/news.phtml?id=321'},"[ read full story ]")),_('br'))),_('tr',_('td',{colSpan:4},_('hr'),_('small',_('i',"This test based on \"Big Lebowski\" test by Alexey A. Rybak, 2005.",_('br'),"Please send all questions and suggestions to",_('b',"reki@reki.ru")))))))};

tmpl.testD = function(_, p) {
	return _('div.companent'
		, _.text('eeee eee rrr tttt')
		, _('div.box'
			, _('tmpl:testC', false)
		)
	)
}

var bench_vars = {
	"adverts" : [
	    {
		"title" : "Walter",
		"text" : "You see what happens, Larry?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Walter",
		"text" : "I don't roll on Shabbos!",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Blond Thug",
		"text" : "Where's the money, Lebowski?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Nihilist",
		"text" : "We believe in nothing, Lebowski.",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Walter",
		"text" : "Is this your homework, Larry?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Nihilist",
		"text" : "Ve vant ze money, Lebowski",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    }
	],

	"sections" : [
	    {
		"id" : 1234,
		"title" : "The Dude",
		"rip" : 0
	    },
	    {
		"id" : 2345,
		"title" : "Walter Sobchak",
		"rip" : 0
	    },
	    {
		"id" : 3456,
		"title" : "Donny",
		"rip" : 1
	    },
	    {
		"id" : 4567,
		"title" : "Maude Lebowski",
		"rip" : 0
	    },
	    {
		"id" : 5678,
		"title" : "The Big Lebowski",
		"rip" : 0
	    },
	    {
		"id" : 6789,
		"title" : "Brandt",
		"rip" : 0
	    },
	    {
		"id" : 7890,
		"title" : "Jesus Quintana",
		"rip" : 0
	    }
	],

	"total" : 654329,
	"online" : [
	       { "name" : "true"      },
	       { "name" : "false"     },
	       { "name" : "short"     },
	       { "name" : "long"      },
	       { "name" : "apha"      },
	       { "name" : "omega"     },
	       { "name" : "drag"      },
	       { "name" : "drop"      },
	       { "name" : "make"      },
	       { "name" : "clean"     },
	       { "name" : "east"      },
	       { "name" : "west"      },
	       { "name" : "up"        },
	       { "name" : "down"      },
	       { "name" : "sun"       },
	       { "name" : "rain"      },
	       { "name" : "secondary" },
	       { "name" : "main"      }
	    ],

	"news" : [
	    {
		"time" : "03:45",
		"id" : 987,
		"title" : "The Stranger",
		"text" : "See, they call Los Angeles the \"City Of Angels\"; but I didn't find it to be that, exactly. But I'll allow it as there are s ome nice folks there. 'Course I ain't never been to London, and I ain't never seen France. And I ain't never seen no queen in her damned undies, so the feller says. But I'll tell you what - after seeing Los Angeles, and this here story I'm about to unfold, well, I guess I seen somethin' every bit as stupefyin' as you'd seen in any of them other places. And in English , too. So I can die with a smile on my face, without feelin' like the good Lord gypped me. Now this here story I'm about to unfold took place in the early '90s - just about the time of our conflict with Sad'm and the I-raqis. I only mention it be cause sometimes there's a man..."
	    },
	    {
		"time" : "03:48",
		"id" : 876,
		"title" : "The Stranger",
		"text" : "...I won't say a hero, 'cause, what's a hero? Sometimes, there's a man. And I'm talkin' about the Dude here - the Dude from Los Angeles. Sometimes, there's a man, well, he's the man for his time and place. He fits right in there. And that's the Dude. The Dude, from Los Angeles. And even if he's a lazy man - and the Dude was most certainly that. Quite possibly the laziest in all of Los Angeles County, which would place him high in the runnin' for laziest worldwide. Sometimes there's a man , sometimes, there's a man. Well, I lost my train of thought here. But... aw, hell. I've done introduced it enough."
	    },
	    {
		"time" : "03:50",
		"id" : 765,
		"title" : "Walter Sobchak",
		"text" : "Donny was a good bowler, and a good man. He was one of us. He was a man who loved the outdoors... and bowling, and as a surfer he explored the beaches of Southern California, from La Jolla to Leo Carrillo and... up to... Pismo. He died, like so many young men of his generation, he died before his time. In your wisdom, Lord, you took him, as you took so many bright flowering young men at Khe Sanh, at Langdok, at Hill 364. These young men gave their lives. And so would Donny. Donny, who loved bowling. And so, Theodore Donald Karabotsos, in accordance with what we think your dying wishes might well have been, we commit your final mortal remains to the bosom of the Pacific Ocean, which you loved so well. Good night, sweet prince."
	    },
	    {
		"time" : "03:52",
		"id" : 654,
		"title" : "The Dude",
		"text" : "God damn you Walter! You fuckin' asshole! Everything's a fuckin' travesty with you, man! And what was all that shit about Vietnam? What the FUCK, has anything got to do with Vietnam? What the fuck are you talking about?"
	    },
	    {
		"time" : "03:57",
		"id" : 543,
		"title" : "Jesus Quintana",
		"text" : "What's this day of rest shit? What's this bullshit? I don't fuckin' care! It don't matter to Jesus. But you're not foolin'me, man. You might fool the fucks in the league office, but you don't fool Jesus. This bush league psyche-out stuff. Laughable, man - ha ha! I would have fucked you in the ass Saturday. I fuck you in the ass next Wednesday instead. Wooo! You gotadate Wednesday, baby!"
	    },
	    {
		"time" : "03:59",
		"id" : 432,
		"title" : "Jesus Quintana",
		"text" : "Let me tell you something, pendejo. You pull any of your crazy shit with us, you flash a piece out on the lanes, I'll take it away from you, stick it up your ass and pull the fucking trigger 'til it goes \"click.\""
	    },
	    {
		"time" : "04:01",
		"id" : 321,
		"title" : "The Dude",
		"text" : "Let me explain something to you. Um, I am not \"Mr. Lebowski\". You're Mr. Lebowski. I'm the Dude. So that's what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you're not into the whole brevity thing."
	    }
	]
}



var tmpl_bench = function(_, p) {
	return _('html'
		, _('head'
			, _('meta'
				, {
					'http-equiv': "content-type",
					'content': "text/html; charset=windows-1251"
				}
			)
		)
		, _('body'
			, _('table', {width: 800}
				, _('tbody'
					, _('tr'
						, _('td', {width: 200}
							, _('table', {bgcolor: "#000000",  border: 0, cellpadding: 4, cellspacing: 2, width: "100%"}
								, _('tbody'
									, _('tr'
										, _('td', {bgcolor: "#ffffff"}
											, _('h1', "Lebowski benchmark")
										)
									)
								)
							)
						)
						, _.map(p.adverts, function(adverts) {
							return _('td', {valign: "top", width: 200}
								, _('table', {bgcolor: "#000000", border: 0, cellpadding: 2, cellspacing: 2, width: "100%"}
									, _('tbody'
										, _('tr'
											, _('td'
												, _('font', {color: "#ffffff"}
													, _('b'
														, _.text(adverts.title)
													)
												)
											)
										)
										
										, _('tr'
											, _('td', {bgcolor: "#ffffff"}
												, _('small'
													, _('a', {href: adverts.url}
														, _.text(adverts.text)
													)
												)
											)
										)
									)
								)
							);
						})
					)

					, _('tr', {valign: "top"}
						, _('td', {width: "200"}
							, !!p.sections && _('table', {cellpadding: "3", width:"100%"}
								, _('tbody'
									, _.map(p.sections, function(sections) {
										return _('tr'
											, _('td', {bgcolor: sections.ODD ? '#dddddd' : '#eeeeee'}
												, _('font', {color: "#ffffff"}
													, _('b'
														, _('a', {href: "http://lb/section.html?id=" + escape(sections.id) }
															, _.text(sections.title)
														)
													)
												)

												, !!sections.rip && _('font', {color: "#999999"}
													, "R.I.P."
												)
											)
										)
									})
								)
							)

							, _('p'
								, _('b', "Users"), ': ' + p.total
								, _('br')
								, _('b', "Online"), ': ' + Number(p.online)
								, _('br')

								, _('small'
									, _('i'
										, _.map(p.online, function(online, z) {
											return _('a' , {href: "http://lb/user.html?id=" + z.index}
												, _.text(online.name)
											)
										})
									)
								)
							)
						)

						, _('td', {colspan: 3, width: 400}
							, _.map(p.news, function(news) {
								return [
									, _('b', _.text(news.time + ' ' + news.title) )
									, _('br')
									, _('small'
										, _.text(news.text)
										, _('a', {href: "http://lb/news.html?id=" + escape(news.id)}
											, "[ read full story ]"
										)
									)
								]
							})
						)
					)
					, _('tr'
						, _('td', {colspan: 4, align: "center"}
							, _('hr')
							, _('small'
								, _('i'
									, "This test based on \"Big Lebowski\" test by Alexey A. Rybak, 2005."
									, _('br')
									, "Please send all questions and suggestions to "
									, _('b', 'reki@reki.ru')
								)
							)
						)
					)
				)
			)
		)
	);
};


// тесты отсюда http://ctpp.havoc.ru/template_benchmarks.html
// и отсюда http://stackoverflow.com/questions/1324238/what-is-the-fastest-template-system-for-python


(function() {
	var _ = rr.master;
	
	var T1, max = 10000, x = max, tx;

	T1 = new Date();

	while(x--) {
		tx = rr.object2html(new tmpl_bench(_, bench_vars) );
		//tx = rr.object2html(new tmpl.testA(_, {table:value_for_test}));
		//tx = rr.object2html(new tmpl.testD(_, false));
	};


	T1 = new Date() - T1; 

	console.log(tx) 
	//document.write(tx);
	console.log( 'fps  '+(max/T1*1000) +'  time: '+(T1/max)+'   full time:'+ (T1/1000))
	
})()

