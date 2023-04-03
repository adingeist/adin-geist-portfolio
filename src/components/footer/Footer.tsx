import * as React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { isHomePage } from '../pages/HomePage';
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
      <IconButton
        aria-label="delete"
        target="_blank"
        referrerPolicy="no-referrer"
        href="https://github.com/adingeist"
      >
        <GitHubIcon sx={{ width: '30px', height: '30px' }} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/adin-geist/"
        target="_blank"
        referrerPolicy="no-referrer"
        aria-label="delete"
      >
        <LinkedInIcon sx={{ width: '30px', height: '30px' }} />
      </IconButton>
    </Box>
  );
};
