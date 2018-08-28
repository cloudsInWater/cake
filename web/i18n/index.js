import store from 'models';
import _mapValues from 'lodash/mapValues';
import _get from 'lodash/get';
import templatesZhCn from './zh';
import templatesEn from './en';

const { reaction } = Mobx;
const { runtime } = store;

updateTemplates();
reaction(() => runtime.locale, updateTemplates);

function updateTemplates() {
  const templates = runtime.locale === 'en' ? templatesEn : templatesZhCn;
  runtime.setI18nTemplates(templates);

  if (IS_DEV) {
    window.i18nStats = _mapValues(templates, () => 0);
  }
}

function i18n(key, ...args) {
  const { i18nTemplates } = runtime;

  if (_get(i18nTemplates, key)) {
    if (IS_DEV && window.i18nStats) {
      window.i18nStats[key] += 1;
    }

    return template(i18nTemplates[key], ...args);
  }

  return '';
}

export default i18n;
