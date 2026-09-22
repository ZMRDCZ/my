/** Пункты меню: подпись берётся из словаря интерфейса по ключу. */
export const navigationItems: { key: string; path: string }[] = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.achievements', path: '/achievements' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.publications', path: '/publications' },
  { key: 'nav.initiatives', path: '/initiatives' },
  // Галерея пока скрыта из меню. Вернуть: { key: 'nav.gallery', path: '/gallery' }
  { key: 'nav.contacts', path: '/contacts' }
]
