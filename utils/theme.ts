import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      light: '#b8e951',
      main: '#85b717',
      dark: '#538700',
      contrastText: '#fff',
      background: '#F7FDDC'
    },
    secondary: {
      light: '#9a5742',
      main: '#682c1b',
      dark: '#3b0200',
      contrastText: '#fff'
    },
    text: { primary: '#444444' }
  }
});
