function newsFeed(){var e=new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=a9e3fc2ec88c4d0488941ebf7750e740");console.log("this"),fetch(e).then(function(e){console.log(e.json())})}function initMap(){var e={lat:41.743369,lng:-87.570702},n=new google.maps.Map(document.getElementById("map"),{zoom:16,center:e,mapTypeId:"terrain",styles:[{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#FFF"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#FFF"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#FFF"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#FFF"}]}]});(new google.maps.TransitLayer).setMap(n);var t=document.getElementById("searchTextField");new google.maps.places.SearchBox(t,{bounds:defaultBounds})}jQuery.noConflict(),jQuery(function(e){console.log("being read"),e(window).scroll(function(){var n=window.pageYOffset,t=parseInt(jQuery(window).width())>=980;n>=50&&t?(e(".header-wrapper").addClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small")):(e(".header-wrapper").removeClass("small"),e("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small"))}),e("a.toscroll").on("click",function(n){var t=n.target.href,l=t.substring(t.indexOf("#")+1);return e("html, body").animate({scrollTop:e("#"+l).offset().top},500),!1}),e(".mobile-nav").on("click",function(){e("#mainNav").toggleClass("active"),console.log("clicked")}),jQuery("#mainNav").on("click",function(){jQuery(this).removeClass("active")}),e(".card.two").length>0&&newsFeed()});