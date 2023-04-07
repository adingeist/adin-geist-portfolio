import * as React from 'react';
import { Page } from '../../Page';
import { Banner } from '../../Banner';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { GSView } from './GSView';
import { AppDivider } from '../../AppDivider';

export const BinkosDragstripPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner>{"Binko's Dragstrip"}</Banner>

      <GSView src="http://e.gsrca.de/146791" height={452} width={560} />

      <Centered>
        <AppDivider />
        <GenericProjectLayout title="Binko's Dragstrip" />
      </Centered>
    </Page>
  );
};
