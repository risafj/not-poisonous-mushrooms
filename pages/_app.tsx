import type { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useScrollAnimations } from '../components/hooks/useScrollAnimations';
import { appTheme } from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  useScrollAnimations();
  return (
    <ThemeProvider theme={ appTheme }>
      <CssBaseline />
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}
export default MyApp;
