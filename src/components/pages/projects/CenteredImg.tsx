import styled from '@emotion/styled';
import React from 'react';

type Props = {
  style?: React.HTMLAttributes<HTMLImageElement>['style'];
  src: string;
  noMinWidth?: boolean;
};

const ImageContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

export const CenteredImg: React.FunctionComponent<Props> = (props) => {
  return (
    <ImageContainer>
      <img
        {...props}
        style={{
          minWidth: props.noMinWidth ? undefined : '450px',
          width: props.noMinWidth ? undefined : '80%',
          ...props.style,
        }}
      />
    </ImageContainer>
  );
};
