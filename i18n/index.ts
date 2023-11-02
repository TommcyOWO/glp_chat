import enUS from './en-US';
import chTW from './ch-TW';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'enu',
  messages: {
    enu:enUS,
    cht:chTW
  }
}))
