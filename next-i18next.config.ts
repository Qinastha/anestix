export const i18n = {
  defaultLocale: 'ru',
  locales: ['en', 'ru'],
};

export default {
  i18n,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
