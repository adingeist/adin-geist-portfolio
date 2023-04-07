import * as React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { ResponsiveYouTube } from '../../ResponsiveYouTube';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Screenshot = styled.img({
  margin: '10px',
  borderRadius: '10px',
});

export const ShapeFallPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Shape Fall</Banner>

      <Centered>
        <GenericProjectLayout title="Shape Fall" />

        <ProjectDetailHeader>Trailer</ProjectDetailHeader>
        <ResponsiveYouTube src="https://www.youtube.com/embed/5zOSA_uju5c" />
        <Typography sx={{ whiteSpace: 'pre-line' }}>
          <ProjectDetailHeader>Listing Description</ProjectDetailHeader>
          {`
Upbeat, fun, and colorful! Take on each level by lowering your precious golden square to the bottom of each tower. Tap away the blocks of the tower, but don’t let the structure collapse with your golden block! It’s just not good. Bring your precious golden block to a stop on the target platform at the bottom of the tower. The closer to the middle, the greater the reward! Complete levels to discover new tower blocks and find out their special abilities. Each world has a new block and an array of levels to face.

Playing is simple!
►Lower your golden block.
►Tap away tower blocks. Find out their unique properties.
►Land and stop your golden block in the middle of the target platform at the bottom of the tower.
►The closer to the middle of the target, the more you earn!

While you pop the blocks in each level, you’ll earn stars that can be used in the shop to customize your game. These customizable items include the ability to:
►Customize your golden block color
►Customize the colors of the tower
►Unlock different golden block textures
►Unlock target platform textures
►Explore different block collision sounds
►Available in 8 languages!

Achievements play a crucial role in earning stars and a rarer currency, gems. Challenge yourself to complete all the achievements and become the Shape Fall master! Never run out on the Shape Fall fun by playing a world’s endless mode. Endless mode progressively gets harder the further you go but has a significant opportunity to make an overwhelming amount of stars and gems. Become a Shape Fall master!
            `}
        </Typography>

        <ProjectDetailHeader>Screenshots</ProjectDetailHeader>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Screenshot src="/images/projects/shape-fall/shape-fall-1.png" />
          <Screenshot src="/images/projects/shape-fall/shape-fall-2.png" />
          <Screenshot src="/images/projects/shape-fall/shape-fall-3.png" />
          <Screenshot src="/images/projects/shape-fall/shape-fall-4.png" />
          <Screenshot src="/images/projects/shape-fall/shape-fall-5.png" />
        </Box>
      </Centered>
    </Page>
  );
};
