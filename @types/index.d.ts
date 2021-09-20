export type SupportedLocales = 'en' | 'ja'

export type TopLevelTemplate = (props: {locale: SupportedLocales}) => JSX.Element;
