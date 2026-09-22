import { type L, type Locale, pick } from '@/i18n/core'

export interface InitiativeCard {
  id: string
  icon: string
  title: string
  period?: string
  role?: string
  description: string
  facts?: string[]
  images?: string[]
}

const introData: L = {
  ru:
    'Работа по доступности: перевод и адаптация технических материалов на русский жестовый язык, ' +
    'доступная информационная среда и занятия для школьников и студентов с нарушениями слуха.',
  en:
    'Accessibility work: interpreting and adapting technical material into Russian Sign Language, ' +
    'building an accessible information environment and teaching deaf and hard-of-hearing students.',
  cs:
    'Práce na přístupnosti: tlumočení a adaptace technických materiálů do ruského znakového jazyka, ' +
    'přístupné informační prostředí a výuka pro neslyšící žáky a studenty.',
  de:
    'Arbeit an Barrierefreiheit: Dolmetschen und Anpassung technischer Materialien in russische ' +
    'Gebärdensprache, barrierefreie Informationsumgebung und Unterricht für gehörlose Lernende.'
}

export const getInitiativesIntro = (locale: Locale): string => pick(introData, locale)

type InitiativeSource = {
  id: string
  icon: string
  images?: string[]
  title: L
  period?: L
  role?: L
  description: L
  facts?: L<string[]>
}

