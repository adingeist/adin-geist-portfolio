import { Box } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { HEADER_HEIGHT } from './header/Header';

type Props = {
  children: React.ReactNode;
};

export const Page: FunctionComponent<Props> = ({ children }) => {
  useAnalytics();
  return (
    <Box
      sx={{
        paddingTop: HEADER_HEIGHT,
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};
