import React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { projects } from '../projects';
import { Box, Divider, Typography } from '@mui/material';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import styled from '@emotion/styled';
import { CenteredImg } from './CenteredImg';

export const SteepsPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Steeps</Banner>
      <Centered>
        <GenericProjectLayout title="Steeps" />
        <Divider sx={{ margin: '20px 0' }} />
        <ProjectDetailHeader>Desktop Demo</ProjectDetailHeader>
        <CenteredImg src="/images/projects/steeps/desktop-demo.gif" />
        <ProjectDetailHeader>Mobile Demo</ProjectDetailHeader>
        <CenteredImg src="/images/projects/steeps/mobile-demo.gif" />
        <ProjectDetailHeader>Business Confirmation Email</ProjectDetailHeader>
        <CenteredImg
          style={{ maxWidth: '500px' }}
          src="/images/projects/steeps/business-confirmation-email.png"
        />
        <ProjectDetailHeader>Customer Confirmation Email</ProjectDetailHeader>
        <CenteredImg
          style={{ maxWidth: '500px' }}
          src="/images/projects/steeps/customer-confirmation-email.png"
        />
      </Centered>
    </Page>
  );
};

// "https://www.youtube.com/watch?v=377AQ0y6LPA&ab_channel=JavaScriptMastery
