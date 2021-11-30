import { useCallback, useRef, useState } from 'react';
import config from '../config.json';
import useScriptLoad from '../Hooks/useScriptLoad';
import GoogleMap from './GoogleMap';

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

// Config
let center = {
  lat: config.googleMap.center.lat,
  lng: config.googleMap.center.lng,
};

const clickedZoom = config.googleMap.clickedZoom;

const geolocation = config.googleMap.geolocation;

const options = {
  disableDefaultUI: config.googleMap.options.disableDefaultUI,
  zoomControl: config.googleMap.options.zoomControl,
  fullscreenControl: config.googleMap.options.fullscreenControl,
};

const zoom = config.googleMap.zoom;

//

const Local = () => {
  // Script loader
  let { isLoaded, loadError } = useScriptLoad(
    'AIzaSyCspQVWUNqD1apv57cnbTrSclkQrYLUwAI'
  );

  // State
  const [markers] = useState(DUMMY_MARKERS);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Map ref
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Dynamic rendering of content based on script load status
  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        center={center}
        id="map"
        localRetailers={markers}
        onLoad={onMapLoad}
        zoom={zoom}
        setSelectedMarker={setSelectedMarker}
        selectedMarker={selectedMarker}
      ></GoogleMap>
    </div>
  );
};

export default Local;
