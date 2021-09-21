import { SupportedLocale } from '../@types';

type LanguageSpecificTranslation = {
  header: {
    pricing: string
    contactUs: string
    login: string
    signUp: string
  }
  landingPage: {
    emailAddressPlaceholder: string
    actionButton: string
    tagline: string
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
  landingPage: {
    emailAddressPlaceholder: 'Email address',
    actionButton: 'Start now',
    tagline: 'Premium mushrooms at your doorstep, every month',
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
  landingPage: {
    emailAddressPlaceholder: 'メールアドレス',
    actionButton: '登録',
    tagline: '毎日の舞茸。週末の椎茸。プレミアムマッシュルームならNPM',
    featureOne: '毎月、国産オーガニック・フリーレーンジマッシュルームがお家に届く',
    featureTwo: '厳選されたマッシュルームの品質確認には、世界レベルのテスターを使うもの',
    featureThree: '科学で認証された：毒は一歳入っていない'
  },
  footer: { credits: '里咲、そして露舞' }
};

type MasterTranslationBlock = Record<SupportedLocale, LanguageSpecificTranslation>;

export const translations: MasterTranslationBlock = {
  en: enTranslations,
  ja: jaTranslations
};
