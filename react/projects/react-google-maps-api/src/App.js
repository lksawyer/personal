import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import './App.css';
import InfoWindowContent from './components/InfoWindowContent';
import LocalRetailer from './components/LocalRetailer';
import config from './config.json';

// Temp holder for maker data
const DUMMY_MARKERS = [
  {
    name: 'Raleigh',
    lat: 35.779591,
    lng: -78.638176,
  },
  {
    name: 'Chapel Hill',
    lat: 35.91026,
    lng: -79.05547,
  },
  {
    name: 'Durham',
    lat: 35.996948,
    lng: -78.899017,
  },
];

// Additional libraries that need to be loaded with useLoadScript
// - ex: places
const libraries = [''];

// Styles for map container
// - mainly for setting dimensions of map container so map will be visible
// - this will likely be handled in a layout component
const mapContainerStyle = {
  width: '500px',
  height: '500px',
};

// **************** config Variables

// Center prop for map

let mapCenter = {
  lat: config.googleMap.mapCenter.lat,
  lng: config.googleMap.mapCenter.lng,
};

// Options prop for map
const mapOptions = {
  disableDefaultUI: config.googleMap.mapOptions.disableDefaultUI,
  zoomControl: config.googleMap.mapOptions.zoomControl,
  fullscreenControl: config.googleMap.mapOptions.fullscreenControl,
};

const zoom = config.googleMap.zoom;

const markerZoom = config.googleMap.markerZoom;

// **************** config Variables

function App() {
  // Script loader
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCspQVWUNqD1apv57cnbTrSclkQrYLUwAI',
    libraries,
  });

  // State
  // - markers are stored in state
  // -- this will be replaced with API response, wich will be used
  // to plot markers and local retailers
  // - selected marker is stored in state
  const [markers] = useState(DUMMY_MARKERS);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Retain a reference to the google map w/o causing a re-render
  const mapRef = useRef();
  // Get a reference to the google map
  // - useCallback prevents this action from running again when component re-renders
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (config.googleMap.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        mapRef.current.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  // Define map pan functionality
  // - useCallback prevents this action from running again when component re-renders
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    if (mapRef.current.zoom !== markerZoom) {
      mapRef.current.setZoom(markerZoom);
    }
  }, []);

  // Dynamic rendering of content based on script load status
  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  // Main component
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={mapCenter}
        options={mapOptions}
        onLoad={onMapLoad}
      >
        <MarkerClusterer>
          {(clusterer) =>
            markers.map((marker, i) => {
              return (
                <Marker
                  clusterer={clusterer}
                  key={i}
                  label={(i + 1).toString()}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => {
                    setSelectedMarker(marker);
                    panTo({ lat: marker.lat, lng: marker.lng });
                  }}
                />
              );
            })
          }
        </MarkerClusterer>

        {selectedMarker ? (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <InfoWindowContent
              name={selectedMarker.name}
              lat={selectedMarker.lat}
              lng={selectedMarker.lng}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>

      {markers.map((marker, i) => {
        return (
          <LocalRetailer
            key={i}
            name={marker.name}
            lat={marker.lat}
            lng={marker.lng}
          >
            <button
              onClick={() => {
                setSelectedMarker(marker);
                panTo({ lat: marker.lat, lng: marker.lng });
              }}
            >
              CLICK ME
            </button>
          </LocalRetailer>
        );
      })}
    </div>
  );
}

export default App;
