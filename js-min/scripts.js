jQuery.noConflict(),jQuery(function(e){console.log("being read"),e(window).scroll(function(){var n=window.pageYOffset,l=parseInt(jQuery(window).width())>=980;n>=50&&l?(e(".header-wrapper").addClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small")):(e(".header-wrapper").removeClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small"))}),e("a.toscroll").on("click",function(n){var l=n.target.href,o=l.substring(l.indexOf("#")+1);return e("html, body").animate({scrollTop:e("#"+o).offset().top},500),!1}),parseInt(jQuery(window).width())>=1024&&(e(".main").parallax("50%",-.4),jQuery(window).resize(function(){}))});