import * as React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { Centered } from '../../Centered';

export const ChatAppPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Chat App</Banner>

      <Centered>
        <GenericProjectLayout title="Chat App" />
      </Centered>
    </Page>
  );
};
