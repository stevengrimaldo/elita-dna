// You need to include this script tag on any page that has a Google Map.
//
// The following script tag will work when opening this example locally on your computer.
// But if you use this on a localhost server or a live website you will need to include an API key.
// Sign up for one here (it's free for small usage):
// https://developers.google.com/maps/documentation/javascript/tutorial#api_key
//
// After you sign up, use the following script tag with YOUR_GOOGLE_API_KEY replaced with your actual key.
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY"></script>

// load https://maps.googleapis.com/maps/api/js

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  const mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{
        color: '#f7f1df'
      }]
    }, {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{
        color: '#d0e3b4'
      }]
    }, {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi.medical',
      elementType: 'geometry',
      stylers: [{
        color: '#fbd3da'
      }]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
        color: '#bde6ab'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffe15f'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#efd151'
      }]
    }, {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffffff'
      }]
    }, {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [{
        color: 'black'
      }]
    }, {
      featureType: 'transit.station.airport',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#cfb2db'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#a2daf2'
      }]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  const mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  const map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'Snazzy!'
  });
}
