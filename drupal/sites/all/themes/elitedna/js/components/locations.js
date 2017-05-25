require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({11:[function(require,module,exports){
'use strict';

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _googleMaps = require('google-maps');

var _googleMaps2 = _interopRequireDefault(_googleMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_googleMaps2.default.KEY = 'AIzaSyCok5PyWTvryvbsRzaVAkJbpuZjfklnmJM';

_googleMaps2.default.load(function (google) {
  var geocoder = new google.maps.Geocoder();

  var geocodeAddress = function geocodeAddress(location, newMap) {
    geocoder.geocode({ address: location }, function (results, status) {
      if (status === 'OK') {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
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
        var someMap = new google.maps.Map(newMap, mapOptions);

        // Let's also add a marker while we're at it
        var newMarker = new google.maps.Marker({ // eslint-disable-line
          map: someMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status); // eslint-disable-line
      }
    });
  };

  (0, _jQuery2.default)('.locations__list-location__map-code').each(function () {
    var office = (0, _jQuery2.default)(this).attr('data-address');
    var mapElement = this;

    geocodeAddress(office, mapElement);
  });
});

(0, _jQuery2.default)('.locations__list-location__info').on('click', function () {
  if (!(0, _jQuery2.default)(this).parent().hasClass('active')) {
    (0, _jQuery2.default)('.locations__list-location').removeClass('locations__list-location--active');
    (0, _jQuery2.default)(this).parent().addClass('locations__list-location--active');
  }
});

(0, _jQuery2.default)('.locations__list-location').first().addClass('locations__list-location--active');

},{"google-maps":1,"jQuery":2}],1:[function(require,module,exports){
(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.18';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});

},{}]},{},[11]);
