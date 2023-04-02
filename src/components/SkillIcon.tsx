import { Tooltip } from '@mui/material';
import * as React from 'react';
import { Skill } from './pages/projects';

type Props = {
  skill: Skill;
};

const ICON_SIZE = '25px';

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

export const SkillIcon: React.FunctionComponent<Props> = ({ skill }) => {
  return (
    <Tooltip title={skill}>
      <img
        style={{
          objectFit: 'contain',
          marginRight: '8px',
          borderRadius: '4px',
        }}
        width={ICON_SIZE}
        height={ICON_SIZE}
        src={skillImageMap[skill]}
      />
    </Tooltip>
  );
};
