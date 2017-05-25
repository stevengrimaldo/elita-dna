import $ from 'jQuery';
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = 'AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM';

GoogleMapsLoader.load(google => {
  const geocoder = new google.maps.Geocoder();

  const geocodeAddress = (location, newMap) => {
    geocoder.geocode({ address: location },
      (results, status) => {
        if (status === 'OK') {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          const mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: results[0].geometry.location,

            // Remove the default controls
            disableDefaultUI: true
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            //   styles: [{
            //     featureType: 'landscape.man_made',
            //     elementType: 'geometry',
            //     stylers: [{
            //       color: '#f7f1df'
            //     }]
            //   }, {
            //     featureType: 'landscape.natural',
            //     elementType: 'geometry',
            //     stylers: [{
            //       color: '#d0e3b4'
            //     }]
            //   }, {
            //     featureType: 'landscape.natural.terrain',
            //     elementType: 'geometry',
            //     stylers: [{
            //       visibility: 'off'
            //     }]
            //   }, {
            //     featureType: 'poi',
            //     elementType: 'labels',
            //     stylers: [{
            //       visibility: 'off'
            //     }]
            //   }, {
            //     featureType: 'poi.business',
            //     elementType: 'all',
            //     stylers: [{
            //       visibility: 'off'
            //     }]
            //   }, {
            //     featureType: 'poi.medical',
            //     elementType: 'geometry',
            //     stylers: [{
            //       color: '#fbd3da'
            //     }]
            //   }, {
            //     featureType: 'poi.park',
            //     elementType: 'geometry',
            //     stylers: [{
            //       color: '#bde6ab'
            //     }]
            //   }, {
            //     featureType: 'road',
            //     elementType: 'geometry.stroke',
            //     stylers: [{
            //       visibility: 'off'
            //     }]
            //   }, {
            //     featureType: 'road',
            //     elementType: 'labels',
            //     stylers: [{
            //       visibility: 'off'
            //     }]
            //   }, {
            //     featureType: 'road.highway',
            //     elementType: 'geometry.fill',
            //     stylers: [{
            //       color: '#ffe15f'
            //     }]
            //   }, {
            //     featureType: 'road.highway',
            //     elementType: 'geometry.stroke',
            //     stylers: [{
            //       color: '#efd151'
            //     }]
            //   }, {
            //     featureType: 'road.arterial',
            //     elementType: 'geometry.fill',
            //     stylers: [{
            //       color: '#ffffff'
            //     }]
            //   }, {
            //     featureType: 'road.local',
            //     elementType: 'geometry.fill',
            //     stylers: [{
            //       color: 'black'
            //     }]
            //   }, {
            //     featureType: 'transit.station.airport',
            //     elementType: 'geometry.fill',
            //     stylers: [{
            //       color: '#cfb2db'
            //     }]
            //   }, {
            //     featureType: 'water',
            //     elementType: 'geometry',
            //     stylers: [{
            //       color: '#a2daf2'
            //     }]
            //   }]
          };

          // Create the Google Map using our element and options defined above
          const someMap = new google.maps.Map(newMap, mapOptions);

          // Let's also add a marker while we're at it
          const newMarker = new google.maps.Marker({ // eslint-disable-line
            map: someMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status); // eslint-disable-line
        }
      });
  };

  $('.locations__list-location__map-code').each(function () {
    const office = $(this).attr('data-address');
    const mapElement = this;

    geocodeAddress(office, mapElement);
  });
});

$('.locations__list-location__info').on('click', function () {
  if (!$(this).parent().hasClass('active')) {
    $('.locations__list-location').removeClass('locations__list-location--active');
    $(this).parent().addClass('locations__list-location--active');
  }
});

$('.locations__list-location').first().addClass('locations__list-location--active');
