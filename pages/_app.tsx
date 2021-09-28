import type { AppProps } from 'next/app';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useScrollAnimations } from '../components/hooks/useScrollAnimations';

const theme = createTheme({
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

function MyApp({ Component, pageProps }: AppProps) {
  useScrollAnimations();
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}
export default MyApp;
