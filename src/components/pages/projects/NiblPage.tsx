import * as React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { Typography, useTheme } from '@mui/material';
import { Centered } from '../../Centered';
import { ResponsiveYouTube } from '../../ResponsiveYouTube';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { AppDivider } from '../../AppDivider';

export const NiblPage: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Banner>Nibl</Banner>
      {/* <Box
        sx={{
          display: 'flex',
          height: '200px',
          overflow: 'hidden',
        }}
      >
        <Fade direction="up" duration={2000}>
          <img width="200px" src="/images/projects/nibl/home.png" />
        </Fade>
      </Box> */}

      <Centered>
        <Typography variant="h3">Demo</Typography>
        <ResponsiveYouTube src="https://www.youtube.com/embed/DVE5x8MeYDo" />

        <AppDivider />

        <GenericProjectLayout title="Nibl" />
      </Centered>
    </Page>
  );
};
