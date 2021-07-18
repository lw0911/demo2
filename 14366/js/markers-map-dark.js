
function $_kav(element) {
    return document.getElementById(element);
}

var speedTest = {};
speedTest.pics = null;
speedTest.map = null;
speedTest.markers = [];
speedTest.infoWindow = null;

speedTest.init = function () {
    var infoboxOptions = {
        content: document.createElement("div"),
        disableAutoPan: true,
        maxWidth: 450,
        boxClass: "asadInfomob",
        zIndex: null,
        closeBoxMargin: "-13px 0px 0px 0px",
        infoBoxClearance: new google.maps.Size(1, 1),
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };

    var latlng = new google.maps.LatLng(42.312517, -71.0721207);
    var styles = [{"stylers": [{"hue": "#ff1a00"}, {"invert_lightness": true}, {"saturation": -100}, {"lightness": 33}, {"gamma": 0.5}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#2D333C"}]}];

    var options = {
        zoom: 16,
        scrollwheel: false,
        styles: styles,
        'center': latlng,
        'mapTypeId': google.maps.MapTypeId.ROADMAP
    };
    speedTest.map = new google.maps.Map($_kav('map'), options);
    speedTest.pics = data.property;
    speedTest.infoWindow = new InfoBox(infoboxOptions); //new google.maps.InfoWindow();

    speedTest.showMarkers();

    // I create an OverlayView, and set it to add the "markerLayer" class to the markerLayer DIV
    var myoverlay = new google.maps.OverlayView();
    myoverlay.draw = function () {
        this.getPanes().markerLayer.id = 'markerLayer';
    };
    myoverlay.setMap(speedTest.map);
};

speedTest.showMarkers = function () {
    speedTest.markers = [];
    if (speedTest.markerClusterer) {
        speedTest.markerClusterer.clearMarkers();
    }
    var numMarkers = 30;
    for (var i = 0; i < numMarkers; i++) {
        var titleText = speedTest.pics[i].property_title;
        if (titleText === '') {
            titleText = 'No title';
        }


        var item = document.createElement('DIV');
        var title = document.createElement('A');
        title.href = '#';
        title.className = 'title';
        title.innerHTML = titleText;

        var latLng = new google.maps.LatLng(speedTest.pics[i].latitude,
                speedTest.pics[i].longitude);

        var imageUrl = "img/map-marker.png";

        var markerImage = new google.maps.MarkerImage(imageUrl, new google.maps.Size(70, 70));

        var marker = new google.maps.Marker({
            'position': latLng,
            'icon': markerImage,
            'optimized': false

        });

        var fn = speedTest.markerClickFunction(speedTest.pics[i], latLng);
        google.maps.event.addListener(marker, 'click', fn);
        google.maps.event.addDomListener(title, 'click', fn);
        speedTest.markers.push(marker);



    }

    window.setTimeout(speedTest.time, 0);
};

speedTest.markerClickFunction = function (pic, latlng) {
    return function (e) {
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        var title = pic.property_title;
        var property_url = pic.property_url;
        var currency = pic.currency;
        var price = pic.price;
        var property_cover = pic.property_cover;
        var status = '';//pic.status ;

         var html_property = '<div class="map-one-property" style="max-width: 260px ! important;width: 260px ! important; overflow: hidden;z-index: 1;"> ' +
                '    <div style="transition: all 0.7s ease-in-out 0s;" class="boxes effect-slide-bottom in" data-effect="slide-bottom">' +
                '                       <div class="ImageWrapper  big-ImageWrapper boxes_img">' +
                '                           <img class="img-responsive" src="' + property_cover + '" alt="" style="height: 160px;">' +
                '                           <div class="ImageOverlayH"></div>' +
                
                '                          <div class="Shortcuts">' +
                '                              <button class="Shortcuts-share has_tooltip" data-toggle="tooltip" data-placement="bottom" data-original-title="Share this listing"></button>' +
                '                              <button title="" data-original-title="" class="Shortcuts-fav has_tooltip" data-toggle="tooltip" data-placement="bottom" data-riginal-title="Save to favorites"></button>' +
                '                              <button class="Shortcuts-hide has_tooltip" data-toggle="tooltip" data-placement="bottom" data-original-title="Hide property"></button>' +
                '                          </div>' +
                '                          <div class="box_type">' + price + ' ' + currency + '</div>' +
                '                        <span class="status_type orange"><span class="text">Rent</span></span>' +
                '                      </div>' +
                '                     <h2 class="title"><a href="single-property.html">' + title + ' </a> <small class="small_title">890 kyoto N908</small>' +
                '                        <a class="box-agent-icon" href="single-agent.html"><img src="img/demo/team_4.jpg"></a>' +
                '                      </h2>' +
                '                </div> ' +
                '</div>';

        speedTest.infoWindow.setContent(html_property);
        speedTest.infoWindow.setPosition(latlng);
        speedTest.infoWindow.open(speedTest.map);
    };
};

speedTest.clear = function () {
    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
        marker.setMap(null);
    }
};

speedTest.change = function () {
    speedTest.clear();
    speedTest.showMarkers();
};

speedTest.time = function () {

    var start = new Date();

    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
        marker.setMap(speedTest.map);
    }
    var end = new Date();
};

 