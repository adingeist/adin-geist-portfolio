import React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { Centered } from '../../Centered';
import { Typography } from '@mui/material';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { CenteredImg } from './CenteredImg';
import { Fade } from 'react-awesome-reveal';

export const TheConversationPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>The Conversation</Banner>
      <Centered>
        <GenericProjectLayout title="The Conversation" />

        <Typography variant="h3">Screenshots</Typography>

        <Fade>
          <ProjectDetailHeader variant="h5">
            Unauthenticated landing page
          </ProjectDetailHeader>
          <CenteredImg src="/images/projects/the-conversation/unauthenticated-landing-page.png" />
        </Fade>

        <Fade>
          <ProjectDetailHeader variant="h5">
            Creating an account
          </ProjectDetailHeader>
          <CenteredImg src="/images/projects/the-conversation/creating-an-account.png" />
        </Fade>

        <Fade>
          <ProjectDetailHeader variant="h5">Make posts</ProjectDetailHeader>
          <CenteredImg src="/images/projects/the-conversation/make-posts.png" />
          <CenteredImg src="/images/projects/the-conversation/make-posts-after.png" />
        </Fade>

        <Fade>
          <ProjectDetailHeader variant="h5">
            Account recovery
          </ProjectDetailHeader>
          <CenteredImg src="/images/projects/the-conversation/account-recovery.png" />
          <CenteredImg src="/images/projects/the-conversation/account-email.png" />
        </Fade>
      </Centered>
    </Page>
  );
};
