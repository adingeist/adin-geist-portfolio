import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-JM7FZGYD92');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
};
