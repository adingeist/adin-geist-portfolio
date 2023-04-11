import { Box } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { HEADER_HEIGHT } from './header/Header';
import { FOOTER_HEIGHT } from './footer/Footer';

type Props = {
  children: React.ReactNode;
};

export const Page: FunctionComponent<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        paddingTop: HEADER_HEIGHT,
        paddingBottom: FOOTER_HEIGHT,
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};
