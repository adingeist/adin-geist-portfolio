import React from 'react';
import { Page } from '../../Page';
import { Centered } from '../../Centered';
import { GenericProjectLayout } from '../../GenericProjectLayout';
import { AppDivider } from '../../AppDivider';
import { Banner } from '../../Banner';

export const AlgorithmVisualizerPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner fontSize="32px">Algorithm Visualizer</Banner>
      <Centered style={{ display: 'flex' }}>
        <iframe
          style={{
            border: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            alignSelf: 'center',
          }}
          width="600px"
          height="680px"
          src="https://adingeist.github.io/AlgorithmVisualizer/"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </Centered>

      <Centered>
        <AppDivider />
        <GenericProjectLayout title="Algorithm Visualizer" />
      </Centered>
    </Page>
  );
};
