import { computed } from 'vue'
import { type L, type Locale, locale, pick } from './core'

/** Строки интерфейса. Ключи плоские: раздел.название. */
export const messages: Record<string, L> = {
  // --- Навигация ---
  'nav.home': { ru: 'Главная', en: 'Home', cs: 'Úvod', de: 'Start' },
  'nav.about': { ru: 'О себе', en: 'About', cs: 'O mně', de: 'Über mich' },
  'nav.achievements': { ru: 'Достижения', en: 'Achievements', cs: 'Ocenění', de: 'Auszeichnungen' },
  'nav.projects': { ru: 'Проекты', en: 'Projects', cs: 'Projekty', de: 'Projekte' },
  'nav.publications': { ru: 'Публикации', en: 'Publications', cs: 'Publikace', de: 'Publikationen' },
  'nav.initiatives': { ru: 'Инициативы', en: 'Initiatives', cs: 'Iniciativy', de: 'Initiativen' },
  'nav.gallery': { ru: 'Галерея', en: 'Gallery', cs: 'Galerie', de: 'Galerie' },
  'nav.contacts': { ru: 'Контакты', en: 'Contacts', cs: 'Kontakty', de: 'Kontakt' },
  'nav.resume': { ru: 'Резюме', en: 'CV', cs: 'Životopis', de: 'Lebenslauf' },

  // --- Общее ---
  'common.all': { ru: 'Все', en: 'All', cs: 'Vše', de: 'Alle' },
  'common.allYears': { ru: 'Все годы', en: 'All years', cs: 'Všechny roky', de: 'Alle Jahre' },
  'common.archive': { ru: 'Архив', en: 'Archive', cs: 'Archiv', de: 'Archiv' },
  'common.archiveHide': {
    ru: 'Скрыть архив',
    en: 'Hide archive',
    cs: 'Skrýt archiv',
    de: 'Archiv ausblenden'
  },
  'common.empty': {
    ru: 'По выбранному фильтру ничего нет.',
    en: 'Nothing matches this filter.',
    cs: 'Tomuto filtru nic neodpovídá.',
    de: 'Zu diesem Filter gibt es nichts.'
  },
  'common.now': { ru: 'сейчас', en: 'now', cs: 'nyní', de: 'aktuell' },
  'common.openMenu': { ru: 'Открыть меню', en: 'Open menu', cs: 'Otevřít menu', de: 'Menü öffnen' },
  'common.closeMenu': {
    ru: 'Закрыть меню',
    en: 'Close menu',
    cs: 'Zavřít menu',
    de: 'Menü schließen'
  },
  'common.language': { ru: 'Язык', en: 'Language', cs: 'Jazyk', de: 'Sprache' },

  // --- Шапка и подвал ---
  'footer.sections': { ru: 'Разделы', en: 'Sections', cs: 'Sekce', de: 'Bereiche' },
  'footer.contact': { ru: 'Связаться', en: 'Get in touch', cs: 'Kontakt', de: 'Kontakt' },
  'footer.profiles': { ru: 'Профили', en: 'Profiles', cs: 'Profily', de: 'Profile' },
  'footer.nav': {
    ru: 'Навигация в подвале',
    en: 'Footer navigation',
    cs: 'Navigace v patičce',
    de: 'Fußzeilen-Navigation'
  },

  // --- Главная ---
  'home.focus': {
    ru: 'Чем занимаюсь',
    en: 'What I work on',
    cs: 'Čemu se věnuji',
    de: 'Woran ich arbeite'
  },
  'home.now': { ru: 'Сейчас', en: 'Currently', cs: 'Aktuálně', de: 'Derzeit' },
  'home.sections': { ru: 'Разделы', en: 'Sections', cs: 'Sekce', de: 'Bereiche' },
  'home.master': { ru: 'Магистратура', en: "Master's programme", cs: 'Magisterské studium', de: 'Masterstudium' },
  'home.ctaProjects': { ru: 'Проекты', en: 'Projects', cs: 'Projekty', de: 'Projekte' },
  'home.ctaPublications': {
    ru: 'Публикации',
    en: 'Publications',
    cs: 'Publikace',
    de: 'Publikationen'
  },
  'home.ctaContact': { ru: 'Связаться', en: 'Contact', cs: 'Napsat mi', de: 'Kontakt' },
  'home.portraitAlt': { ru: 'портрет', en: 'portrait', cs: 'portrét', de: 'Porträt' },

  // --- О себе ---
  'about.title': { ru: 'О себе', en: 'About', cs: 'O mně', de: 'Über mich' },
  'about.education': { ru: 'Образование', en: 'Education', cs: 'Vzdělání', de: 'Ausbildung' },
  'about.educationExtra': {
    ru: 'Дополнительное образование',
    en: 'Further training',
    cs: 'Další vzdělávání',
    de: 'Weiterbildung'
  },
  'about.experience': { ru: 'Опыт', en: 'Experience', cs: 'Praxe', de: 'Erfahrung' },
  'about.projectRoles': {
    ru: 'Роли в проектных командах',
    en: 'Roles in project teams',
    cs: 'Role v projektových týmech',
    de: 'Rollen in Projektteams'
  },
  'about.mentorship': {
    ru: 'Наставничество и сообщества',
    en: 'Mentoring and communities',
    cs: 'Mentoring a komunity',
    de: 'Mentoring und Communities'
  },
  'about.skills': {
    ru: 'Навыки и инструменты',
    en: 'Skills and tools',
    cs: 'Dovednosti a nástroje',
    de: 'Fähigkeiten und Werkzeuge'
  },
  'about.thesis': {
    ru: 'Выпускная работа:',
    en: 'Thesis:',
    cs: 'Závěrečná práce:',
    de: 'Abschlussarbeit:'
  },
  'about.linkAchievements': {
    ru: 'Достижения →',
    en: 'Achievements →',
    cs: 'Ocenění →',
    de: 'Auszeichnungen →'
  },
  'about.linkPublications': {
    ru: 'Публикации →',
    en: 'Publications →',
    cs: 'Publikace →',
    de: 'Publikationen →'
  },
  'about.linkContacts': {
    ru: 'Связаться →',
    en: 'Get in touch →',
    cs: 'Napsat mi →',
    de: 'Kontakt →'
  },
  'about.linkResume': { ru: 'Резюме →', en: 'CV →', cs: 'Životopis →', de: 'Lebenslauf →' },

  // --- Достижения ---
  'achievements.title': {
    ru: 'Достижения',
    en: 'Achievements',
    cs: 'Ocenění',
    de: 'Auszeichnungen'
  },
  'achievements.subtitle': {
    ru: 'Конкурсы, стипендии, конференции и организаторская работа — по годам.',
    en: 'Competitions, scholarships, conferences and organising work, year by year.',
    cs: 'Soutěže, stipendia, konference a organizační práce podle let.',
    de: 'Wettbewerbe, Stipendien, Konferenzen und Organisationsarbeit nach Jahren.'
  },
  'achievements.filterYears': {
    ru: 'Фильтр по годам',
    en: 'Filter by year',
    cs: 'Filtr podle roku',
    de: 'Filter nach Jahr'
  },
  'achievements.filterCategories': {
    ru: 'Фильтр по направлениям',
    en: 'Filter by area',
    cs: 'Filtr podle oblasti',
    de: 'Filter nach Bereich'
  },

  // --- Проекты ---
  'projects.title': { ru: 'Проекты', en: 'Projects', cs: 'Projekty', de: 'Projekte' },
  'projects.subtitle': {
    ru: 'Цифровизация ТЭК, онтологии и управление знаниями, робототехника, инклюзивные и образовательные инициативы.',
    en: 'Digitalisation of the energy sector, ontologies and knowledge management, robotics, inclusive and educational initiatives.',
    cs: 'Digitalizace energetiky, ontologie a správa znalostí, robotika, inkluzivní a vzdělávací iniciativy.',
    de: 'Digitalisierung der Energiewirtschaft, Ontologien und Wissensmanagement, Robotik, inklusive und Bildungsinitiativen.'
  },
  'projects.filter': {
    ru: 'Фильтр проектов',
    en: 'Project filter',
    cs: 'Filtr projektů',
    de: 'Projektfilter'
  },
  'projects.role': { ru: 'Роль:', en: 'Role:', cs: 'Role:', de: 'Rolle:' },
  'projects.customer': { ru: 'Заказчик:', en: 'Client:', cs: 'Zadavatel:', de: 'Auftraggeber:' },
  'projects.publicationsLink': {
    ru: 'Публикации по проекту →',
    en: 'Related publications →',
    cs: 'Publikace k projektu →',
    de: 'Publikationen zum Projekt →'
  },
  'projects.empty': {
    ru: 'По этому фильтру проектов нет.',
    en: 'No projects match this filter.',
    cs: 'Tomuto filtru neodpovídají žádné projekty.',
    de: 'Zu diesem Filter gibt es keine Projekte.'
  },

  // --- Публикации ---
  'publications.title': {
    ru: 'Публикации',
    en: 'Publications',
    cs: 'Publikace',
    de: 'Publikationen'
  },
  'publications.subtitle': {
    ru: 'Статьи и доклады на конференциях. Полный перечень — в профилях ниже.',
    en: 'Papers and conference presentations. The full list is in the profiles below.',
    cs: 'Články a konferenční příspěvky. Úplný seznam najdete v profilech níže.',
    de: 'Aufsätze und Konferenzbeiträge. Die vollständige Liste findet sich in den Profilen unten.'
  },
  'publications.originalNote': {
    ru: 'Библиографические описания приводятся на языке оригинала.',
    en: 'Bibliographic records are given in the original language (Russian).',
    cs: 'Bibliografické záznamy jsou uvedeny v původním jazyce (ruštině).',
    de: 'Die bibliografischen Angaben stehen in der Originalsprache (Russisch).'
  },
  'publications.filterYears': {
    ru: 'Фильтр по годам',
    en: 'Filter by year',
    cs: 'Filtr podle roku',
    de: 'Filter nach Jahr'
  },
  'publications.pending': { ru: 'в печати', en: 'in press', cs: 'v tisku', de: 'im Druck' },
  'publications.read': { ru: 'Читать →', en: 'Read →', cs: 'Číst →', de: 'Lesen →' },

  // --- Инициативы ---
  'initiatives.title': {
    ru: 'Инклюзивные инициативы',
    en: 'Inclusive initiatives',
    cs: 'Inkluzivní iniciativy',
    de: 'Inklusive Initiativen'
  },
  'initiatives.allPublications': {
    ru: 'Все публикации →',
    en: 'All publications →',
    cs: 'Všechny publikace →',
    de: 'Alle Publikationen →'
  },

  // --- Галерея ---
  'gallery.title': { ru: 'Галерея', en: 'Gallery', cs: 'Galerie', de: 'Galerie' },
  'gallery.subtitle': {
    ru: 'Конференции и доклады, робототехника, инклюзивные занятия и командная работа.',
    en: 'Conferences and talks, robotics, inclusive classes and teamwork.',
    cs: 'Konference a přednášky, robotika, inkluzivní výuka a týmová práce.',
    de: 'Konferenzen und Vorträge, Robotik, inklusive Kurse und Teamarbeit.'
  },
  'gallery.filter': {
    ru: 'Фильтр галереи',
    en: 'Gallery filter',
    cs: 'Filtr galerie',
    de: 'Galeriefilter'
  },
  'gallery.close': { ru: 'Закрыть', en: 'Close', cs: 'Zavřít', de: 'Schließen' },
  'gallery.prev': {
    ru: 'Предыдущее фото',
    en: 'Previous photo',
    cs: 'Předchozí fotografie',
    de: 'Vorheriges Foto'
  },
  'gallery.next': {
    ru: 'Следующее фото',
    en: 'Next photo',
    cs: 'Další fotografie',
    de: 'Nächstes Foto'
  },

  // --- Контакты ---
  'contacts.title': { ru: 'Контакты', en: 'Contacts', cs: 'Kontakty', de: 'Kontakt' },
  'contacts.writeTelegram': {
    ru: 'Написать в Telegram',
    en: 'Message on Telegram',
    cs: 'Napsat na Telegramu',
    de: 'Per Telegram schreiben'
  },
  'contacts.writeVk': {
    ru: 'Написать во ВКонтакте',
    en: 'Message on VKontakte',
    cs: 'Napsat na VKontakte',
    de: 'Per VKontakte schreiben'
  },
  'contacts.writeMail': {
    ru: 'Написать на почту',
    en: 'Send an email',
    cs: 'Poslat e-mail',
    de: 'E-Mail schreiben'
  },
  'contacts.mail': { ru: 'Почта', en: 'Email', cs: 'E-mail', de: 'E-Mail' },
  'contacts.phone': { ru: 'Телефон', en: 'Phone', cs: 'Telefon', de: 'Telefon' },
  'contacts.phoneNote': {
    ru: 'Звонки и мессенджеры',
    en: 'Calls and messengers',
    cs: 'Hovory a messengery',
    de: 'Anrufe und Messenger'
  },
  'contacts.where': { ru: 'Где я', en: 'Based in', cs: 'Kde jsem', de: 'Standort' },
  'contacts.profiles': { ru: 'Профили', en: 'Profiles', cs: 'Profily', de: 'Profile' },

  // --- Резюме ---
  'resume.title': { ru: 'Резюме', en: 'CV', cs: 'Životopis', de: 'Lebenslauf' },
  'resume.hint': {
    ru: 'Резюме собрано из данных сайта. Кнопка открывает печать — в диалоге выберите «Сохранить в PDF».',
    en: 'This CV is assembled from the site content. The button opens the print dialog — choose “Save as PDF”.',
    cs: 'Životopis je sestaven z obsahu webu. Tlačítko otevře tisk — v dialogu zvolte „Uložit jako PDF“.',
    de: 'Der Lebenslauf wird aus den Inhalten der Website erzeugt. Die Schaltfläche öffnet den Druckdialog — dort „Als PDF speichern“ wählen.'
  },
  'resume.download': {
    ru: 'Скачать PDF',
    en: 'Download PDF',
    cs: 'Stáhnout PDF',
    de: 'PDF herunterladen'
  },
  'resume.about': { ru: 'О себе', en: 'Profile', cs: 'O mně', de: 'Profil' },
  'resume.experience': { ru: 'Опыт', en: 'Experience', cs: 'Praxe', de: 'Berufserfahrung' },
  'resume.education': { ru: 'Образование', en: 'Education', cs: 'Vzdělání', de: 'Ausbildung' },
  'resume.educationExtra': {
    ru: 'Дополнительное образование',
    en: 'Further training',
    cs: 'Další vzdělávání',
    de: 'Weiterbildung'
  },
  'resume.roles': {
    ru: 'Проектные роли и наставничество',
    en: 'Project roles and mentoring',
    cs: 'Projektové role a mentoring',
    de: 'Projektrollen und Mentoring'
  },
  'resume.achievements': {
    ru: 'Ключевые достижения',
    en: 'Key achievements',
    cs: 'Klíčová ocenění',
    de: 'Wichtigste Auszeichnungen'
  },
  'resume.publications': {
    ru: 'Публикации',
    en: 'Publications',
    cs: 'Publikace',
    de: 'Publikationen'
  },
  'resume.skills': { ru: 'Навыки', en: 'Skills', cs: 'Dovednosti', de: 'Fähigkeiten' },
  'resume.languages': { ru: 'Языки', en: 'Languages', cs: 'Jazyky', de: 'Sprachen' },
  'resume.thesis': {
    ru: 'Выпускная работа:',
    en: 'Thesis:',
    cs: 'Závěrečná práce:',
    de: 'Abschlussarbeit:'
  }
}

