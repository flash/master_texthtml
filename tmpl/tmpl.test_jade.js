
tmpl.jade_tiny = function(_, p) {
	return _('html'
		, _('body'
			,_('h1'
			 , "Title"
			)
		)
	);
};

tmpl.jade_small = function(_, p) {
	return _('body'
		, _('body'
			, _('h1', "Title")
			, _('ul'
				, _('li'
					, _('a', {href: '#'}, "Home")
				)
				, _('li'
					, _('a', {href: '#'}, "About Us")
				)
				, _('li'
					, _('a', {href: '#'}, "Store")
				)
				, _('li'
					, _('a', {href: '#'}, "FAQ")
				)
				, _('li'
					, _('a', {href: '#'}, "Contact")
				)
			)
		)
	)
};

tmpl.jade_locals = function(_, p) {
	return _('html'
		, _('body'
			,_('h1'
				, _.text(p.title)
			)
			, _('ul#menu'
				, _.map(p.links, function(link) {
					return _('li'
						, _('a', {href: '#'}, _.text(link))
					)
				})
			)
		)
	)
};

