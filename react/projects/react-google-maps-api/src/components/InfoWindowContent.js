const InfoWindowContent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>lat: {props.lat}</p>
      <p>lng: {props.lng}</p>
    </div>
  );
};

export default InfoWindowContent;
