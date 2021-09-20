export type SupportedLocale = 'en' | 'ja';

export type TopLevelTemplate = (props: {locale: SupportedLocale}) => JSX.Element;