const initiativesData: InitiativeSource[] = [
  {
    id: 'rsl-lectures',
    icon: 'hand',
    images: ['gallery/more/035.jpg'],
    title: {
      ru: 'Адаптация лекций на РЖЯ',
      en: 'Lectures adapted into Russian Sign Language',
      cs: 'Přednášky adaptované do ruského znakového jazyka',
      de: 'Vorlesungen in russischer Gebärdensprache'
    },
    period: { ru: '2024 — 2025', en: '2024 — 2025', cs: '2024 — 2025', de: '2024 — 2025' },
    role: {
      ru: 'Переводчик и методист',
      en: 'Interpreter and methodologist',
      cs: 'Tlumočník a metodik',
      de: 'Dolmetscher und Methodiker'
    },
    description: {
      ru:
        'Адаптация и перевод технических лекций на русский жестовый язык — преимущественно ' +
        'по авиации и робототехнике.',
      en:
        'Adapting and interpreting technical lectures into Russian Sign Language, mostly on ' +
        'aviation and robotics.',
      cs:
        'Adaptace a tlumočení technických přednášek do ruského znakového jazyka, převážně ' +
        'o letectví a robotice.',
      de:
        'Anpassung und Dolmetschen technischer Vorlesungen in russische Gebärdensprache, ' +
        'vor allem zu Luftfahrt und Robotik.'
    },
    facts: {
      ru: ['27 адаптированных лекций'],
      en: ['27 adapted lectures'],
      cs: ['27 adaptovaných přednášek'],
      de: ['27 angepasste Vorlesungen']
    }
  },
  {
    id: 'ano',
    icon: 'globe',
    images: ['gallery/ano-team-meeting.jpg'],
    title: {
      ru: 'АНО «Открытые Перспективы»',
      en: 'Open Perspectives non-profit',
      cs: 'Nezisková organizace Otevřené perspektivy',
      de: 'Gemeinnützige Organisation „Offene Perspektiven“'
    },
    role: {
      ru: 'Руководитель направления доступной информационной среды',
      en: 'Head of the accessible information environment programme',
      cs: 'Vedoucí programu přístupného informačního prostředí',
      de: 'Leiter des Programms für barrierefreie Informationsumgebung'
    },
    description: {
      ru:
        'Адаптация интерфейсов, переводы и обеспечение доступности информации ' +
        'для лиц с ограниченными возможностями здоровья.',
      en:
        'Adapting interfaces, interpreting and making information accessible to people ' +
        'with disabilities.',
      cs:
        'Úpravy rozhraní, tlumočení a zpřístupňování informací osobám se zdravotním postižením.',
      de:
        'Anpassung von Oberflächen, Dolmetschen und barrierefreie Bereitstellung von ' +
        'Informationen für Menschen mit Behinderungen.'
    }
  },
  {
    id: 'grant',
    icon: 'coins',
    images: ['gallery/inclusive-robotics-class.jpg'],
    title: {
      ru: 'Грант Росмолодёжи',
      en: 'Rosmolodezh grant',
      cs: 'Grant Rosmoloděž',
      de: 'Rosmolodjosch-Förderung'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    role: {
      ru: 'Руководитель команды, переводчик РЖЯ',
      en: 'Team lead and sign language interpreter',
      cs: 'Vedoucí týmu a tlumočník znakového jazyka',
      de: 'Teamleiter und Gebärdensprachdolmetscher'
    },
    description: {
      ru:
        'Победа в грантовом конкурсе и реализация цикла лекций по робототехнике ' +
        'на русском жестовом языке.',
      en:
        'Winning the grant competition and delivering a series of robotics lectures ' +
        'in Russian Sign Language.',
      cs:
        'Vítězství v grantové soutěži a realizace cyklu přednášek o robotice v ruském ' +
        'znakovém jazyce.',
      de:
        'Sieg im Förderwettbewerb und Umsetzung einer Vorlesungsreihe zur Robotik ' +
        'in russischer Gebärdensprache.'
    },
    facts: {
      ru: ['300 000 ₽'],
      en: ['RUB 300,000'],
      cs: ['300 000 ₽'],
      de: ['300 000 ₽']
    }
  },
  {
    id: 'brc-course',
    icon: 'book',
    images: ['gallery/more/036.jpg'],
    title: {
      ru: 'Инклюзивный курс BRC «Автоматизированные системы управления»',
      en: 'Inclusive BRC course “Automated control systems”',
      cs: 'Inkluzivní kurz BRC „Automatizované řídicí systémy“',
      de: 'Inklusiver BRC-Kurs „Automatisierte Steuerungssysteme“'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    description: {
      ru:
        'Адаптация учебного курса и его сопровождение для студентов с нарушениями слуха: ' +
        'перевод материалов и занятий на РЖЯ.',
      en:
        'Adapting and supporting the course for students with hearing impairments: materials ' +
        'and classes interpreted into Russian Sign Language.',
      cs:
        'Adaptace a doprovod kurzu pro studenty se sluchovým postižením: materiály a výuka ' +
        'tlumočené do ruského znakového jazyka.',
      de:
        'Anpassung und Begleitung des Kurses für hörbeeinträchtigte Studierende: Materialien ' +
        'und Lehrveranstaltungen in russischer Gebärdensprache.'
    }
  },
  {
    id: 'yakovlev-lecture',
    icon: 'plane',
    images: ['gallery/yakovlev-inclusive-lecture.jpg'],
    title: {
      ru: 'Инклюзивная лекция с ПАО «Яковлев»',
      en: 'Inclusive lecture with PJSC Yakovlev',
      cs: 'Inkluzivní přednáška s PJSC Jakovlev',
      de: 'Inklusive Vorlesung mit PJSC Jakowlew'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    description: {
      ru:
        'Лекция об авиастроении для студентов с нарушениями слуха с сопровождением ' +
        'на русском жестовом языке.',
      en:
        'A lecture on aircraft construction for students with hearing impairments, ' +
        'interpreted into Russian Sign Language.',
      cs:
        'Přednáška o letecké výrobě pro studenty se sluchovým postižením s tlumočením ' +
        'do ruského znakového jazyka.',
      de:
        'Vorlesung zum Flugzeugbau für hörbeeinträchtigte Studierende mit Dolmetschung ' +
        'in russische Gebärdensprache.'
    }
  },
  {
    id: 'summer-intensives',
    icon: 'sun',
    images: ['gallery/summer-intensive.jpg'],
    title: {
      ru: 'Летние интенсивы для глухих школьников',
      en: 'Summer intensives for deaf school students',
      cs: 'Letní intenzivní kurzy pro neslyšící žáky',
      de: 'Sommerintensivkurse für gehörlose Schülerinnen und Schüler'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    description: {
      ru: 'Занятия по робототехнике и инженерным направлениям для глухих и слабослышащих школьников.',
      en: 'Robotics and engineering classes for deaf and hard-of-hearing school students.',
      cs: 'Výuka robotiky a technických oborů pro neslyšící a nedoslýchavé žáky.',
      de: 'Unterricht in Robotik und Technik für gehörlose und schwerhörige Schülerinnen und Schüler.'
    }
  }
]

export const getInitiatives = (locale: Locale): InitiativeCard[] =>
  initiativesData.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: pick(item.title, locale),
    period: item.period ? pick(item.period, locale) : undefined,
    role: item.role ? pick(item.role, locale) : undefined,
    description: pick(item.description, locale),
    facts: item.facts ? pick(item.facts, locale) : undefined,
    images: item.images
  }))

const researchData = {
  title: {
    ru: 'Научная работа по теме',
    en: 'Related research',
    cs: 'Související výzkum',
    de: 'Forschung zum Thema'
  } as L,
  description: {
    ru: 'Новых проектов в 2025—2026 годах не запускалось: работа продолжается в научном поле.',
    en: 'No new projects were launched in 2025—2026; the work continues as research.',
    cs: 'V letech 2025—2026 nebyly spuštěny nové projekty, práce pokračuje ve vědecké rovině.',
    de: 'In den Jahren 2025—2026 wurden keine neuen Projekte gestartet; die Arbeit läuft als Forschung weiter.'
  } as L,
  items: {
    ru: [
      'Доклад «Интеграция глухих в нефтегазовую отрасль» — Всероссийская научно-техническая ' +
        'конференция «Актуальные проблемы развития нефтегазового комплекса России», 2026. ' +
        'Включён в сборник конференции.'
    ],
    en: [
      'Talk “Integrating deaf people into the oil and gas industry” — All-Russian scientific ' +
        'and technical conference on current issues of the Russian oil and gas sector, 2026. ' +
        'Included in the conference proceedings.'
    ],
    cs: [
      'Příspěvek „Integrace neslyšících do ropného a plynárenského odvětví“ — celoruská ' +
        'vědeckotechnická konference o aktuálních otázkách ruské ropné a plynárenské ' +
        'soustavy, 2026. Zařazen do sborníku.'
    ],
    de: [
      'Vortrag „Integration gehörloser Menschen in die Öl- und Gasbranche“ — gesamtrussische ' +
        'wissenschaftlich-technische Konferenz zu aktuellen Fragen der russischen Öl- und ' +
        'Gaswirtschaft, 2026. Im Tagungsband enthalten.'
    ]
  } as L<string[]>
}

export const getInitiativesResearch = (locale: Locale) => ({
  title: pick(researchData.title, locale),
  description: pick(researchData.description, locale),
  items: pick(researchData.items, locale)
})
