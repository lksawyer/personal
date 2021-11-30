import { useEffect, useState } from 'react';

const useScriptLoad = (googleMapsApiKey) => {
  const [state, setState] = useState({ isLoaded: false, loadError: false });
  useEffect(() => {
    if (state.isLoaded === false) {
      let script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://maps.googleapis.com/maps/api/js?key=' +
          googleMapsApiKey +
          '=&v=weekly&libraries=places'
      );
      document.body.appendChild(script);
      script.onload = () => {
        setState({ isLoaded: true, loadError: false });
      };
      script.onError = () => {
        setState({ isLoaded: false, loadError: true });
      };
    }
  }, [googleMapsApiKey, state]);

  return state;
};

export default useScriptLoad;
