import * as React from 'react';
import { Box, CssBaseline, styled, useTheme } from '@mui/material';
import { Page } from '../Page';
import AnimatedText from 'react-animated-text-content';
import { AnimatedTextLoop } from '../AnimatedTextLoop';
import { FOOTER_HEIGHT } from '../footer/Footer';
import { HEADER_HEIGHT } from '../header/Header';

export const isHomePage = () => window.location.pathname === '/';

const AnimatedH1 = styled(AnimatedText)(({ theme }) => theme.typography.h1);

export const HomePage: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Box
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.4)',
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100% - ${FOOTER_HEIGHT} - ${HEADER_HEIGHT})`,
          justifyContent: 'center',
          padding: theme.spacing(),
          position: 'absolute',
          width: '100%',
        }}
      >
        <CssBaseline />
        <AnimatedH1
          type="chars"
          animation={{
            scale: 1.5,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.06}
          duration={2}
          tag="h1"
          className="animated-paragraph"
        >
          Adin Geist
        </AnimatedH1>
        <AnimatedTextLoop
          durationTillNext={4000}
          durationOfFadeOut={500}
          textOptions={[
            'Devoted learner.',
            'Delivery through collaboration.',
            'Quality, valuable code.',
          ]}
          type="chars"
          animation={{
            ease: 'ease-in-out',
          }}
          animationType="blocks"
          interval={0.03}
          duration={1.5}
          tag="h2"
          className="animated-paragraph"
        />
      </Box>
      <video
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="images/homepage.mov" />
      </video>
    </Page>
  );
};
