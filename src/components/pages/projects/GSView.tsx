import React from 'react';
import { Box } from '@mui/material';

type Props = {
  width: number;
  height: number;
  src: string;
  size?: number;
};

export const GSView: React.FunctionComponent<Props> = ({
  width,
  height,
  src,
  size = 1.5,
}) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <iframe
      src={`${src}?s=${width * size}&mode=embed`}
      style={{
        width: `${width * size}px`,
        height: `${(size * width) / (width / height) - (size * 16) / 1.5}px`,
        border: 'none',
      }}
      allowFullScreen={true}
    ></iframe>
  </Box>
);
