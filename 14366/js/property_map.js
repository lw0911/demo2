var GoogleMap = {"latitude": "35.66178433506388", "longitude": "139.70406521111727"};
var map;
var infowindow;
var marker;
jQuery('#address-autocomplete').bind('keypress keydown keyup', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
});
if ($("#property_google_map").length > 0) {
    function map_picker_initialize() {
        var markers = [];
        var myPlace = new google.maps.LatLng(GoogleMap.latitude, GoogleMap.longitude);
        map = new google.maps.Map(document.getElementById('property_google_map'),
        {flat: false, noClear: false, zoom: 16, scrollwheel: true, draggable: true, 
            center: myPlace, mapTypeId: google.maps.MapTypeId.ROADMAP}
                );
        var input = (document.getElementById('address-autocomplete'));
       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var searchBox = new google.maps.places.SearchBox((input));
        google.maps.event.addListener(searchBox, 'places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            for (var i = 0, marker; marker = markers[i]; i++) {
                marker.setMap(null);
            }
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
                var _marker = new google.maps.Marker({map: map, zoom: 16, title: place.name,
                    position: place.geometry.location});
                bounds.extend(place.geometry.location);
            }
            map.fitBounds(bounds);
        });
        google.maps.event.addListener(map, 'bounds_changed', function () {
            var bounds = map.getBounds();
            searchBox.setBounds(bounds);
        });
        var property_location = myPlace;
        marker = new google.maps.Marker({position: property_location, map: map});
        infowindow = new google.maps.InfoWindow({content: '<div style="width:250px">Latitude: ' + property_location.lat() + '<br>Longitude: ' + property_location.lng() + '</div>', maxWidth: 300});
        infowindow.open(map, marker);
        google.maps.event.addListener(map, 'click', function (event) {
            placeMarker(event.latLng);
        });
    }
    google.maps.event.addDomListener(window, 'load', map_picker_initialize);
}

function placeMarker(location) {
    infowindow.close();
    marker.setPosition(location);
    infowindow.setContent('<div style="width:250px">Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng() + '</div>');
    infowindow.open(map, marker);
    document.getElementById("property_gmap_latitude").value = location.lat();
    document.getElementById("property_gmap_longitude").value = location.lng();
}