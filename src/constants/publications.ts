import { type L, type Locale, pick } from '@/i18n/core'
import type { PublicationItem, PublicationType } from '../types'

/** Профили, где лежит полный перечень работ. */
export const publicationProfiles = [
  {
    name: 'eLibrary (РИНЦ)',
    handle: 'Author ID 1306552',
    url: 'https://elibrary.ru/author_items.asp?authorid=1306552'
  },
  {
    name: 'ORCID',
    handle: '0009-0006-4805-3701',
    url: 'https://orcid.org/0009-0006-4805-3701'
  }
]

/** Теги тематик — единственное, что переводится в карточке публикации. */
const topic = {
  ontology: {
    ru: 'онтологии',
    en: 'ontologies',
    cs: 'ontologie',
    de: 'Ontologien'
  } as L,
  lng: { ru: 'СПГ', en: 'LNG', cs: 'LNG', de: 'LNG' } as L,
  lifecycle: {
    ru: 'жизненный цикл',
    en: 'life cycle',
    cs: 'životní cyklus',
    de: 'Lebenszyklus'
  } as L,
  robotics: { ru: 'робототехника', en: 'robotics', cs: 'robotika', de: 'Robotik' } as L,
  kdme: { ru: 'КДМЕ-23', en: 'KDME-23', cs: 'KDME-23', de: 'KDME-23' } as L,
  automation: {
    ru: 'автоматизация',
    en: 'automation',
    cs: 'automatizace',
    de: 'Automatisierung'
  } as L,
  maintenance: {
    ru: 'ТОиР',
    en: 'maintenance',
    cs: 'údržba',
    de: 'Instandhaltung'
  } as L,
  predictive: {
    ru: 'предиктивное ТОиР',
    en: 'predictive maintenance',
    cs: 'prediktivní údržba',
    de: 'vorausschauende Instandhaltung'
  } as L,
  design: { ru: 'проектирование', en: 'design', cs: 'navrhování', de: 'Konstruktion' } as L,
  calculations: { ru: 'расчёты', en: 'analysis', cs: 'výpočty', de: 'Berechnungen' } as L,
  strength: {
    ru: 'расчёты прочности',
    en: 'structural analysis',
    cs: 'pevnostní výpočty',
    de: 'Festigkeitsberechnung'
  } as L,
  knowledge: {
    ru: 'управление знаниями',
    en: 'knowledge management',
    cs: 'správa znalostí',
    de: 'Wissensmanagement'
  } as L,
  aerospace: {
    ru: 'авиакосмическая отрасль',
    en: 'aerospace',
    cs: 'letecký a kosmický průmysl',
    de: 'Luft- und Raumfahrt'
  } as L,
  sustainable: {
    ru: 'устойчивое развитие',
    en: 'sustainable development',
    cs: 'udržitelný rozvoj',
    de: 'nachhaltige Entwicklung'
  } as L,
  accessibility: {
    ru: 'доступная среда',
    en: 'accessibility',
    cs: 'přístupnost',
    de: 'Barrierefreiheit'
  } as L,
  oilgas: {
    ru: 'нефтегазовая отрасль',
    en: 'oil and gas industry',
    cs: 'ropný a plynárenský průmysl',
    de: 'Öl- und Gasindustrie'
  } as L
}

const note = {
  fullText: {
    ru: 'На eLibrary доступен полный текст',
    en: 'Full text available on eLibrary',
    cs: 'Plný text je dostupný na eLibrary',
    de: 'Volltext auf eLibrary verfügbar'
  } as L,
  abstract: { ru: 'Тезисы', en: 'Abstract', cs: 'Abstrakt', de: 'Kurzfassung' } as L,
  paper: { ru: 'Статья', en: 'Full paper', cs: 'Článek', de: 'Aufsatz' } as L,
  inPress: {
    ru: 'Доклад включён в сборник, на eLibrary пока не размещён',
    en: 'Included in the conference proceedings, not yet listed on eLibrary',
    cs: 'Zařazeno do sborníku, zatím není na eLibrary',
    de: 'Im Tagungsband enthalten, auf eLibrary noch nicht gelistet'
  } as L
}

type PublicationSource = Omit<PublicationItem, 'topics' | 'note'> & {
  topics?: L[]
  note?: L
}

/**
 * Перечень публикаций по выгрузке из eLibrary.
 * Библиографические описания приводятся на языке оригинала.
 */
