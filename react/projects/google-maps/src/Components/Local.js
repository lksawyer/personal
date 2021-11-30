import { useCallback, useRef, useState } from 'react';
import config from '../config.json';
import useScriptLoad from '../Hooks/useScriptLoad';
import GoogleMap from './GoogleMap';

// Temp holder for maker data
const DUMMY_OFFERS = [
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
const clickedZoom = config.googleMap.clickedZoom;
const geolocation = config.googleMap.geolocation;
const options = {
  center: {
    lat: config.googleMap.options.center.lat,
    lng: config.googleMap.options.center.lng,
  },
  disableDefaultUI: config.googleMap.options.disableDefaultUI,
  fullscreenControl: config.googleMap.options.fullscreenControl,
  zoom: config.googleMap.options.zoom,
  zoomControl: config.googleMap.options.zoomControl,
};

// Component
const Local = () => {
  // Script loader
  let { isLoaded, loadError } = useScriptLoad(
    'AIzaSyCspQVWUNqD1apv57cnbTrSclkQrYLUwAI'
  );

  // State
  const [offers] = useState(DUMMY_OFFERS);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Refs
  const mapRef = useRef();

  // Map functionality
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        mapRef.current.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    if (mapRef.current.zoom !== clickedZoom) {
      mapRef.current.setZoom(clickedZoom);
    }
  }, []);

  // Dynamic rendering of content based on script load status
  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <GoogleMap
        id="map"
        localRetailers={offers}
        onLoad={onMapLoad}
        options={options}
        panTo={panTo}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
      ></GoogleMap>
    </>
  );
};

export default Local;
