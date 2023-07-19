var redIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var map = L.map('map').setView([10.2945, 123.8811], 13);
map.on('locationfound', function(e) {
  // Create a marker at the found location
  var marker = L.marker(e.latlng, {icon: redIcon}).addTo(map);
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function(e) {
        var bbox = e.geocode.bbox;
        var center = bbox.getCenter();
        L.circle(center, 1000).addTo(map);
        map.fitBounds(circle.getBounds());
    })
    .addTo(map);

L.control.locate().addTo(map);


/*
var marker = L.marker([10.2817, 123.8806]);
var x = false;

function myFunction() {
  
    if (x) {
        map.removeLayer(marker);
    } else {
        marker.addTo(map);
    }

    x = !x; // Toggle the value of x
}


/*  layer Group to show multiple routes 
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');


var cities = L.layerGroup([littleton, denver, aurora, golden]);


cities.addTo(map);*/


