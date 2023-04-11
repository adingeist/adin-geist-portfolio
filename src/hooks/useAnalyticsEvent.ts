import ReactGA from 'react-ga';

export const useAnalyticsEvent = (pageName: string) => {
  return (actionName: string, label = actionName) => {
    ReactGA.event({ category: pageName, action: actionName, label });
  };
};
