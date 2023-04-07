import * as React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { AppDivider } from '../../AppDivider';
import { GSView } from './GSView';

export const GoldcrestPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>Goldcrest</Banner>

      <Centered>
        <GSView src="http://e.gsrca.de/152050" width={560} height={452} />

        <AppDivider />

        <GenericProjectLayout title="Goldcrest" />
      </Centered>
    </Page>
  );
};
