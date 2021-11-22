import useExternalScript from '../Hooks/use-External-Script';
import LocalRetailer from './LocalRetailer';
import Map from './Map';

export const GoogleMap = () => {
  // Google Maps JS Script
  const baseGoogleMapURL = 'https://maps.googleapis.com/maps/api/js';
  const googleMapsAPIKey = '?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const googleMapsScript = baseGoogleMapURL + googleMapsAPIKey;
  const googleMapsScriptStatus = useExternalScript(googleMapsScript, 'defer');

  if (googleMapsScriptStatus === 'error') return 'Error loading google map';
  if (googleMapsScriptStatus === 'loading') return 'Loading Maps';

  // Obj of map options
  const mapOptions = { center: { lat: 42.3601, lng: -71.0589 }, zoom: 8 };

  // Array of marker options
  const markerOptionsArray = [
    {
      latLng: { lat: 42.4668, lng: -70.9495 },
      label: '1',
      content: '1st Pin',
    },
    {
      latLng: { lat: 42.8584, lng: -70.93 },
      label: '2',
      content: '2nd Pin',
    },
    {
      latLng: { lat: 42.7762, lng: -71.0773 },
      label: '3',
      content: '3rd Pin',
    },
  ];

  return (
    <div>
      <Map
        mapID="map"
        mapOptions={mapOptions}
        markerOptionsArray={markerOptionsArray}
      />
      {markerOptionsArray.map((retailer) => {
        return (
          <LocalRetailer
            latLng={retailer.latLng}
            label={retailer.label}
            content={retailer.content}
          />
        );
      })}
    </div>
  );
};

export default GoogleMap;
