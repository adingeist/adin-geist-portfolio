import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const FOOTER_HEIGHT = '50px';

export const Footer: React.FunctionComponent = () => {
  return (
    <Box
      position="absolute"
      bottom={0}
      sx={{
        position: 'absolute',
        bottom: 0,
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
