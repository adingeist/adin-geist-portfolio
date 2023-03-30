import * as React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouter } from './components/Router';
import { Header } from './components/header/Header';
import { theme } from './theme/theme';
import { Footer } from './components/footer/Footer';
import { isHomePage } from './components/pages/HomePage';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            height: isHomePage() ? '100vh' : undefined,
            overflow: 'hidden',
          }}
        >
          <Header />
          <AppRouter />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};
