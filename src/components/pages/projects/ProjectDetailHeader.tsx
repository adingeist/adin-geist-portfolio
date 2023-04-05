import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

type Props = React.ComponentProps<typeof Typography>;

export const ProjectDetailHeader: FunctionComponent<Props> = (props) => (
  <Typography sx={{ margin: '20px 0' }} variant="h3" {...props}>
    {props.children}
  </Typography>
);
