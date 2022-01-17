import { ListOfAppPages, SupportedLocale } from '../@types';

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
  loginPage: {
    loginTagline: string
  },
  featureSection: {
    featureOne: string
    featureTwo: string
    featureThree: string
  }
  pricingSection: {
    monthlyBilling: string
    annualBilling: string
    monthlyPrice: string
    annualPrice: string
    taglineMonthlyDelivery: string
    taglineBirthdayPackage: string
    taglineRecipeWebsite: string
    taglineAnnual: string
  }
  footer: {
    credits: string
  },
  homepageSEO: {
    title: string
    description: string
  },
  loginSEO: {
    title: string
    description: string
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
  loginPage: { loginTagline: 'Log in to buy even more mushrooms!' },
  featureSection: {
    featureOne: 'Organic, locally sourced, free-range mushrooms',
    featureTwo: 'Our QA teams ensure that the mushrooms are not poisonous.',
    featureThree: 'The science is in: Mushrooms are a food you can eat. Eat our mushrooms.'
  },
  pricingSection: {
    monthlyBilling: 'Monthly billing',
    annualBilling: 'Yearly billing',
    monthlyPrice: '$9.99 / month',
    annualPrice: '$99.99 / year',
    taglineMonthlyDelivery: 'Monthly delivery of fresh mushrooms',
    taglineBirthdayPackage: 'Special birthday package in your birth month',
    taglineRecipeWebsite: 'Free access to an exclusive mushroom recipe website',
    taglineAnnual: 'Save 20% compared to monthly billing!'
  },
  footer: { credits: 'Risa and Rob' },
  homepageSEO: {
    title: 'Not Poisonous Mushrooms - a mushroom subscription service',
    description: 'NPM provides fresh mushrooms that are certified to not be poisonous every month to your doorstep!'
  },
  loginSEO: {
    title: 'Login',
    description: 'Login to your NPM account'
  }
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
  loginPage: { loginTagline: 'キノコが足りない方はこちらへ！' },
  featureSection: {
    featureOne: '毎月、国産オーガニック・フリーレーンジマッシュルームがお家に届く',
    featureTwo: '厳選されたマッシュルームの品質確認には、世界レベルのテスターを使うもの',
    featureThree: '科学で実証された：毒は一切入っていない'
  },
  pricingSection: {
    monthlyBilling: '毎月払い',
    annualBilling: '毎年払い',
    monthlyPrice: '¥990 / 月',
    annualPrice: '¥9,990 / 年',
    taglineMonthlyDelivery: '新鮮なキノコが毎月届く',
    taglineBirthdayPackage: 'お誕生月には特別なプレゼント',
    taglineRecipeWebsite: '会員限定のキノコ用レシピサイト',
    taglineAnnual: '毎月払いに比べて約20％お得！'
  },
  footer: { credits: '里咲、そして露舞' },
  homepageSEO: {
    title: 'Not poisonous mushrooms - きのこが毎月届くサービス',
    description: '毒が入ってない厳選されたきのこを毎月お家にお届けします！'  
  },
  loginSEO: {
    title: 'ログイン',
    description: 'NPMアカウントにログインする'   
  }
};

type MasterTranslations = Record<SupportedLocale, LanguageSpecificTranslation>;

export const translations: MasterTranslations = {
  en: enTranslations,
  ja: jaTranslations
};

// SEO DATA ---

type SEOData = {
  title: string,
  description: string
};

export type LanguageSpecificSEO = Record<ListOfAppPages, SEOData>;
type MasterSEOTranslations = Record<SupportedLocale, LanguageSpecificSEO>;

const enSEO: LanguageSpecificSEO = {
  homepage: {
    title: 'Not Poisonous Mushrooms - a mushroom subscription service',
    description: 'NPM provides fresh mushrooms that are certified to not be poisonous every month to your doorstep!'
  },
  login: {
    title: 'Login',
    description: 'Login to your NPM account'
  }
};

const jaSEO: LanguageSpecificSEO = {
  homepage: {
    title: 'Not poisonous mushrooms - きのこが毎月届くサービス',
    description: '毒が入ってない厳選されたきのこを毎月お家にお届けします！'  
  },
  login: {
    title: 'ログイン',
    description: 'NPMアカウントにログインする'   
  }
};

export const seoTranslations: MasterSEOTranslations = {
  en: enSEO,
  ja: jaSEO
};
