var redIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



var map = L.map('map').setView([10.2945, 123.8811], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.Control.geocoder().addTo(map);
L.control.locate().addTo(map);


map.on('locationfound', function(e) {
  // Create a marker at the found location
  var marker = L.marker(e.latlng, {icon: redIcon}).addTo(map);
});
/*
placeSearch({
  key: 'Tz35QfuIDqKtTmo0aHL9epbkDYM5Nvyl',
  container: document.querySelector('#place-search-input')
  
});

*/
       

//Current Position


