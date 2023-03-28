import * as React from 'react';
import { Box, CssBaseline, styled, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';
import { FOOTER_HEIGHT } from '../footer/Footer';
import { Page } from '../Page';
import AnimatedText from 'react-animated-text-content';
import { AnimatedTextLoop } from '../AnimatedTextLoop';

const AnimatedH1 = styled(AnimatedText)(({ theme }) => theme.typography.h1);

export const HomePage: FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Page>
      <Box
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.4)',
          bottom: FOOTER_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          padding: theme.spacing(),
          position: 'absolute',
          width: '100%',
        }}
        // position="absolute" top="50%" left="50%" zIndex={1}
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
            'Top engineering talent.',
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
