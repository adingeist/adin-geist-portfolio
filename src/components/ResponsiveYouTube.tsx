import * as React from 'react';
import styled from '@emotion/styled';

const FrameContainer = styled.div({
  clear: 'both',
  float: 'none',
  width: '100%',
  height: '0',
  paddingBottom: '56.25%',
  paddingTop: '25px',
  position: 'relative',
});

const StyledFrame = styled.iframe({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: '0px',
});

type Props = {
  src: string;
};

export const ResponsiveYouTube: React.FunctionComponent<Props> = ({ src }) => (
  <FrameContainer>
    <StyledFrame
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </FrameContainer>
);
