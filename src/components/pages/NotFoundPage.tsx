import { Typography } from '@mui/material';
import * as React from 'react';
import { Page } from '../Page';

export const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Typography variant="h6">404 - Not found.</Typography>
    </Page>
  );
};
