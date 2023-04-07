import React from 'react';
import { Page } from '../../Page';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { Typography } from '@mui/material';
import { ResponsiveYouTube } from '../../ResponsiveYouTube';

export const PopperPigPage: React.FunctionComponent = () => {
  return (
    <Page>
      <></>

      <Centered>
        <GenericProjectLayout title="Popper Pig" />
        <ProjectDetailHeader>
          Gameplay and Walkthrough of the Design
        </ProjectDetailHeader>
        <ResponsiveYouTube src="https://www.youtube.com/embed/sk9at0VvZZo" />
        <ProjectDetailHeader>How I did it</ProjectDetailHeader>
        <Typography>
          I wrote the application in Python and used the Kivy package. Kivy
          allowed to me to manipulate objects on the screen with ease, test the
          build on my desktop, and export the project to an Android APK. I was
          then able to sign my APK and publish it on the Google Play Store. I
          encourage you to check out my 15-minute presentation I made where I
          explain the mechanics and strategies I used coding to develop the
          game.
        </Typography>
        <ProjectDetailHeader>How to Play</ProjectDetailHeader>
        <Typography>
          {`It's easy! Tap and hold on your device to raise the pig. Release you
          touch to lower the pig. If you miss too many balloons or go out of
          bounds, it's game over!`}
        </Typography>
      </Centered>
    </Page>
  );
};