export const t = (key: string, current = locale.value): string => {
  const entry = messages[key]
  if (!entry) return key
  return pick(entry, current)
}

/** Реактивный перевод для шаблонов. */
export const useT = () => computed(() => (key: string) => t(key, locale.value))

/**
 * Склонение количественных форм.
 * Русский и чешский — три формы, английский и немецкий — две.
 */
const plural = (count: number, forms: Record<Locale, string[]>, current: Locale): string => {
  const variants = forms[current] ?? forms.en
  const mod10 = count % 10
  const mod100 = count % 100

  let index = variants.length - 1

  if (current === 'ru') {
    if (mod10 === 1 && mod100 !== 11) index = 0
    else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) index = 1
    else index = 2
  } else if (current === 'cs') {
    if (count === 1) index = 0
    else if (count >= 2 && count <= 4) index = 1
    else index = 2
  } else {
    index = count === 1 ? 0 : 1
  }

  return `${count} ${variants[index]}`
}

export const worksCount = (count: number, current = locale.value): string =>
  plural(
    count,
    {
      ru: ['работа', 'работы', 'работ'],
      en: ['entry', 'entries'],
      cs: ['práce', 'práce', 'prací'],
      de: ['Eintrag', 'Einträge']
    },
    current
  )

export const publicationsCount = (count: number, current = locale.value): string =>
  plural(
    count,
    {
      ru: ['публикация', 'публикации', 'публикаций'],
      en: ['publication', 'publications'],
      cs: ['publikace', 'publikace', 'publikací'],
      de: ['Publikation', 'Publikationen']
    },
    current
  )
