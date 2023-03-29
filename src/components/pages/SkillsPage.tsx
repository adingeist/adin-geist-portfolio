import { Box, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { Page } from '../Page';

export const ProjectsPage: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Typography variant="h3">Projects</Typography>

      <Box sx={{ margin: theme.spacing() }}>
        <Box
          style={{
            padding: theme.spacing(),
            display: 'flex',
            margin: '0 auto',
            width: '100%',
            maxWidth: '1000px',
            alignItems: 'center',
            boxShadow: theme.shadows[10],
            borderRadius: theme.shape.borderRadius,
          }}
          sx={{
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          }}
        >
          <img
            style={{ maxWidth: '400px' }}
            src="https://dummyimage.com/400x300/ded/aaa"
          />
          <div style={{ margin: theme.spacing() }} />
          <Box sx={{ alignSelf: 'flex-start' }}>
            <Typography variant="h4">Nibl</Typography>
            <Typography variant="h5">Recipe Social Networking App</Typography>
            <Typography variant="body1">
              Created a space where people can share recipes!
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography variant="h4">Steeps</Typography>
      <Typography variant="h4">The Conversation</Typography>
      <Typography variant="h4">Algorithm Visualizer</Typography>
      <Typography variant="h4">Chat App</Typography>
      <Typography variant="h4">Popper Pig</Typography>
      <Typography variant="h4">Yahtzee</Typography>
    </Page>
  );
};
