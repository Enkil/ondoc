if ($(".contact-map").length) {

    google.maps.event.addDomListener(window, 'load', init);
    var map;

    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(59.9401434, 30.2600572),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable: true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('ondoc-on-map');
        var map = new google.maps.Map(mapElement, mapOptions);

        var locations = [
            ['OnDoc', 'undefined', '+7 800 775-73-96', 'undefined', 'https://ondoc.me', 59.9401434, 30.2600572, 'https://mapbuildr.com/assets/img/markers/default.png'],
            ['OnDoc', 'undefined', '+7 800 775-73-96', 'undefined', 'https://ondoc.me', 59.9401424, 30.2600562, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];

        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] == 'undefined') {
                description = '';
            } else {
                description = locations[i][1];
            }
            if (locations[i][2] == 'undefined') {
                telephone = '';
            } else {
                telephone = locations[i][2];
            }
            if (locations[i][3] == 'undefined') {
                email = '';
            } else {
                email = locations[i][3];
            }
            if (locations[i][4] == 'undefined') {
                web = '';
            } else {
                web = locations[i][4];
            }
            if (locations[i][7] == 'undefined') {
                markericon = '';
            } else {
                markericon = locations[i][7];
            }
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: locations[i][5]
            });
            link = '';
        }


        var contentString = '<div id="ondoc-on-map__content">OnDoc - система персонального здравоохранения, включающая в себя сервисы для надежного хранения персональной медицинской информации, ее комплексного анализа, и выявления лучшего способа укрепить и сохранить здоровье.</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

}

/* Docs on map */
$(document).ready(function () {

    if ($("#docs-on-map").length) {

        var myLatLng = new google.maps.LatLng(59.9401434, 30.2600572); // Set map center

        docs.init('#docs-on-map', myLatLng, 15, './docs-on-map.xml'); // Init docs on map function

    }

});

var docs = {
    map: null,
    bounds: null
};

docs.init = function (selector, latLng, zoom, filename) { // Init map function
    var myOptions = {
        center: latLng,
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var markerImage = new google.maps.MarkerImage(
        'img/map-marker.png',
        new google.maps.Size(29, 35)
    );
    var markerImageHover = new google.maps.MarkerImage(
        'img/map-marker--hover.png',
        new google.maps.Size(29, 35)
    );

    this.map = new google.maps.Map($(selector)[0], myOptions);
    this.bounds = new google.maps.LatLngBounds();

    $.get(filename)
        .done(
        function (xml) {
            $(xml).find("doc").each(function () {
                var surname = $(this).find('surname').text(),
                    name = $(this).find('name').text(),
                    specs = $(this).find('specs').text(),
                    ranks = $(this).find('ranks').text(),
                    exp = $(this).find('exp').text(),
                    photo = $(this).find('photo').text(),
                    lat = $(this).find('lat').text(),
                    lng = $(this).find('lng').text();

                // create a new LatLng point for the marker
                var point = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

                // extend the bounds to include the new point
                docs.bounds.extend(point);

                var marker = new google.maps.Marker({
                    icon: markerImage,
                    position: point,
                    map: docs.map
                });

                var infoWindow = new google.maps.InfoWindow();
                var html = '' +
                    '<div class="row">' +

                    '<div class="col-xs-6">' +
                    '<img class="docs__tab-img" src="img/' + photo + '" alt=""/>' +
                    '<span class="docs__tab-ondocked"></span>' +
                    '</div>' +

                    '<div class="col-xs-30">' +
                    '<h3 class="docs__tab-title">' + surname + ' <br/>' + name + '</h3>' +
                    '<p class="docs__tab-specs">' + specs + '</p>' +

                    '<div class="row">' +
                    '<div class="col-xs-26">' +
                    '<span class="docs__tab-info docs__tab-info--rank">' + ranks + '</span>' +
                    '</div>' +
                    '<div class="col-xs-10">' +
                    '<span class="docs__tab-info docs__tab-info--exp-map">' + exp + ' лет</span>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +

                    '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(html);
                    marker.setIcon(markerImageHover);
                    infoWindow.open(docs.map, marker);
                });
                docs.map.fitBounds(docs.bounds);

                google.maps.event.addListener(marker, 'mouseover', function () {
                    marker.setIcon(markerImageHover);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    marker.setIcon(markerImage);
                });

            });
        }
    )
        .fail(function () {
            alert("error");
        })
};

/* Clinics on map */
$(document).ready(function () {

    if ($("#clinics-on-map").length) {

        var myLatLng = new google.maps.LatLng(59.9401434, 30.2600572); // Set map center

        clinics.init('#clinics-on-map', myLatLng, 15, './clinics-on-map.xml'); // Init docs on map function

    }

});

var clinics = {
    map: null,
    bounds: null
};

clinics.init = function (selector, latLng, zoom, filename) { // Init map function
    var myOptions = {
        center: latLng,
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var markerImage = new google.maps.MarkerImage(
        'img/map-marker.png',
        new google.maps.Size(29, 35)
    );
    var markerImageHover = new google.maps.MarkerImage(
        'img/map-marker--hover.png',
        new google.maps.Size(29, 35)
    );

    this.map = new google.maps.Map($(selector)[0], myOptions);
    this.bounds = new google.maps.LatLngBounds();

    $.get(filename)
        .done(
        function (xml) {
            $(xml).find("clinic").each(function () {
                var name = $(this).find('name').text(),
                    address = $(this).find('address').text(),
                    subway = $(this).find('subway').text(),
                    worktime = $(this).find('worktime').text(),
                    photo = $(this).find('photo').text(),
                    lat = $(this).find('lat').text(),
                    lng = $(this).find('lng').text();

                // create a new LatLng point for the marker
                var point = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

                // extend the bounds to include the new point
                clinics.bounds.extend(point);

                var marker = new google.maps.Marker({
                    icon: markerImage,
                    position: point,
                    map: clinics.map
                });

                var infoWindow = new google.maps.InfoWindow();
                var html = '' +
                    '<div class="row">' +

                    '<div class="col-xs-8">' +
                    '<div class="">' +
                    '<img class="clinics__tab-img clinics__tab-img--ondocked" src="img/' + photo + '" alt=""/>' +
                    '<span class="clinics__tab-ondocked"></span>' +
                    '</div>' +
                    '</div>' +

                    '<div class="col-xs-28">' +
                    '<h3 class="clinics__tab-title">' + name + '</h3>' +
                    '<span class="clinics__tab-info clinics__tab-info--mappin">' + address + '</span>' +
                    '<span class="clinics__tab-info clinics__tab-info--subway">' + subway + '</span>' +
                    '<span class="clinics__tab-info clinics__tab-info--worktime">' + worktime + '</span>' +
                    '</div>' +

                    '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(html);
                    marker.setIcon(markerImageHover);
                    infoWindow.open(clinics.map, marker);
                });
                clinics.map.fitBounds(clinics.bounds);

                google.maps.event.addListener(marker, 'mouseover', function () {
                    marker.setIcon(markerImageHover);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    marker.setIcon(markerImage);
                });

            });
        }
    )
        .fail(function () {
            alert("error");
        })
};