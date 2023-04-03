import { Box, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { InteractiveCard } from '../InteractiveCard';
import { Page } from '../Page';
import { projects } from './projects';
import { Banner } from '../Banner';

export const ProjectsPage: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Banner>Projects</Banner>

      <Box sx={{ margin: theme.spacing() }}>
        {projects.map((project) => (
          <InteractiveCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            imgSrc={project.imgSrc}
            showMoreLink={project.showMoreLink}
            skills={project.skills}
          />
        ))}
      </Box>
    </Page>
  );
};
