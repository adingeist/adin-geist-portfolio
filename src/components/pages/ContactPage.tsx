import * as React from 'react';
import { Page } from '../Page';
import { Typography } from '@mui/material';
import { Banner } from '../Banner';

export const ContactPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Contact</Banner>
      <Typography>Interested in reaching out to me?</Typography>
      <Typography>Feel free to message me on Linkedin or email me.</Typography>
    </Page>
  );
};
