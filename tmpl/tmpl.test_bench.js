'use strict';

tmpl.bench = function(_, p) {
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


