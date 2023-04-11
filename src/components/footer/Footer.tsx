import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import { AppIconButton } from '../app-icons/AppIconButton';
export const FOOTER_HEIGHT = '50px';

export const Footer: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: FOOTER_HEIGHT,
        width: '100%',
      }}
    >
      <AppIconButton icon="GitHub" iconSize="small" fontSize="large" />
      <AppIconButton icon="LinkedIn" iconSize="small" fontSize="large" />
    </Box>
  );
};
