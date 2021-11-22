import classes from './LocalRetailer.module.css';
const LocalRetailer = (props) => {
  return (
    <div className={classes.localRetailer}>
      <p>lat: {props.latLng.lat}</p>
      <p>lng: {props.latLng.lng}</p>
      <p>label: {props.label}</p>
      <p>content: {props.content}</p>
    </div>
  );
};

export default LocalRetailer;
