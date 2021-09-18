import type { AppProps } from 'next/app';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#b8e951',
      main: '#85b717',
      dark: '#538700',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9a5742',
      main: '#682c1b',
      dark: '#3b0200',
      contrastText: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ theme }>
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}
export default MyApp;
