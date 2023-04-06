import React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { CenteredImg } from './CenteredImg';
import { Fade } from 'react-awesome-reveal';

export const SteepsPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Steeps</Banner>
      <Centered>
        <GenericProjectLayout title="Steeps" />

        <Fade>
          <ProjectDetailHeader>Desktop Demo</ProjectDetailHeader>
          <CenteredImg
            noMinWidth
            src="/images/projects/steeps/desktop-demo.gif"
          />
        </Fade>

        <Fade>
          <ProjectDetailHeader>Mobile Demo</ProjectDetailHeader>
          <CenteredImg
            noMinWidth
            src="/images/projects/steeps/mobile-demo.gif"
          />
        </Fade>

        <Fade>
          <ProjectDetailHeader>Business Confirmation Email</ProjectDetailHeader>
          <CenteredImg
            style={{ maxWidth: '500px' }}
            src="/images/projects/steeps/business-confirmation-email.png"
          />
        </Fade>

        <Fade>
          <ProjectDetailHeader>Customer Confirmation Email</ProjectDetailHeader>
          <CenteredImg
            style={{ maxWidth: '500px' }}
            src="/images/projects/steeps/customer-confirmation-email.png"
          />
        </Fade>
      </Centered>
    </Page>
  );
};

// "https://www.youtube.com/watch?v=377AQ0y6LPA&ab_channel=JavaScriptMastery
