import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Banner: React.FunctionComponent<Props> = ({ children }) => (
  <Box
    sx={{
      backgroundColor: '#222',
      width: '350px',
      color: 'white',
      padding: '10px',
      margin: '10px 0px',
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
    }}
  >
    <Typography variant="h3">{children}</Typography>
  </Box>
);
