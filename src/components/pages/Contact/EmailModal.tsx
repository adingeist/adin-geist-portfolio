import * as React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  Icon,
  Link,
  Typography,
} from '@mui/material';
import { Email } from '@mui/icons-material';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const EmailModal: React.FunctionComponent<Props> = ({
  isOpen,
  handleClose,
}) => (
  <Dialog onClose={handleClose} open={isOpen}>
    <DialogTitle>
      <Icon sx={{ transform: 'translate(0px, 2px)', marginRight: '10px' }}>
        <Email />
      </Icon>
      Email
    </DialogTitle>
    <Typography sx={{ margin: '0px 24px' }}>
      You can email me at{' '}
      <Link href="mailto:adingeist@icloud.com">adingeist@icloud.com</Link>.
    </Typography>
    <Button
      onClick={handleClose}
      sx={{ width: '150px', margin: '24px auto 24px auto' }}
      variant="contained"
      color="secondary"
    >
      Close
    </Button>
  </Dialog>
);
