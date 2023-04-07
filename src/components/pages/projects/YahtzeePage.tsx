import React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { Centered } from '../../Centered';

export const YahtzeePage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Yahtzee</Banner>

      <Centered>
        <GenericProjectLayout title="Yahtzee" />
      </Centered>
    </Page>
  );
};
