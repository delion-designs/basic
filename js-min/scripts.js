function initMap(){var e={lat:41.743369,lng:-87.570702},l=new google.maps.Map(document.getElementById("map"),{zoom:16,center:e,mapTypeId:"terrain",styles:[{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#FFF"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#FFF"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#FFF"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#FFF"}]}]}),t=new google.maps.TransitLayer;t.setMap(l);var n=document.getElementById("searchTextField");new google.maps.places.SearchBox(n,{bounds:defaultBounds})}jQuery.noConflict(),jQuery(function(e){console.log("being read"),e(window).scroll(function(){var l=window.pageYOffset,t=parseInt(jQuery(window).width())>=980;l>=50&&t?(e(".header-wrapper").addClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small")):(e(".header-wrapper").removeClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small"))}),e("a.toscroll").on("click",function(l){var t=l.target.href,n=t.substring(t.indexOf("#")+1);return e("html, body").animate({scrollTop:e("#"+n).offset().top},500),!1}),e(".mobile-nav").on("click",function(){e("#mainNav").toggleClass("active"),console.log("clicked")}),jQuery("#mainNav").on("click",function(){jQuery(this).removeClass("active")})});