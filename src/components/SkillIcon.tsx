import { Box, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import { Skill } from './pages/projects';
import styled from '@emotion/styled';

type Props = {
  skill: Skill;
  variant?: 'small' | 'large';
};

const skillImageMap: Record<Skill, string> = {
  TypeScript: '/images/icons/typescript.png',
  JavaScript: '/images/icons/javascript.png',
  React: '/images/icons/react.png',
  'React Native': '/images/icons/react-native.png',
  'Node.js': '/images/icons/nodejs.png',
  'Express.js': '/images/icons/expressjs.png',
  PostgreSQL: '/images/icons/postgresql.png',
  'GitHub Actions': '/images/icons/github.png',
  'Google Cloud Platform': '/images/icons/google-cloud.png',
  eslint: '/images/icons/eslint.png',
  Java: '/images/icons/java.png',
  Spring: '/images/icons/spring.png',
  Assembly: '/images/icons/assembly.png',
  C: '/images/icons/c.png',
  Chartboost: '/images/icons/chartboost.png',
  GameSalad: '/images/icons/gamesalad.png',
  Kivy: '/images/icons/kivy.png',
  Python: '/images/icons/python.png',
  iOS: '/images/icons/ios.png',
  Android: '/images/icons/android.png',
  HTML5: '/images/icons/html5.png',
};

const SmallImg = styled.img({
  objectFit: 'contain',
  marginRight: '8px',
  borderRadius: '4px',
  width: '25px',
  height: '25px',
});

const LargeImg = styled.img({
  objectFit: 'contain',
  margin: '0 18px',
  borderRadius: '6px',
  width: '50px',
  height: '50px',
});

export const SkillIcon: React.FunctionComponent<Props> = ({
  skill,
  variant = 'small',
}) => {
  const iconSize = variant === 'small' ? '25px' : '100px';

  if (variant === 'small') {
    return (
      <Tooltip title={skill}>
        <SmallImg src={skillImageMap[skill]} />
      </Tooltip>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LargeImg src={skillImageMap[skill]} />
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        {skill}
      </Typography>
    </Box>
  );
};
