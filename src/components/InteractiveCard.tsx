import { ChevronRight } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import type { Project } from './pages/projects';

type Props = Project;

export const InteractiveCard: React.FunctionComponent<Props> = (props) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        display: 'flex',
        margin: '0 auto 50px auto',
        maxWidth: '1000px',
        padding: theme.spacing(),
        width: '100%',
      }}
      sx={{
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      }}
    >
      <img style={{ maxWidth: '400px' }} src={props.imgSrc} />
      <div style={{ margin: theme.spacing() }} />
      <Box sx={{ alignSelf: 'flex-start', flex: 1 }}>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h5">{props.subtitle}</Typography>
        <Typography variant="body1">{props.description}</Typography>
      </Box>
      <ChevronRight sx={{ fontSize: 40, margin: '0 10px' }} />
    </Box>
  );
};
