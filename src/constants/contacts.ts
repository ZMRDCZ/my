import { type L, type Locale, pick } from '@/i18n/core'
import type { ContactInfo, SocialLink } from '../types'

const cityData: L = { ru: 'Москва', en: 'Moscow', cs: 'Moskva', de: 'Moskau' }

const availabilityData: L = {
  ru: 'Пишите по любому поводу, где мы можем быть полезны друг другу.',
  en: 'Write to me about anything where we can be useful to each other.',
  cs: 'Napište mi o čemkoli, v čem si můžeme být navzájem užiteční.',
  de: 'Schreiben Sie mir zu allem, wobei wir einander nützlich sein können.'
}

export const getContactInfo = (locale: Locale): ContactInfo => ({
  email: 'komarov.asm2504@asugubkin.ru',
  emailAlt: 'komarovda@seznam.cz',
  phone: '+7 (895) 117-36-29',
  phoneHref: '+78951173629',
  city: pick(cityData, locale),
  timezone: 'MSK, UTC+3',
  availability: pick(availabilityData, locale)
})

type SocialSource = {
  name: L
  handle: string
  url: string
  icon: string
  ariaKey: string
}

const directContactsData: SocialSource[] = [
  {
    name: { ru: 'Telegram', en: 'Telegram', cs: 'Telegram', de: 'Telegram' },
    handle: '@DAkomaroff',
    url: 'https://t.me/DAkomaroff',
    icon: 'telegram',
    ariaKey: 'contacts.writeTelegram'
  },
  {
    name: { ru: 'ВКонтакте', en: 'VKontakte', cs: 'VKontakte', de: 'VKontakte' },
    handle: '@zmrdcz',
    url: 'https://vk.com/zmrdcz',
    icon: 'vk',
    ariaKey: 'contacts.writeVk'
  },
  {
    name: { ru: 'Почта', en: 'Email', cs: 'E-mail', de: 'E-Mail' },
    handle: 'komarov.asm2504@asugubkin.ru',
    url: 'mailto:komarov.asm2504@asugubkin.ru',
    icon: 'mail',
    ariaKey: 'contacts.writeMail'
  }
]

const profileLinksData: SocialSource[] = [
  {
    name: { ru: 'GitHub', en: 'GitHub', cs: 'GitHub', de: 'GitHub' },
    handle: 'zmrdcz',
    url: 'https://github.com/zmrdcz',
    icon: 'github',
    ariaKey: 'contacts.profiles'
  },
  {
    name: {
      ru: 'eLibrary (РИНЦ)',
      en: 'eLibrary (RSCI)',
      cs: 'eLibrary (RSCI)',
      de: 'eLibrary (RSCI)'
    },
    handle: 'Author ID 1306552',
    url: 'https://elibrary.ru/author_items.asp?authorid=1306552',
    icon: 'science',
    ariaKey: 'contacts.profiles'
  },
  {
    name: { ru: 'ORCID', en: 'ORCID', cs: 'ORCID', de: 'ORCID' },
    handle: '0009-0006-4805-3701',
    url: 'https://orcid.org/0009-0006-4805-3701',
    icon: 'orcid',
    ariaKey: 'contacts.profiles'
  }
]

const resolve = (items: SocialSource[], locale: Locale, translate: (key: string) => string): SocialLink[] =>
  items.map((item) => ({
    name: pick(item.name, locale),
    handle: item.handle,
    url: item.url,
    icon: item.icon,
    ariaLabel: translate(item.ariaKey)
  }))

export const getDirectContacts = (
  locale: Locale,
  translate: (key: string) => string
): SocialLink[] => resolve(directContactsData, locale, translate)

export const getProfileLinks = (
  locale: Locale,
  translate: (key: string) => string
): SocialLink[] => resolve(profileLinksData, locale, translate)

/** Ключ подписи действия для карточки прямого контакта. */
export const directContactActionKeys: Record<string, string> = {
  telegram: 'contacts.writeTelegram',
  vk: 'contacts.writeVk',
  mail: 'contacts.writeMail'
}
