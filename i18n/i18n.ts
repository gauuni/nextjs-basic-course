import {
  commonEN,
  commonJA,
  errorCodeEN,
  errorCodeJA,
  chartTypeEN,
  chartTypeJA,
  heartEN,
  heartJA
} from '@/public/locales'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    common: commonEN,
    errorCode: errorCodeEN,
    chartType: chartTypeEN,
    heart: heartEN
  },
  ja: {
    common: commonJA,
    errorCode: errorCodeJA,
    chartType: chartTypeJA,
    heart: heartJA
  },
} as const

export const defaultNS = 'common'

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  defaultNS: defaultNS,
  ns: ['common', 'errorCode', 'chartType', 'veggie', 'ranking'],
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false,
  },
})
