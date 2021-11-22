import { useEffect, useState } from 'react';
export const useExternalScript = (url, attribute) => {
  let [state, setState] = useState(url ? 'loading' : 'idle');

  useEffect(() => {
    if (!url) {
      setState('idle');
      return;
    }

    let script = document.querySelector(`script[src="${url}"]`);

    const handleScript = (e) => {
      setState(e.type === 'load' ? 'ready' : 'error');
    };

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/javascript';
      script.src = url;
      if (attribute === 'async') {
        script.async = true;
      }
      if (attribute === 'defer') {
        script.defer = true;
      }
      document.body.appendChild(script);
      script.addEventListener('load', handleScript);
      script.addEventListener('error', handleScript);
    }

    script.addEventListener('load', handleScript);
    script.addEventListener('error', handleScript);

    return () => {
      script.removeEventListener('load', handleScript);
      script.removeEventListener('error', handleScript);
    };
  }, [url, attribute]);

  console.log('Inside useExternalScript: ', state);
  return state;
};

export default useExternalScript;
