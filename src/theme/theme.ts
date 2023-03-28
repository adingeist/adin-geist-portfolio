import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      light: '#e0e0e0',
    },
    secondary: {
      main: '#5658ff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },

  typography: {
    h1: {
      fontSize: '100px',
      fontWeight: '400',
      margin: 0,
      marginBlockStart: '0px',
    },
    h2: {
      margin: '0px',
    },
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: '#e0e0e0',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
