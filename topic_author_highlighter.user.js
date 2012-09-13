// Topic Author Highlighter
// v1.0.1 (14.04.12)
// by Yuriy Babak aka Inversion (http://inversion.habrahabr.ru/), mailto: yura.des@gmail.com
// based on http://userscripts.org/scripts/show/29991 by TiGR

// ==UserScript==
// @name         Topic Author Highlighter
// @version      1.0.1
// @namespace    Habrahabr
// @description  Подсвечивает комментарии автора топика
// @include      http://habrahabr.ru/*
// ==/UserScript==

/*
	v1.0.1 (14.04.12)
		- добавлена поддержка Opera
		
	v1.0 (18.03.12)

*/
"use strict";
window.unsafeWindow = ( typeof unsafeWindow == 'undefined' ? window : unsafeWindow )
!function(win, uwin, doc, $) {
	
	if (win != win.top) return
	
	// on ready
	$(function(){
	
		// comments present on page
		if ($('#comments')[0]) {
		
			$('<style>\
				.info.topic_author {background-color:#FDE4E0} \
				.info.topic_author.is_new {background-color:#efd9ef !important} \
			</style>').appendTo('head')
			
			var authorName = $('.infopanel .author a, div.vcard .nickname span').text()
			
			$('#comments div.info .username, #comments ul.info .username a').each(function(){
				var uName = $(this)
				if (uName.text() == authorName) {
					uName.parent('.info').addClass('topic_author')
					uName.parents('ul.info:first').addClass('topic_author')
				}
			})
		}	// comments present on page
	
	})	// on ready
	    
}(window, unsafeWindow, unsafeWindow.document, unsafeWindow.jQuery)
