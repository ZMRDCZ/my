import { LOCALES, type Locale, locale, setLocale } from './core'
import {
  publicationsCount as pluralPublications,
  t as translate,
  worksCount as pluralWorks
} from './ui'

export { LOCALES, locale, setLocale }
export type { Locale }
export { type L, pick } from './core'

/**
 * Единая точка для страниц: t() читает locale.value,
 * поэтому шаблон перерисовывается при смене языка.
 */
export const useI18n = () => ({
  locale,
  setLocale,
  locales: LOCALES,
  t: (key: string) => translate(key, locale.value),
  worksCount: (count: number) => pluralWorks(count, locale.value),
  publicationsCount: (count: number) => pluralPublications(count, locale.value)
})
