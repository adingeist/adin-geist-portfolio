import * as React from 'react';
import { AppDivider } from '../../AppDivider';
import { Banner } from '../../Banner';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { Page } from '../../Page';
import { GSView } from './GSView';

export const TheGoldenPeachPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>The Golden Peach</Banner>

      <Centered>
        <GSView src="http://e.gsrca.de/141829" height={347} width={560} />
        <AppDivider />
        <GenericProjectLayout title="The Golden Peach" />
      </Centered>
    </Page>
  );
};
