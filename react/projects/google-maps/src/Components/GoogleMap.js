import { useEffect, useRef } from 'react';

const GoogleMap = ({
  center,
  id,
  localRetailers,
  onLoad,
  zoom,
  setSelectedMarker,
  selectedMarker,
}) => {
  // Refs
  const mapRef = useRef();
  const infoWindowRef = useRef();

  // Google Map
  useEffect(() => {
    console.log('New google map object');
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: center.lat, lng: center.lng },
      zoom: zoom,
    });
    mapRef.current = map;
    infoWindowRef.current = new window.google.maps.InfoWindow({
      content: '',
    });
    infoWindowRef.current.addListener('closeclick', () => {
      console.log('closing');
      setSelectedMarker(null);
    });
    onLoad(map);
  }, [center.lat, center.lng, onLoad, setSelectedMarker, zoom]);

  //Info Window
  useEffect(() => {
    console.log('Updating infoWindowRef');
    console.log('selectedMarker: ', selectedMarker);

    if (selectedMarker) {
      infoWindowRef.current.setContent(selectedMarker.name);
      infoWindowRef.current.setPosition({
        lat: selectedMarker.lat,
        lng: selectedMarker.lng,
      });
      infoWindowRef.current.open({
        map: mapRef.current,
        shouldFocus: false,
      });
    }
  }, [selectedMarker]);

  // Markers
  useEffect(() => {
    if (mapRef.current) {
      console.log('New marker objects');
      localRetailers.map((retailer) => {
        const marker = new window.google.maps.Marker({
          position: { lat: retailer.lat, lng: retailer.lng },
          map: mapRef.current,
        });

        marker.addListener('click', () => {
          setSelectedMarker(retailer);
        });

        return null;
      });
    }
  }, [localRetailers, setSelectedMarker]);

  return <div id={id} style={{ width: 500, height: 500 }}></div>;
};

export default GoogleMap;
