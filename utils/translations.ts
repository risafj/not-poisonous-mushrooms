import { SupportedLocale } from '../@types';

export type LanguageSpecificTranslation = {
  header: {
    pricing: string
    contactUs: string
    login: string
    signUp: string
  }
  heroSection: {
    emailAddressPlaceholder: string
    actionButton: string
    tagline: string
  }
  featureSection: {
    featureOne: string
    featureTwo: string
    featureThree: string
  }
  footer: {
    credits: string
  }
};

const enTranslations: LanguageSpecificTranslation = {
  header: {
    pricing: 'Pricing',
    contactUs: 'Contact Us',
    login: 'Sign In',
    signUp: 'Sign Up'
  },
  heroSection: {
    emailAddressPlaceholder: 'Email address',
    actionButton: 'Start now',
    tagline: 'Premium mushrooms at your doorstep, every month'
  },
  featureSection: {
    featureOne: 'Organic, locally sourced, free-range mushrooms',
    featureTwo: 'Our QA teams ensure that the mushrooms are not poisonous.',
    featureThree: 'The science is in: Mushrooms are a food you can eat. Eat our mushrooms.'
  },
  footer: { credits: 'Risa and Rob' }
};

const jaTranslations: LanguageSpecificTranslation = {
  header: {
    pricing: '料金',
    contactUs: 'お問い合わせ',
    login: 'ログイン',
    signUp: '登録'
  },
  heroSection: {
    emailAddressPlaceholder: 'メールアドレス',
    actionButton: '登録',
    tagline: '毎日の舞茸。週末の椎茸。<br/>プレミアムマッシュルームならNPM'
  },
  featureSection: {
    featureOne: '毎月、国産オーガニック・フリーレーンジマッシュルームがお家に届く',
    featureTwo: '厳選されたマッシュルームの品質確認には、世界レベルのテスターを使うもの',
    featureThree: '科学で実証された：毒は一切入っていない'
  },
  footer: { credits: '里咲、そして露舞' }
};

type MasterTranslationBlock = Record<SupportedLocale, LanguageSpecificTranslation>;

export const translations: MasterTranslationBlock = {
  en: enTranslations,
  ja: jaTranslations
};
