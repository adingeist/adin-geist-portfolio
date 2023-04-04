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
        aria-label="Github Icon"
        target="_blank"
        referrerPolicy="no-referrer"
        href="https://github.com/adingeist"
      >
        <GitHubIcon sx={{ width: '30px', height: '30px' }} />
      </IconButton>
      <IconButton
        aria-label="LinkedIn Icon"
        href="https://www.linkedin.com/in/adin-geist/"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <LinkedInIcon sx={{ width: '30px', height: '30px' }} />
      </IconButton>
    </Box>
  );
};