const publicationsData: PublicationSource[] = [
  // --- 2026, в печати ---
  {
    id: 'deaf-oilgas-2026',
    title: 'Интеграция глухих в нефтегазовую отрасль',
    authors: 'Комаров Д. А.',
    year: '2026',
    type: 'conference' as PublicationType,
    source:
      'Всероссийская научно-техническая конференция «Актуальные проблемы развития ' +
      'нефтегазового комплекса России»',
    city: 'Москва',
    topics: [topic.accessibility, topic.oilgas],
    pending: true,
    note: note.inPress
  },

  // --- 2025 ---
  {
    id: 'lng-ontology-zero-lifecycle-2025',
    title:
      'Применение онтологий и концепции «нулевого» жизненного цикла при проектировании ' +
      'оборудования для СПГ',
    authors: 'Комаров Д. А., Матвеев С. С.',
    year: '2025',
    type: 'conference',
    source:
      'Сжиженный природный газ: проблемы и перспективы. Тезисы докладов V Всероссийской ' +
      'научно-практической конференции, посвящённой 95-летию Губкинского университета',
    city: 'Москва',
    pages: 'С. 152–154',
    topics: [topic.ontology, topic.lng, topic.lifecycle]
  },
  {
    id: 'kdme23-inspection-2025',
    title:
      'Разработка и исследование многоцелевого мобильного робототехнического комплекса ' +
      'КДМЕ23 для автоматизации производственной инспекции',
    authors: 'Морозов Е. П., Комаров Д. А.',
    year: '2025',
    type: 'conference',
    source:
      'Комплексная автоматизация проектирования и производства (КАПП(М)-2025). ' +
      'Материалы III молодёжной конференции с международным участием',
    city: 'Москва',
    pages: 'С. 157–167',
    topics: [topic.robotics, topic.kdme, topic.automation]
  },
  {
    id: 'lng-critical-equipment-2025',
    title:
      'Критическое оборудование СПГ-заводов и современные подходы к его техническому ' +
      'обслуживанию и ремонту',
    authors: 'Комаров Д. А., Матвеев С. С.',
    year: '2025',
    type: 'conference',
    source:
      'Актуальные проблемы нефти и газа. Сборник трудов VIII Всероссийской молодёжной ' +
      'научной конференции с международным участием',
    city: 'Москва',
    pages: 'С. 233–236',
    topics: [topic.lng, topic.maintenance],
    note: note.fullText
  },
  {
    id: 'lng-predictive-maintenance-2025',
    title:
      'Применение онтологического моделирования в системе предиктивного технического ' +
      'обслуживания и ремонта (ТОиР) оборудования СПГ-заводов',
    authors: 'Комаров Д. А., Матвеев С. С.',
    year: '2025',
    type: 'conference',
    source:
      'Новые технологии в газовой промышленности (газ, нефть, энергетика). Тезисы докладов ' +
      'XVI Всероссийской конференции молодых учёных, специалистов и студентов',
    city: 'Москва',
    pages: 'С. 305–306',
    topics: [topic.ontology, topic.predictive, topic.lng]
  },
  {
    id: 'kdme23-drive-abstract-2025',
    title: 'Проектирование привода мобильного робота КДМЕ23',
    authors: 'Комаров Д. А., Морозов Е. П.',
    year: '2025',
    type: 'conference',
    source:
      'Нефть и газ — 2025. Тезисы докладов 79-й Международной молодёжной научной конференции',
    city: 'Москва',
    pages: 'С. 529–530',
    topics: [topic.robotics, topic.kdme],
    note: note.abstract
  },
  {
    id: 'kdme23-drive-paper-2025',
    title: 'Проектирование привода мобильного робота КДМЕ23',
    authors: 'Комаров Д. А., Морозов Е. П.',
    year: '2025',
    type: 'conference',
    source: 'Нефть и газ — 2025. Сборник трудов 79-й Международной молодёжной научной конференции',
    city: 'Москва',
    pages: 'С. 158–167',
    topics: [topic.robotics, topic.kdme],
    note: note.paper
  },
  {
    id: 'kdme23-inverse-tasks-2025',
    title:
      'КДМЕ23 — новые подходы к проектированию многоцелевых робототехнических комплексов ' +
      'с помощью обратных задач',
    authors: 'Комаров Д. А., Морозов Е. П.',
    year: '2025',
    type: 'conference',
    source:
      'Молодёжь. Техника. Космос. Труды XVII Международной молодёжной научно-технической ' +
      'конференции, приуроченной к 150-летию со дня основания Ремесленного училища ' +
      'цесаревича Николая. В 4 т.',
    city: 'Санкт-Петербург',
    pages: 'С. 102–108',
    topics: [topic.robotics, topic.kdme, topic.design]
  },
  {
    id: 'aerospace-knowledge-2025',
    title: 'Управление знаниями авиакосмических предприятий',
    authors: 'Комаров Д. А.',
    year: '2025',
    type: 'conference',
    source:
      'Молодёжь. Техника. Космос. Труды XVII Международной молодёжной научно-технической ' +
      'конференции, приуроченной к 150-летию со дня основания Ремесленного училища ' +
      'цесаревича Николая. В 4 т.',
    city: 'Санкт-Петербург',
    pages: 'С. 232–236',
    topics: [topic.knowledge, topic.aerospace]
  },

  // --- 2024 ---
  {
    id: 'kdme23-design-2024',
    title: 'Проектирование многоцелевого робототехнического комплекса КДМЕ23',
    authors: 'Комаров Д. А., Морозов Е. П.',
    year: '2024',
    type: 'conference',
    source: 'Сборник избранных тезисов работ лауреатов II Весенней научной сессии СНО НИЯУ МИФИ',
    city: 'Москва',
    pages: 'С. 13–14',
    topics: [topic.robotics, topic.kdme]
  },
  {
    id: 'kdme23-christie-2024',
    title:
      'Проектирование и первичный расчёт многоцелевого мобильного робототехнического ' +
      'комплекса КДМЕ-23 — подвеска Кристи',
    authors: 'Морозов Е. П., Комаров Д. А.',
    year: '2024',
    type: 'conference',
    source: 'Виттевские чтения — 2024. Материалы XXIV Международного конгресса молодой науки',
    city: 'Москва',
    pages: 'С. 1707–1720',
    topics: [topic.robotics, topic.kdme, topic.calculations]
  },
  {
    id: 'kdme23-primary-calc-2024',
    title:
      'Проектирование и первичный расчёт многоцелевого мобильного робототехнического ' +
      'комплекса КДМЕ-23',
    authors: 'Морозов Е. П., Комаров Д. А., Сащенко Д. В.',
    year: '2024',
    type: 'conference',
    source:
      'Вопросы технических и физико-математических наук в свете современных исследований. ' +
      'Сборник статей по материалам LXXII Международной научно-практической конференции',
    city: 'Новосибирск',
    pages: 'С. 29–63',
    topics: [topic.robotics, topic.kdme, topic.calculations]
  },
  {
    id: 'portal-truss-strength-2024',
    title:
      'Расчёт на прочность портально-ферменной конструкции для перевозки крупногабаритных грузов',
    authors: 'Беличенко Д. А., Комаров Д. А., Морозов Е. П.',
    year: '2024',
    type: 'conference',
    source:
      'Студенческая научная весна. Сборник тезисов докладов Всероссийской студенческой ' +
      'конференции, посвящённой 110-летию со дня рождения академика В. Н. Челомея',
    city: 'Москва',
    pages: 'С. 449–450',
    topics: [topic.strength]
  },
  {
    id: 'robotics-sustainable-2024',
    title: 'Роль технологий робототехники в достижении целей устойчивого развития',
    authors: 'Кузнецов А. А., Комаров Д. А.',
    year: '2024',
    type: 'journal',
    source: 'Наука и бизнес: пути развития. 2024. № 12 (162)',
    pages: 'С. 181–184',
    topics: [topic.robotics, topic.sustainable]
  }
]

export const getPublications = (locale: Locale): PublicationItem[] =>
  publicationsData.map((item) => ({
    ...item,
    topics: item.topics?.map((value) => pick(value, locale)),
    note: item.note ? pick(item.note, locale) : undefined
  }))

/** Годы для фильтра — по убыванию. */
export const publicationYears = Array.from(
  new Set(publicationsData.map((item) => item.year))
).sort((a, b) => Number(b) - Number(a))

/** Количество работ — для карточек проектов и резюме. */
export const publicationsCountTotal = publicationsData.length

/** Идентификаторы публикаций проекта — нужны карточке проекта. */
export const publicationIds = publicationsData.map((item) => item.id)
