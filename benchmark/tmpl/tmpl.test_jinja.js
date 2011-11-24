

// пример теста взят отсюда http://svn.python.org/projects/external/Jinja-2.3.1/examples/bench.py

/*
var value_for_test_jinja = {
    page_title: 'mitsuhiko\'s benchmark',
    table: new function() {
	var m = [], i = 1000;
	while (i--) m.push([1,2,3,4,5,6,7,8,9,10]);
	return m;
    }
};
*/

tmpl.test_jinja = function (_, p) {
	return [
		, _.write('<!doctype html>')
		
		, _('html'
			, _('head'
				, _('title'
					, _.text(p.page_title)
				)
			)
			, _('body'
				, _('div.header'
					, _('h1', {text: p.page_title})
				)
				, _('ul.navigation'
					, _.map([['index.html', 'Index'], ['downloads.html', 'Downloads'], ['products.html', 'Products']]
						, function(link) {
							return _('li'
								, _('a', {href: link[0], text: link[1]})
							)
						}
					)
				)
				
				, _('div.table'
					, _('table'
						, _.map(p.table, function(row) {
							return _('tr'
								, _.map(row, function(cell) {
									return _('td'
										, _.text(cell)
									)
								})
							)
						})
					)
				)
			)
		)
	];
	
	
};

