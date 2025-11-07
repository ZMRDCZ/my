import type { ContactInfo, SocialLink } from '~/types'

export const contactInfo: ContactInfo = {
  email: 'dmitry@example.com',
  phone: '+7 (999) 999-99-99'
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Telegram',
    url: '#',
    icon: '📱',
    ariaLabel: 'Перейти в Telegram'
  },
  {
    name: 'VKontakte',
    url: '#',
    icon: '🔗',
    ariaLabel: 'Перейти в VKontakte'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: '💼',
    ariaLabel: 'Перейти в LinkedIn'
  }
]

