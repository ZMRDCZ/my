import { computed, ref } from 'vue'

export type Locale = 'ru' | 'en' | 'cs' | 'de'

export const LOCALES: { code: Locale; label: string; htmlLang: string; title: string }[] = [
  { code: 'ru', label: 'RU', htmlLang: 'ru', title: 'Русский' },
  { code: 'en', label: 'EN', htmlLang: 'en', title: 'English' },
  { code: 'cs', label: 'CS', htmlLang: 'cs', title: 'Čeština' },
  { code: 'de', label: 'DE', htmlLang: 'de', title: 'Deutsch' }
]

export const DEFAULT_LOCALE: Locale = 'ru'

/** Значение на четырёх языках. Русский обязателен, остальные — с откатом. */
export type L<T = string> = { ru: T } & Partial<Record<Locale, T>>

const STORAGE_KEY = 'site-locale'

const isLocale = (value: string | null): value is Locale =>
  Boolean(value) && LOCALES.some((item) => item.code === value)

const detectLocale = (): Locale => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // приватный режим — просто идём дальше
  }

  const fromBrowser = (navigator.languages ?? [navigator.language])
    .map((item) => item.slice(0, 2).toLowerCase())
    .find((item) => isLocale(item))

  return isLocale(fromBrowser ?? null) ? (fromBrowser as Locale) : DEFAULT_LOCALE
}

export const locale = ref<Locale>(detectLocale())

export const setLocale = (value: Locale): void => {
  locale.value = value

  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // сохранение необязательно
  }

  const meta = LOCALES.find((item) => item.code === value)
  if (meta) document.documentElement.lang = meta.htmlLang
}

/** Берёт значение на текущем языке: сначала нужный, затем английский, затем русский. */
export const pick = <T>(value: L<T>, current: Locale = locale.value): T =>
  value[current] ?? value.en ?? value.ru

/** Реактивная выборка для использования в шаблонах. */
export const usePick = () => computed(() => <T>(value: L<T>) => pick(value, locale.value))
