import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useEffect, useRef } from 'react';
import config from '../config.json';

// Config
const color = config.googleMap.marker.color;
const fillColor = config.googleMap.marker.fillColor;

// Component
const GoogleMap = ({
  id,
  localRetailers,
  onLoad,
  options,
  panTo,
  selectedOffer,
  setSelectedOffer,
}) => {
  // Refs
  const mapRef = useRef();
  const infoWindowRef = useRef();

  // Google Map
  useEffect(() => {
    console.log('New google map object');
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: options.center.lat, lng: options.center.lng },
      disableDefaultUI: options.disableDefaultUI,
      fullscreenControl: options.fullscreenControl,
      zoom: options.zoom,
      zoomControl: options.zoomControl,
    });
    mapRef.current = map;
    infoWindowRef.current = new window.google.maps.InfoWindow({
      content: '',
    });
    infoWindowRef.current.addListener('closeclick', () => {
      console.log('closing');
      setSelectedOffer(null);
    });
    onLoad(map);
  }, [
    onLoad,
    options.center.lat,
    options.center.lng,
    options.disableDefaultUI,
    options.fullscreenControl,
    options.zoom,
    options.zoomControl,
    setSelectedOffer,
  ]);

  // Info Window
  useEffect(() => {
    console.log('Updating infoWindowRef');
    if (selectedOffer) {
      infoWindowRef.current.setOptions({
        content: selectedOffer.name,
        pixelOffset: new window.google.maps.Size(0, -25),
        position: {
          lat: selectedOffer.lat,
          lng: selectedOffer.lng,
        },
      });

      infoWindowRef.current.open({
        map: mapRef.current,
        shouldFocus: false,
      });
    }
  }, [selectedOffer]);

  // Markers
  useEffect(() => {
    if (mapRef.current) {
      console.log('New marker objects');
      let markers = [];

      localRetailers.map((retailer, i) => {
        const marker = new window.google.maps.Marker({
          icon: {
            anchor: new window.google.maps.Point(200, 510),
            fillColor,
            fillOpacity: 1,
            labelOrigin: new window.google.maps.Point(205, 190),
            path: 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z',
            scale: 0.06,
            strokeColor: '',
            strokeWeight: 0,
          },
          label: {
            text: (i + 1).toString(),
            color,
          },
          map: mapRef.current,
          position: { lat: retailer.lat, lng: retailer.lng },
        });

        marker.addListener('click', () => {
          setSelectedOffer(retailer);
          panTo({ lat: retailer.lat, lng: retailer.lng });
        });

        return markers.push(marker);
      });

      new MarkerClusterer({ markers, map: mapRef.current });
    }
  }, [localRetailers, panTo, setSelectedOffer]);

  return <div id={id} style={{ width: 500, height: 500 }}></div>;
};

export default GoogleMap;
