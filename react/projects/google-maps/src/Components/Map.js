import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useEffect } from 'react';

const Map = (props) => {
  const initMap = (markerOptionsArray) => {
    // New Map
    const map = new window.google.maps.Map(
      document.getElementById(props.mapID),
      props.mapOptions
    );

    // Info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: '',
    });

    // Add marker function
    // - receive obj of marker options
    const addMarker = (markerOptions) => {
      //Create marker with specified marker options
      const marker = new window.google.maps.Marker({
        position: markerOptions.latLng,
        map,
        label: markerOptions.label,
      });

      // Add event listener to marker
      // - on click, update infoWindow content to content of selected marker
      // - on click, update map zoom
      // - on click, update map center
      // - on click, open infoWindow with specified inforWindow options
      marker.addListener('click', () => {
        infoWindow.setContent('<p>' + markerOptions.content + '</p>');
        map.setZoom(10);
        map.setCenter(marker.getPosition());
        map.panTo(marker.getPosition());
        infoWindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

      return marker;
    };

    // Loop through markerOptionsArray
    // - create marker for each markerOptionsArray item
    // - add marker to markers array
    let markers = [];
    markerOptionsArray.forEach((element, i) => {
      markers.push(addMarker(markerOptionsArray[i]));
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
  };

  useEffect(() => {
    console.log('Inside Map.js: Calling initMap()');
    initMap(props.markerOptionsArray);
  }, [props.markerOptionsArray]);

  return <div id={props.mapID} style={{ width: 500, height: 500 }}></div>;
};

export default Map;
