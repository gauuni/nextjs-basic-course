import 'i18next'
import { defaultNS, resources } from '@/i18n/i18n'

// react-i18next versions higher than 11.11.0
declare module 'i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: typeof defaultNS
    // custom resources type
    resources: typeof resources['ja']
  }
}
