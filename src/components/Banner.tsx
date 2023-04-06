import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
  fontSize?: string;
};

export const Banner: React.FunctionComponent<Props> = ({
  children,
  fontSize,
}) => (
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
    <Typography variant="h3" style={{ fontSize }}>
      {children}
    </Typography>
  </Box>
);
