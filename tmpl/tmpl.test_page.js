tmpl.test_page = function(_, p){
	// elements: 754, show: 632, text:238
	// href: http://yandex.ru/yandsearch?text=nodejs&from=fx3&clid=46510&lr=213

	return _('html.m-border-radius#js'
		, _('head'
			, _('meta')
			, _('link', {href: 'http://yandex.st/lego/_/pDu9OWAQKB0s2J9IojKpiS_Eho.ico'})
			, _('link', {href: 'http://yandex.ru/opensearch.xml', title: "Яндекс", type: 'application/opensearchdescription+xml'})
			, _('title'
				, "nodejs — Яндекс: Нашлась 91 тыс. ответов"
			)
		)
		, _('body.b-page b-page_centered_yes b-page_js_inited'
			, _('div.b-mobile-bar'
				, _('a', {href: 'http://yandex.ru/msearch?query=nodejs'}
					, "Мобильная версия"
				)
			)
			, _('div.b-head'
				, _('div.b-head__user'
					, _('table.b-head-userinfo'
						, _('tbody'
							, _('tr'
								, _('td.b-head-userinfo__td')
								, _('td.b-head-userinfo__entry'
									, _('a.b-pseudo-link', {href: 'http://passport.yandex.ru/passport?mode=auth&retpath=http%3A%2F%2Fyandex.ru%2Fyandsearch%3Ftext%3Dnodejs%26from%3Dfx3%26clid%3D46510%26lr%3D213'}
										, "Войти"
									)
									, _('form.b-domik b-domik_type_popup g-js g-hidden b-domik_type_popup_js_inited', {method: 'post', action: 'http://passport.yandex.ru/passport?mode=auth&retpath=http%3A%2F%2Fyandex.ru%2Fyandsearch%3Ftext%3Dnodejs%26from%3Dfx3%26clid%3D46510%26lr%3D213'}
										, _('input', {type: 'text', name: 'login'})
										, _('input', {type: 'password', name: 'passwd'})
										, _('input', {type: 'checkbox', name: 'twoweeks', value: "yes"})
										, _('div.b-domik__social')
									)
								)
							)
							, _('tr'
								, _('td.b-head-userinfo__td', {colSpan: 2}
									, _('div.b-head-userinfo__service'
										, _('a.b-head-userinfo__link', {href: 'http://nahodki.yandex.ru/'}
											, "Мои находки"
										)
									)
									, _('div.b-head-userinfo__help'
										, _('a.b-head-userinfo__link', {href: 'http://help.yandex.ru/search/'}
											, "Помощь"
										)
									)
								)
							)
							, _('tr'
								, _('td.b-head-userinfo__td', {colSpan: 2}
									, _('div.b-head-userinfo__setup'
										, _('a.b-head-userinfo__link', {href: 'http://yandex.ru/search/customize?retpath=http://yandex.ru%2Fyandsearch%3Ftext%3Dnodejs%26clid%3D46510'}
											, "Настройка"
										)
									)
								)
							)
							, _('tr'
								, _('td.b-head-userinfo__td', {colSpan: 2}
									, _('div.b-head-userinfo__region'
										, _('a.b-head-userinfo__link', {href: 'http://tune.yandex.ru/region/?retpath=http://yandex.ru%2Fyandsearch%3Ftext%3Dnodejs%26clid%3D46510%26domredir%3D1'}
											, "Регион"
										)
										, ": Москва"
									)
								)
							)
						)
					)
				)
				, _('div.b-head__wrap'
					, _('table.b-head__layout b-layout-table'
						, _('tbody'
							, _('tr'
								, _('td.b-head__layout-column b-head__layout-column_type_logo b-layout-table__column', {style: 'background: url(\"//www.tns-counter.ru/V13a****yandex_ru/ru/CP1251/tmsec=yandex_serp/0\") repeat scroll 0% 0% transparent;'}
									, _('div.b-head-logo'
										, _('div.b-head-logo__logo'
											, _('a.b-head-logo__link', {href: 'http://www.yandex.ru/', title: "На главную страницу Яндекса"}
												, _('img.b-head-logo__img', {src: 'http://yandex.st/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png', border: '0', width: 95, height: 37})
											)
										)
										, _('strong.b-head-logo__text'
											, "Нашлась"
											, _('br')
											, "91 тыс. ответов"
										)
									)
								)
								, _('td.b-head__layout-column b-head__layout-column_type_data b-layout-table__column'
									, _('table.b-head-tabs g-js b-head-tabs_js_inited'
										, _('tbody'
											, _('tr'
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('strong'
														, "Поиск"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://mail.yandex.ru/'}
														, "Почта"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://maps.yandex.ru/?text=nodejs'}
														, "Карты"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://market.yandex.ru/search.xml?cvredirect=1&clid=505&text=nodejs'}
														, "Маркет"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://news.yandex.ru/yandsearch?rpt=nnews&grhow=clutop&text=nodejs'}
														, "Новости"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://slovari.yandex.ru/search.xml?text=nodejs'}
														, "Словари"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://blogs.yandex.ru/search.xml?ft=blog&text=nodejs'}
														, "Блоги"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://video.yandex.ru/#search?text=nodejs'}
														, "Видео"
													)
												)
												, _('td.b-head-tabs__item b-head-tabs__tab'
													, _('a.b-head-tabs__link', {href: 'http://images.yandex.ru/yandsearch?text=nodejs'}
														, "Картинки"
													)
												)
												, _('td.b-head-tabs__tab b-head-tabs__more'
													, _('div.b-dropdowna b-dropdowna_direction_down i-bem'
														, _('span.b-dropdowna__switcher'
															, _('span.b-pseudo-link b-pseudo-link_is-bem_yes i-bem'
																, "ещё"
															)
														)
														, _('div.b-popupa b-popupa_theme_ffffff b-popupa_direction_down i-bem b-dropdowna__popup'
															, _('i.b-popupa__shadow')
															, _('i.b-popupa__tail'
																, _('i.b-popupa__tail-i')
															)
															, _('table.b-popupa__wrap', {cellPadding: '0', cellSpacing: '0'}
																, _('tbody'
																	, _('tr'
																		, _('td.b-popupa__wrap-cell'
																			, _('div.b-popupa__content'
																				, _('div.b-menu b-menu_layout_vert b-menu_preset_vmenu'
																					, _('ul.b-menu__layout-vert'
																						, _('li.b-menu__layout-vert-cell b-menu__layout-vert-cell_position_first'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://auto.yandex.ru/'}
																									, "Авто"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://afisha.yandex.ru/'}
																									, "Афиша"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://money.yandex.ru/'}
																									, "Деньги"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://yaca.yandex.ru/'}
																									, "Каталог"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://moikrug.ru/'}
																									, "Мой Круг"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://music.yandex.ru/'}
																									, "Музыка"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://narod.yandex.ru/'}
																									, "Народ"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://realty.yandex.ru/'}
																									, "Недвижимость"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://cards.yandex.ru/'}
																									, "Открытки"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://translate.yandex.ru/'}
																									, "Перевод"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://pogoda.yandex.ru/'}
																									, "Погода"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://probki.yandex.ru/'}
																									, "Пробки"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://rabota.yandex.ru/'}
																									, "Работа"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://rasp.yandex.ru/'}
																									, "Расписания"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://tv.yandex.ru/'}
																									, "Телепрограмма"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://uslugi.yandex.ru/'}
																									, "Услуги"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://fotki.yandex.ru/'}
																									, "Фотки"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://my.ya.ru/'}
																									, "Я.ру"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://soft.yandex.ru/'}
																									, "Программы"
																								)
																							)
																						)
																						, _('li.b-menu__layout-vert-cell b-menu__layout-vert-cell_position_last'
																							, _('div.b-menu__item'
																								, _('a.b-link', {href: 'http://www.yandex.ru/all'}
																									, "Все сервисы"
																								)
																							)
																						)
																					)
																				)
																			)
																		)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
									, _('div.b-head-floater i-bem b-head-floater_js_inited', {style: 'height: auto; width: 100%;'}
										, _('div.b-head-search b-head-search_grad_yes b-head-search_floater_yes i-bem b-head-search_js_inited', {style: 'width: auto; background-color: rgb(255, 204, 0);'}
											, _('div.b-head-search__wrap b-head-search__arrow'
												, _('i.b-head-search__arr'
													, _('i.b-head-search__arr-i')
												)
												, _('form.b-search b-search_js_inited#b-head-search', {method: 'get', action: 'http://yandex.ru/yandsearch'}
													, _('table.b-search__table'
														, _('tbody'
															, _('tr'
																, _('td.b-search__input'
																	, _('span.b-form-input b-form-input_size_16 b-form-input_has-clear_yes i-bem b-form-input_js_inited'
																		, _('span.b-form-input__box'
																			, _('input.b-form-input__input', {type: 'text', name: 'text', value: "nodejs"})
																			, _('span.b-form-input__clear b-form-input__clear_visibility_visible')
																			, _('input', {type: 'hidden', name: 'clid', value: "46510"})
																			, _('input', {type: 'hidden', name: 'lr', value: "213"})
																		)
																	)
																)
																, _('td.b-search__button'
																	, _('span.b-form-button b-form-button_theme_grey-no-transparent-26 b-form-button_height_26 i-bem b-form-button_js_inited'
																		, _('i.b-form-button__left')
																		, _('span.b-form-button__content'
																			, _('span.b-form-button__text'
																				, "Найти"
																			)
																		)
																		, _('input.b-form-button__input', {type: 'submit'})
																	)
																)
															)
															, _('tr.b-search__foot'
																, _('td.b-search__under'
																	, _('div.b-suggest g-js b-suggest_reaction_changing b-suggest_js_inited'
																		, _('div.b-suggest-popup', {style: 'display: none;'}
																			, _('i.b-suggest__opera-gap')
																			, _('div.b-suggest-list'
																				, _('iframe.b-suggest__iframe', {src: 'javascript:\'<body%20style=\\\'background:none;overflow:hidden\\\'>\''})
																				, _('ul.b-suggest-items')
																				, _('div.b-suggest-nah')
																			)
																		)
																	)
																	, _('a.b-search__advanced#advanced', {href: 'http://yandex.ru/search/advanced?text=nodejs&numdoc=10'}
																		, "расширенный поиск"
																	)
																	, _('span.b-search__precise'
																		, _('label.b-search__precise-label'
																			, _('input.b-search__precise-check#holdreq', {type: 'checkbox', name: 'holdreq', value: "nodejs"})
																			, "в найденном"
																		)
																	)
																	, _('span.b-search__precise'
																		, _('label.b-search__precise-label'
																			, _('input.b-search__precise-check#geosuggest', {type: 'checkbox', name: 'rstr', value: "-213"})
																			, "в Москве"
																		)
																	)
																)
																, _('td')
															)
														)
													)
												)
												, _('input', {type: 'hidden', name: 'fs'})
											)
										)
										, _('div.b-head-floater__fade', {style: 'top: -108px;'})
									)
								)
							)
						)
					)
				)
			)
			, _('div.b-page-layout b-page-layout_pager_yes b-page-layout_bt_yes b-page-layout_bmt_yes'
				, _('div.b-page-layout__column b-page-layout__column_type_left'
					, _('div.b-page-layout__column-proxy'
						, _('div.b-top-wizard'
							, _('div.z-region-hint g-gap-vertical g-gap-horizontal'
								, _('span.z-region-hint__head'
									, "Результаты"
								)
								, _('span.z-region-hint__item z-region-hint__item_state_current'
									, "все"
								)
								, _('span.z-region-hint__item'
									, _('a', {href: 'http://yandex.ru/yandsearch?text=nodejs&clid=46510&lr=213&lang=ru'}
										, "в рунете"
									)
								)
								, _('span.z-region-hint__item'
									, _('a', {href: 'http://yandex.ru/yandsearch?text=nodejs&clid=46510&lr=213&foreign=1'}
										, "в мировом интернете"
									)
								)
							)
						)
						, _('div.b-body-items'
							, _('ol.b-serp-list b-serp-list_page_0'
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt 0pt;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "1"
										)
										, _('a.b-serp-item__title-link', {href: 'http://nodejs.ru/'}
											, _('span'
												, _('b'
													, "nodeJS"
												)
											)
										)
									)
									, _('div.b-serp-item__text'
										, "В целях изучения Redis и"
										, _('b'
											, "nodejs"
										)
										, ", давайте напишем небольшую модель."
										, _('i.b-wbr')
										, "Итак, задача. Для примера, пусть мы пишем бота, который посещает веб"
										, _('i.b-wbr')
										, "страницы. А сохранять мы будем адреса сайтов и..."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://nodejs.ru/'}
													, _('b'
														, "nodejs"
													)
													, ".ru"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fnodejs.ru%2F&text=nodejs&l10n=ru&mime=html&sign=ebcb906d1f2a9ed1c5358af8ab96c3d5&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=nodejs.ru&clid=46510&lr=213', title: "Поискать «nodejs» на сайте nodejs.ru"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -16px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "2"
										)
										, _('a.b-serp-item__title-link', {href: 'http://nodejs.org/'}
											, _('span'
												, "node.js"
											)
										)
										, _('span.b-serp-item__translate'
											, _('a.b-serp-item__translate__link b-serp-item__links-link', {href: 'http://translate.yandex.ru/translate?srv=yasearch&url=http%3A%2F%2Fnodejs.org%2F&lang=en-ru&ui=ru'}
												, "перевод"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "Event-driven I/O server-side JavaScript environment based on V8."
										, _('i.b-wbr')
										, "Includes API documentation, change-log, examples and announcements."
										, _('br')
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://nodejs.org/'}
													, _('b'
														, "nodejs"
													)
													, ".org"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fnodejs.org%2F&text=nodejs&l10n=ru&mime=html&sign=650404622d5eb2f8c28729264ee1c79f&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=nodejs.org&clid=46510&lr=213', title: "Поискать «nodejs» на сайте nodejs.org"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -32px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "3"
										)
										, _('a.b-serp-item__title-link', {href: 'http://ru.wikipedia.org/wiki/Node.js'}
											, _('span'
												, "Node.js — Википедия"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "Сайт. http://"
										, _('b'
											, "nodejs"
										)
										, ".org/"
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://ru.wikipedia.org/'}
													, "ru.wikipedia.org"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://ru.wikipedia.org/wiki/Node.js'}
													, "wiki/Node.js"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fru.wikipedia.org%2Fwiki%2FNode.js&text=nodejs&l10n=ru&mime=html&sign=5116fc876929a5a03ddb91be2a4ec631&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -48px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "4"
										)
										, _('a.b-serp-item__title-link', {href: 'http://groups.google.com/group/nodejs'}
											, _('span'
												, _('b'
													, "nodejs"
												)
												, "Группы Google"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "["
										, _('b'
											, "nodejs"
										)
										, "] Someone successful installing"
										, _('b'
											, "nodejs"
										)
										, "v0.4.x on debian lenny"
										, _('i.b-wbr')
										, "? Ben Noordhuis - 10:45 - авторов: 2 - 1 ответ. XML Отправить"
										, _('i.b-wbr')
										, "сообщение в группу:"
										, _('b'
											, "nodejs"
										)
										, "@googlegroups.com."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://groups.google.com/'}
													, "groups.google.com"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://groups.google.com/group/nodejs'}
													, "group/"
													, _('b'
														, "nodejs"
													)
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fgroups.google.com%2Fgroup%2Fnodejs&text=nodejs&l10n=ru&mime=html&sign=ebdf3acacf6b4620bb9c3a6cf81784af&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=google.com&clid=46510&lr=213', title: "Поискать «nodejs» на сайте google.com"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -64px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "5"
										)
										, _('a.b-serp-item__title-link', {href: 'http://habrahabr.ru/blogs/javascript/83865/'}
											, _('span'
												, _('b'
													, "nodeJS"
												)
												, "и nonblocking I/O / JavaScript / Хабрахабр"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "Вместо завершения. Неблокирующий ввод вывод — часть философии"
										, _('b'
											, "nodeJS"
										)
										, _('i.b-wbr')
										, ". Работа с файлами, работа с TCP, HTTP, DNS, общение с системой,"
										, _('i.b-wbr')
										, "общение с другими процессами, всё это не блокирует..."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://habrahabr.ru/'}
													, "habrahabr.ru"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://habrahabr.ru/blogs/'}
													, "Тематические"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://habrahabr.ru/blogs/javascript/'}
													, "JavaScript"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://habrahabr.ru/blogs/javascript/83865/'}
													, "83865"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fhabrahabr.ru%2Fblogs%2Fjavascript%2F83865%2F&text=nodejs&l10n=ru&mime=html&sign=c3c7cd6a183e8591e86fb15f1a1a114a&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=habrahabr.ru&clid=46510&lr=213', title: "Поискать «nodejs» на сайте habrahabr.ru"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -80px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "6"
										)
										, _('a.b-serp-item__title-link', {href: 'http://www.xakep.ru/post/53583/'}
											, _('span'
												, "Серверный JavaSсriрt: знакомимся с Node.JS"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "WWW. Материалы по"
										, _('b'
											, "NodeJS"
										)
										, ": groups.google.com/group/"
										, _('b'
											, "nodejs"
										)
										, "."
										, _('i.b-wbr')
										, "Русскоязычный сайт и форум: forum."
										, _('b'
											, "nodejs"
										)
										, ".ru. Информация о серверном"
										, _('i.b-wbr')
										, "JS: en.wikipedia.org/wiki/Server-side_JavaScript."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://www.xakep.ru/'}
													, "xakep.ru"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://www.xakep.ru/post/53583/'}
													, "post/53583"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fwww.xakep.ru%2Fpost%2F53583%2F&text=nodejs&l10n=ru&mime=html&sign=7eeed72be1c3902645e6e70bbac52bbb&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=xakep.ru&clid=46510&lr=213', title: "Поискать «nodejs» на сайте xakep.ru"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -96px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "7"
										)
										, _('a.b-serp-item__title-link', {href: 'http://twitter.com/nodejs'}
											, _('span'
												, "node js (@"
												, _('b'
													, "nodejs"
												)
												, ") в Твиттере"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "Присоединяйтесь и читайте @"
										, _('b'
											, "nodejs"
										)
										, ". Получайте обновления посредством"
										, _('i.b-wbr')
										, "SMS, отправив сообщение follow"
										, _('b'
											, "nodejs"
										)
										, "на короткий номер. Номера для"
										, _('i.b-wbr')
										, "других стран."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://twitter.com/'}
													, "twitter.com"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://twitter.com/nodejs'}
													, _('b'
														, "nodejs"
													)
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Ftwitter.com%2Fnodejs&text=nodejs&l10n=ru&mime=html&sign=0fb9b6ee44614c3fa297ac4b7a2df6c8&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=twitter.com&clid=46510&lr=213', title: "Поискать «nodejs» на сайте twitter.com"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -112px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "8"
										)
										, _('a.b-serp-item__title-link', {href: 'http://tokarchuk.ru/2010/07/php-vs-nodejs/'}
											, _('span'
												, "Сравнение PHP и"
												, _('b'
													, "NodeJS"
												)
												, "Токарчук Андрей"
											)
										)
									)
									, _('div.b-serp-item__text'
										, _('span.b-serp-item__from'
											, "июль 2010"
										)
										, "GIS performance. fast. Отсюда можно сделать вывод, что некоторые"
										, _('i.b-wbr')
										, "высоконагруженные части проекта можно переписать на"
										, _('b'
											, "NodeJS"
										)
										, ", а лучше"
										, _('i.b-wbr')
										, "всего на C++ и подключить как модуль"
										, _('b'
											, "nodeJS"
										)
										, "."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://tokarchuk.ru/'}
													, "tokarchuk.ru"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://tokarchuk.ru/2010/07/php-vs-nodejs/'}
													, "2010/07/php-vs-"
													, _('b'
														, "nodejs"
													)
													, "/"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Ftokarchuk.ru%2F2010%2F07%2Fphp-vs-nodejs%2F&text=nodejs&l10n=ru&mime=html&sign=b8df4f6ffe97f96becb44c2f439e013a&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=tokarchuk.ru&clid=46510&lr=213', title: "Поискать «nodejs» на сайте tokarchuk.ru"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -128px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "9"
										)
										, _('a.b-serp-item__title-link', {href: 'http://en.wikipedia.org/wiki/Node.js'}
											, _('span'
												, "Node.js - Wikipedia, the free encyclopedia"
											)
										)
										, _('span.b-serp-item__translate'
											, _('a.b-serp-item__translate__link b-serp-item__links-link', {href: 'http://translate.yandex.ru/translate?srv=yasearch&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNode.js&lang=en-ru&ui=ru'}
												, "перевод"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "There is a very active Node.js developer community primarily centered"
										, _('i.b-wbr')
										, "on two mailing lists,"
										, _('b'
											, "nodejs"
										)
										, "and"
										, _('b'
											, "nodejs"
										)
										, "-dev, and the IRC channel #"
										, _('i.b-wbr')
										, "node.js on freenode."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://en.wikipedia.org/'}
													, "en.wikipedia.org"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://en.wikipedia.org/wiki/Node.js'}
													, "wiki/Node.js"
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNode.js&text=nodejs&l10n=ru&mime=html&sign=928a922cae81bb1631e7a6a8d97aa7c9&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=wikipedia.org&clid=46510&lr=213', title: "Поискать «nodejs» на сайте wikipedia.org"}
												, "ещё"
											)
										)
									)
								)
								, _('li.b-serp-item'
									, _('i.b-serp-item__favicon', {style: 'background-position: 0pt -144px;'})
									, _('h2.b-serp-item__title'
										, _('b.b-serp-item__number'
											, "10"
										)
										, _('a.b-serp-item__title-link', {href: 'http://identi.ca/tag/nodejs'}
											, _('span'
												, "Записи с тегом"
												, _('b'
													, "nodejs"
												)
												, "— Identi.ca"
											)
										)
									)
									, _('div.b-serp-item__text'
										, "Simple continuous integration server written with"
										, _('b'
											, "NodeJS"
										)
										, "and"
										, _('i.b-wbr')
										, "CoffeeScript https://github.com/ryankee/concrete !"
										, _('b'
											, "nodejs"
										)
										, "!ci #in."
									)
									, _('div.b-serp-item__links'
										, _('span.b-serp-url b-serp-url_inline_yes'
											, _('span.b-serp-url__item'
												, _('a.b-serp-url__link', {href: 'http://identi.ca/'}
													, "identi.ca"
												)
												, _('span.b-serp-url__mark'
													, "›"
												)
												, _('a.b-serp-url__link', {href: 'http://identi.ca/tag/nodejs'}
													, "tag/"
													, _('b'
														, "nodejs"
													)
												)
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-saved'
											, _('a.b-serp-item__links-link', {href: 'http://hghltd.yandex.net/yandbtm?fmode=inject&url=http%3A%2F%2Fidenti.ca%2Ftag%2Fnodejs&text=nodejs&l10n=ru&mime=html&sign=a6affa8fa6d1f7018b24a362c129c118&keyno=0', title: "Сохранённая копия страницы на сервере Яндекса"}
												, "копия"
											)
										)
										, _('span.b-serp-item__links-item b-serp-item__links-more'
											, _('a.b-serp-item__links-link', {href: 'http://yandex.ru/yandsearch?text=nodejs&site=identi.ca&clid=46510&lr=213', title: "Поискать «nodejs» на сайте identi.ca"}
												, "ещё"
											)
										)
									)
								)
							)
						)
						, _('div.b-bottom-wizard'
							, _('div.b-serp-pager i-bem g-line b-serp-pager_js_inited'
								, _('div.b-serp-pager__button'
									, _('a.b-form-button b-form-button_theme_grey-26 b-form-button_height_26 i-bem b-form-button_js_inited', {href: 'http://yandex.ru/yandsearch?p=1&text=nodejs&clid=46510&lr=213'}
										, _('span.b-form-button__proxy'
											, _('i.b-form-button__left')
											, _('span.b-form-button__content'
												, _('span.b-form-button__text', {style: 'width: 107px;'}
													, "Ещё 10 ответов"
												)
											)
											, _('i.b-form-button__click')
										)
									)
								)
								, _('div.b-serp-pager__pager'
									, _('span.b-serp-pager__pages'
										, _('a.b-serp-pager__page b-serp-pager__page_num_0 b-serp-pager__page_state_opened b-serp-pager__page_order_first', {href: 'http://yandex.ru/yandsearch?text=nodejs&clid=46510&lr=213'}
											, "1"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_1', {href: 'http://yandex.ru/yandsearch?p=1&text=nodejs&clid=46510&lr=213'}
											, "2"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_2', {href: 'http://yandex.ru/yandsearch?p=2&text=nodejs&clid=46510&lr=213'}
											, "3"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_3', {href: 'http://yandex.ru/yandsearch?p=3&text=nodejs&clid=46510&lr=213'}
											, "4"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_4', {href: 'http://yandex.ru/yandsearch?p=4&text=nodejs&clid=46510&lr=213'}
											, "5"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_5', {href: 'http://yandex.ru/yandsearch?p=5&text=nodejs&clid=46510&lr=213'}
											, "6"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_6', {href: 'http://yandex.ru/yandsearch?p=6&text=nodejs&clid=46510&lr=213'}
											, "7"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_7', {href: 'http://yandex.ru/yandsearch?p=7&text=nodejs&clid=46510&lr=213'}
											, "8"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_8', {href: 'http://yandex.ru/yandsearch?p=8&text=nodejs&clid=46510&lr=213'}
											, "9"
										)
										, _('a.b-serp-pager__page b-serp-pager__page_num_9 b-serp-pager__page_order_last', {href: 'http://yandex.ru/yandsearch?p=9&text=nodejs&clid=46510&lr=213'}
											, "10"
										)
									)
								)
								, _('div.b-serp-pager__error'
									, "Что-то не работает :( Попробуйте еще раз через несколько секунд."
								)
							)
							, _('div.b-pager g-js g-gap-horizontal g-gap-vertical b-pager_js_inited', {style: 'margin-top: -0.5em;'}
								, _('p.b-pager__sorted'
									, "Отсортировано"
									, _('b.b-pager__select'
										, "по релевантности"
									)
									, _('a.b-pager__link', {href: 'http://yandex.ru/yandsearch?text=nodejs&clid=46510&lr=213&how=tm'}
										, "по дате"
									)
								)
							)
							, _('div.b-summary g-gap-horizontal g-gap-vertical'
								, _('div.b-summary__more'
									, _('span.b-summary__item'
										, "Поискать «"
										, _('strong'
											, "nodejs"
										)
										, "» в других поисковых системах:"
									)
									, _('a.b-summary__item b-link', {href: 'http://www.google.ru/search?ie=UTF-8&hl=ru&q=nodejs'}
										, "Google"
									)
									, _('a.b-summary__item b-link', {href: 'http://go.mail.ru/search?mailru=1&q=nodejs'}
										, "Mail.ru"
									)
									, _('a.b-summary__item b-link', {href: 'http://nova.rambler.ru/search?query=nodejs&btnG=%CD%E0%E9%F2%E8%21'}
										, "Rambler"
									)
									, _('a.b-summary__item b-link', {href: 'http://www.bing.com/search?q=nodejs'}
										, "Bing"
									)
									, _('a.b-summary__item b-link', {href: 'http://search.yahoo.com/search?p=nodejs&ei=UTF-8'}
										, "Yahoo!"
									)
								)
							)
						)
					)
				)
				, _('div.b-page-layout__column b-page-layout__column_type_right'
					, _('div.b-page-layout__column-proxy'
						, _('div.b-advertizing-and-wizards i-bem', {style: 'background: none repeat scroll 0% 0% rgb(255, 255, 255);'}
							, _('div.b-advertizing-and-wizards__proxy'
								, _('div.b-place-adv'
									, _('a', {href: 'http://welcome.advertising.yandex.ru/direct/entry.xml?from=yasearch_button_control_promo&id=add-n&text=nodejs'}
										, "Разместить объявление по запросу «nodejs»"
									)
									, "—"
									, _('b'
										, "729"
									)
									, "запросов в месяц"
								)
								, _('div.b-parallel-search g-gap-vertical'
									, _('div.b-parallel-search__title'
										, _('a.b-parallel-search__title-link', {href: 'http://images.yandex.ru/yandsearch?text=nodejs&stype=image'}
											, "«nodejs» в картинках"
										)
									)
									, _('div.b-parallel-search__wrap'
										, _('i.b-parallel-search__layer b-parallel-search__layer_level_bottom'
											, _('i.b-parallel-search__layer b-parallel-search__layer_level_middle'
												, _('a.b-parallel-search__layer b-parallel-search__layer_level_top', {href: 'http://images.yandex.ru/yandsearch?text=nodejs&stype=image'}
													, _('img.b-parallel-search__preview', {src: 'http://img.yandex.net/i/search/b-parallel-search.png', width: 148, height: 118, style: 'background-image: url(\"http://im2-tub-ru.yandex.net/i?id=120309089-40-72\");'})
												)
											)
										)
										, _('div.b-clear')
									)
									, _('a.b-link', {href: 'http://images.yandex.ru/yandsearch?text=nodejs&stype=image'}
										, "Все картинки"
									)
								)
								, _('div.b-parallel-search g-gap-vertical'
									, _('div.b-parallel-search__title'
										, _('a.b-parallel-search__title-link', {href: 'http://video.yandex.ru/search.xml?text=nodejs&where=all'}
											, "Видео «nodejs»"
										)
									)
									, _('div.b-parallel-search__wrap'
										, _('i.b-parallel-search__layer b-parallel-search__layer_level_bottom'
											, _('i.b-parallel-search__layer b-parallel-search__layer_level_middle'
												, _('a.b-parallel-search__layer b-parallel-search__layer_level_top', {href: 'http://video.yandex.ru/search.xml?text=nodejs&where=all&id=26098338-06-12'}
													, _('img.b-parallel-search__preview', {src: 'http://img.yandex.net/i/search/b-parallel-search.png', width: 120, height: 90, style: 'background-image: url(\"http://video-tub-ru.yandex.net/i?id=26098338-06-12&n=2\");'})
													, _('span.b-parallel-search__time'
														, "00:39"
													)
													, _('i.b-parallel-search__play')
												)
											)
										)
										, _('div.b-clear')
									)
									, _('div'
										, "Серверный JavaScript:"
										, _('b'
											, "NodeJS"
										)
										, "и CouchDB,"
										, _('wbr')
										, "Степан Столяров"
									)
									, _('a', {href: 'http://video.yandex.ru/search.xml?text=nodejs&where=all'}
										, "Все видеоролики"
									)
								)
							)
						)
					)
				)
			)
			, _('div.b-foot'
				, _('table.b-foot__layout'
					, _('tbody'
						, _('tr'
							, _('td.b-foot__layout__gap'
								, _('i.b-foot__layout__gap__i')
							)
							, _('td.b-foot__layout__column b-foot__layout__column_left')
							, _('td.b-foot__layout__column')
							, _('td.b-foot__layout__column'
								, _('span.b-keyboard-loader b-keyboard-loader_lang_ru g-js b-keyboard-loader_js_inited'
									, _('span.b-pseudo-link'
										, "Клавиатура"
									)
								)
							)
							, _('td.b-foot__layout__column'
								, _('div.b-foot__links'
									, _('a.b-foot__link', {href: 'http://company.yandex.ru/legal/termsofuse/'}
										, "Лицензия на поиск"
									)
								)
							)
							, _('td.b-foot__layout__column b-foot__layout__column_penultima'
								, _('div.b-foot__links'
									, _('a.b-foot__link', {href: 'http://company.yandex.ru/'}
										, "О компании"
									)
									, _('a.b-foot__link', {href: 'http://stat.yandex.ru/stats.xml?ProjectID=1'}
										, "Статистика"
									)
									, _('a.b-foot__link', {href: 'http://advertising.yandex.ru/kupislova.xml?advertising'}
										, "Реклама"
									)
								)
								, _('div.b-foot__info')
							)
							, _('td.b-foot__layout__column b-foot__layout__column_right'
								, _('div.b-copyright'
									, _('nobr'
										, "© 1997—2011"
										, _('a.b-foot__link', {href: 'http://yandex.ru/'}
											, "«Яндекс»"
										)
									)
								)
							)
							, _('td.b-foot__layout__gap'
								, _('i.b-foot__layout__gap__i')
							)
						)
					)
				)
			)
			, _('div.b-scroll b-scroll_to_top i-bem b-scroll_js_inited b-scroll_hidden_yes'
				, "наверх"
			)
			, _('div.b-scroll b-scroll_to_bottom b-scroll_hidden_yes i-bem b-scroll_js_inited'
				, "вниз"
			)
			, _('div', {style: 'position: absolute; margin-left: -999em;'}
				, _('embed#ya_fc', {src: 'http://kiks.yandex.ru/system/fc07.swf', width: '1', height: '1', type: 'application/x-shockwave-flash', style: 'position: absolute; margin-left: -999em;'})
			)
			, _('i', {style: 'background: url(\"http://mc.yandex.ru/watch/731962\") repeat scroll 0% 0% transparent;'})
			, _('iframe', {src: 'http://suggest.yandex.ru/jquery-1-4-2.crossframeajax.html', style: 'display: none;'})
		)
	)
};