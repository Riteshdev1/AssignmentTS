import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './english.json';
import ar from './arabic.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = 'en';
}

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  ar: ar,
};

export default I18n;
