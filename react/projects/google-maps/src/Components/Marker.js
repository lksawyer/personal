import { useEffect } from 'react';

const Marker = (props) => {
  useEffect(() => {
    console.log('New marker object');
    console.log('Inside Marker: ', props.map);
    new window.google.maps.Marker({
      position: { lat: props.position.lat, lng: props.position.lng },
      map: props.map,
    });
  });

  return null;
};

export default Marker;
