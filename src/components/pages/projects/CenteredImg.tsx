import styled from '@emotion/styled';
import React from 'react';

type Props = {
  style?: React.HTMLAttributes<HTMLImageElement>['style'];
  src: string;
};

const ImageContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

export const CenteredImg: React.FunctionComponent<Props> = (props) => {
  return (
    <ImageContainer>
      <img {...props} />
    </ImageContainer>
  );
};
