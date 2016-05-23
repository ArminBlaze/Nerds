  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.941, 30.2996],
            zoom: 15,
         		controls: ['zoomControl']
        });
			
			
			//Содержимое балуна в переменных
//			var hintStr='<b>'+Peka+'</b><br/>Кликни, чтобы увидеть детали.';
			var hintStr='<b>OLOLO</b><br/>Кликни, чтобы увидеть детали.';
			
			var headerStr="<div style='margin:5px 7px 7px 7px;'>PEKA" +
            "<div class='news-item__title'>"+"Title"+"</div>" +
            "<div class='news-item__date'>"+"Date"+"</div>" +
            "<div class='margin-top:-5px;'><a href='"+'#adress'+"' class='news-item__date'>Перейти на страницу магазина</a></div>" +
            "</div>";

        myPlacemark = new ymaps.Placemark([59.93895, 30.3150017], { 
            hintContent: hintStr, 
            balloonContent: headerStr 
        }, {
					//Опции
					//Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					//Своё изображение иконки метки(путь из корня сайта).
					iconImageHref: 'img/map_bullet.png',
					//Размеры метки
					iconImageSize: [231, 190],
					//Смещение левого верхнего угла иконки относительно ее "ножки" (точки привязки).
					iconImageOffset: [-49, -188]
				
					
					
				});

        myMap.geoObjects.add(myPlacemark);
    }


//Google Maps

//function initMap() {
//	var mapDiv = document.getElementById('map');
//				
//	var map = new google.maps.Map(mapDiv, {
////          center: {lat: 59.941, lng: 30.2996},
//		center: new google.maps.LatLng(59.941, 30.2996),
//          zoom: 15,
//					scrollwheel: false,
//					mapTypeId: google.maps.MapTypeId.ROADMAP
//        });
//				
//				
//				var image = {
//				url: 'img/map_bullet.png',
//				// This marker is 231 pixels wide by 190 pixels high.
//				size: new google.maps.Size(231, 190),
//				// The origin for this image is (0, 0).
//				origin: new google.maps.Point(0, 0),
//				
//				anchor: new google.maps.Point(49, 188)
//			};
//
//				
//				var myLatLng = new google.maps.LatLng(59.9389463, 30.3150017);
//  			var beachMarker = new google.maps.Marker({
//    		position: myLatLng,
//    		map: map,
//    		icon: image
//  			});
//      }
//			
//				google.maps.event.addDomListener(window, 'load', initMap);