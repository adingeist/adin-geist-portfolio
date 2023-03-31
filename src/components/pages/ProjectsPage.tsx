import { Box, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { InteractiveCard } from '../InteractiveCard';
import { Page } from '../Page';
import { projects } from './projects';

export const ProjectsPage: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Typography variant="h3">Projects</Typography>

      <Box sx={{ margin: theme.spacing() }}>
        {projects.map((project) => (
          <InteractiveCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            imgSrc={project.imgSrc}
            showMoreLink={project.showMoreLink}
          />
        ))}
      </Box>
    </Page>
  );
};
