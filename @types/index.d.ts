export type SupportedLocale = 'en' | 'ja';

declare module '@mui/material/styles' {
  interface PaletteColor {
    background?: string
  }
  interface SimplePaletteColorOptions {
    background?: string
  }
}

type AppPageName = 'homepage' | 'login';
