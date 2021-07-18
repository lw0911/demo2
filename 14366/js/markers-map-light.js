
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
    var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"hue": "#ff7700"}]}, {"featureType": "administrative", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#1d1d1d"}]}, {"featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}]}, {"featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [{"color": "#ed5929"}, {"weight": "5.00"}, {"visibility": "on"}]}, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#787878"}, {"visibility": "on"}]}, {"featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{"visibility": "on"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"visibility": "on"}, {"color": "#2d2d2d"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]}, {"featureType": "administrative.land_parcel", "elementType": "geometry.fill", "stylers": [{"saturation": "64"}]}, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#fafafa"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#2c2c2c"}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#d5d5d5"}]}, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "on"}, {"color": "#ff0000"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#ed5929"}]}, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"weight": "5.00"}]}, {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ed5929"}, {"visibility": "on"}]}, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]}, {"featureType": "road.highway", "elementType": "labels.text", "stylers": [{"color": "#ffffff"}]}, {"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]}, {"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{"color": "#d9d9d9"}, {"visibility": "on"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [{"visibility": "simplified"}, {"lightness": "4"}, {"saturation": "-100"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#e1e1e1"}, {"visibility": "on"}]}];
    //Litgh  var styles =[{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}];
    //xra9 bard var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#71d6ff"},{"saturation":100},{"lightness":-5},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#deecec"},{"saturation":-73},{"lightness":72},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"hue":"#bababa"},{"saturation":-100},{"lightness":25},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#e3e3e3"},{"saturation":-100},{"lightness":0},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"hue":"#59cfff"},{"saturation":100},{"lightness":34},{"visibility":"on"}]}];
    // wanted dark var styles =[{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ed5929"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}] ;
    //dark bard  var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
    //good bleue var styles = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}];
    //var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"administrative","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"gamma":"0.75"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"-37"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f9f9f9"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"40"},{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"saturation":"-100"},{"lightness":"-37"}]},{"featureType":"landscape.natural","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":"100"},{"weight":"2"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"saturation":"-100"},{"lightness":"0"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"lightness":"-4"},{"saturation":"-100"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"},{"visibility":"on"},{"saturation":"-95"},{"lightness":"62"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road","elementType":"labels","stylers":[{"saturation":"-100"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"gamma":"0.50"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"gamma":"0.50"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"-13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"0"},{"gamma":"1.09"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"},{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"lightness":"-12"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"},{"lightness":"77"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"-5"},{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-15"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"lightness":"47"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"water","elementType":"geometry","stylers":[{"saturation":"53"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-42"},{"saturation":"17"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":"61"}]}];
    
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

 