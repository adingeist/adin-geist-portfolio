import * as React from 'react';
import { Banner } from '../../Banner';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { Page } from '../../Page';
import { Centered } from '../../Centered';
import { AppDivider } from '../../AppDivider';
import { Box } from '@mui/material';

export const JSHeroPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>JS Hero</Banner>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <iframe
          src="https://adingeist.github.io/js-hero/"
          width="1101px"
          height="730px"
        />
      </Box>
      <Centered>
        <AppDivider />
        <GenericProjectLayout title="JS Hero" />
      </Centered>
    </Page>
  );
};
