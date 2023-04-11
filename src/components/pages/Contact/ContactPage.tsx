import * as React from 'react';
import { useState } from 'react';
import { Banner } from '../../Banner';
import { Box, IconButton, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';
import { Page } from '../../Page';
import { Centered } from '../../Centered';
import { EmailModal } from './EmailModal';
import { AppIconButton } from '../../app-icons/AppIconButton';

export const ContactPage: React.FunctionComponent = () => {
  const [emailOpen, setEmailOpen] = useState(false);

  const handleOpen = () => setEmailOpen(true);
  const handleClose = () => setEmailOpen(false);

  return (
    <>
      <Page>
        <Banner>Contact</Banner>
        <Centered>
          <Typography variant="h4">
            Interested in reaching out to me?
          </Typography>
          <Typography>
            Feel free to message me through Linkedin or email.
          </Typography>

          <Box sx={{ marginTop: '5px' }}>
            <AppIconButton icon="LinkedIn" iconSize="large" fontSize="large" />
            <IconButton size="large" onClick={handleOpen}>
              <Email fontSize="large" />
            </IconButton>
          </Box>
        </Centered>
      </Page>

      <EmailModal isOpen={emailOpen} handleClose={handleClose} />
    </>
  );
};
