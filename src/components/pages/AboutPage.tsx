import * as React from 'react';
import { Page } from '../Page';
import { Banner } from '../Banner';
import { FOOTER_HEIGHT } from '../footer/Footer';
import { HEADER_HEIGHT } from '../header/Header';

export const AboutPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>About me</Banner>
    </Page>
  );
};
