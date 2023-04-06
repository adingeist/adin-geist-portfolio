import React, { useMemo } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { SkillIcon } from './SkillIcon';
import { projects } from './pages/projects';
import { AppDivider } from './AppDivider';
import { GitHub } from '@mui/icons-material';

type Props = {
  title: string;
};

export const GenericProjectLayout: React.FunctionComponent<Props> = (props) => {
  const theme = useTheme();

  const proj = useMemo(
    () => projects.find((proj) => proj.title === props.title),
    [projects, props.title]
  );

  if (!proj) {
    console.error(`Project with title "${props.title}" not found.`);
    return <></>;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h3">About the project</Typography>
          <Typography>{proj.description}</Typography>
          {proj.repoUrl && (
            <Button
              onClick={() =>
                window.open(proj.repoUrl, '_target', 'noopener noreferrer')
              }
              variant="text"
              style={{ color: 'gray', alignSelf: 'flex-end' }}
              endIcon={<GitHub />}
            >
              Source code
            </Button>
          )}
        </Box>
        <img style={{ objectFit: 'contain' }} width="500px" src={proj.imgSrc} />
      </Box>
      <Typography variant="h6">Skills used:</Typography>
      <Box
        sx={{
          display: 'flex',
          margin: '10px 0',
        }}
      >
        {proj.skills?.map((skill) => (
          <SkillIcon variant="large" key={skill} skill={skill} />
        ))}
      </Box>

      <AppDivider />
    </>
  );
};
