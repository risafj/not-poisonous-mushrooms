export type SupportedLocale = 'en' | 'ja';

export type TopLevelTemplate = (props: {locale: SupportedLocale}) => JSX.Element;

declare module '@mui/material/styles' {
  interface PaletteColor {
    background?: string
  }
  interface SimplePaletteColorOptions {
    background?: string
  }
}
