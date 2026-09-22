import { type L, type Locale, pick } from '@/i18n/core'
import type { EducationItem, ExperienceItem, LanguageItem, SkillGroup } from '../types'

// ─────────────────────────── Профиль ───────────────────────────

const profileData = {
  name: {
    ru: 'Дмитрий Комаров',
    en: 'Dmitry Komarov',
    cs: 'Dmitry Komarov',
    de: 'Dmitry Komarov'
  } as L,
  headline: {
    ru: 'Учёный в области доступных знаний',
    en: 'Researcher in accessible knowledge',
    cs: 'Vědec v oblasti přístupných znalostí',
    de: 'Wissenschaftler für zugängliches Wissen'
  } as L,
  summary: {
    ru:
      'Онтологическое обеспечение жизненного цикла объектов ТЭК, цифровизация эксплуатации, ' +
      'робототехника и доступная информационная среда.',
    en:
      'Ontology support for the life cycle of energy facilities, digitalisation of operation, ' +
      'robotics and an accessible information environment.',
    cs:
      'Ontologická podpora životního cyklu energetických objektů, digitalizace provozu, ' +
      'robotika a přístupné informační prostředí.',
    de:
      'Ontologische Unterstützung des Lebenszyklus von Energieanlagen, Digitalisierung des Betriebs, ' +
      'Robotik und barrierefreie Informationsumgebung.'
  } as L,
  quote: {
    ru:
      'Технологическое развитие — это возможности не только для бизнеса и суверенитета, ' +
      'но и для расширения возможностей каждого человека, независимо от ограничений, ' +
      'которые даны нам от природы.',
    en:
      'Technological progress creates opportunities not only for business and sovereignty, ' +
      'but also for expanding what every person can do, whatever limitations nature has given them.',
    cs:
      'Technologický rozvoj přináší příležitosti nejen pro byznys a suverenitu, ' +
      'ale také rozšiřuje možnosti každého člověka bez ohledu na omezení, která mu dala příroda.',
    de:
      'Technologische Entwicklung schafft Chancen nicht nur für Wirtschaft und Souveränität, ' +
      'sondern erweitert auch die Möglichkeiten jedes Menschen — unabhängig von den Grenzen, ' +
      'die ihm die Natur gesetzt hat.'
  } as L,
  location: { ru: 'Москва', en: 'Moscow', cs: 'Moskva', de: 'Moskau' } as L,
  bio: {
    ru: [
      'Я учёный, инженер, переводчик русского жестового языка, руководитель проектов, активист и патриот.',
      'Меня можно называть как угодно, но моё целеполагание созидательное: в основном это доступность ' +
        'для лиц с ОВЗ, а также технические направления по разработке и эксплуатации нефтяных месторождений.'
    ],
    en: [
      'I am a researcher, an engineer, a Russian Sign Language interpreter, a project lead, an activist and a patriot.',
      'Call it what you like: my goals are constructive ones — mainly accessibility for people with disabilities, ' +
        'and the engineering side of developing and operating oil fields.'
    ],
    cs: [
      'Jsem vědec, inženýr, tlumočník ruského znakového jazyka, vedoucí projektů, aktivista a vlastenec.',
      'Můžete to nazvat jakkoli: mé cíle jsou tvořivé — především přístupnost pro osoby se zdravotním ' +
        'postižením a technické obory spojené s rozvojem a provozem ropných ložisek.'
    ],
    de: [
      'Ich bin Wissenschaftler, Ingenieur, Dolmetscher für die russische Gebärdensprache, Projektleiter, Aktivist und Patriot.',
      'Nennen Sie es, wie Sie wollen: Meine Ziele sind konstruktiv — vor allem Barrierefreiheit für Menschen ' +
        'mit Behinderungen sowie die technische Entwicklung und der Betrieb von Erdölfeldern.'
    ]
  } as L<string[]>
}

export const getProfile = (locale: Locale) => ({
  name: pick(profileData.name, locale),
  headline: pick(profileData.headline, locale),
  summary: pick(profileData.summary, locale),
  quote: pick(profileData.quote, locale),
  location: pick(profileData.location, locale),
  bio: pick(profileData.bio, locale)
})

// ─────────────────────────── Навыки ───────────────────────────

const skillGroupsData: { id: string; title: L; skills: L<string[]> }[] = [
  {
    id: 'knowledge',
    title: {
      ru: 'Онтологии и знания',
      en: 'Ontologies and knowledge',
      cs: 'Ontologie a znalosti',
      de: 'Ontologien und Wissen'
    },
    skills: {
      ru: [
        'Онтологии и OWL',
        'SPARQL',
        'Protégé',
        'Версионирование онтологических моделей',
        'Управление знаниями в ТЭК',
        'ИИ в инженерных контурах',
        'Машинное обучение',
        'Базы данных',
        'Python'
      ],
      en: [
        'Ontologies and OWL',
        'SPARQL',
        'Protégé',
        'Versioning of ontology models',
        'Knowledge management in the energy sector',
        'AI in engineering workflows',
        'Machine learning',
        'Databases',
        'Python'
      ],
      cs: [
        'Ontologie a OWL',
        'SPARQL',
        'Protégé',
        'Verzování ontologických modelů',
        'Správa znalostí v energetice',
        'AI v inženýrských procesech',
        'Strojové učení',
        'Databáze',
        'Python'
      ],
      de: [
        'Ontologien und OWL',
        'SPARQL',
        'Protégé',
        'Versionierung von Ontologiemodellen',
        'Wissensmanagement in der Energiewirtschaft',
        'KI in Engineering-Prozessen',
        'Maschinelles Lernen',
        'Datenbanken',
        'Python'
      ]
    }
  },
  {
    id: 'engineering',
    title: {
      ru: 'Инженерия и эксплуатация',
      en: 'Engineering and operation',
      cs: 'Inženýrství a provoz',
      de: 'Technik und Betrieb'
    },
    skills: {
      ru: [
        'САПР и КОМПАС-3D',
        'SolidWorks',
        'ANSYS',
        'Расчёты прочности',
        'Цифровизация ТОиР',
        'Предиктивное ТОиР',
        'Разработка робототехнических комплексов',
        '1С'
      ],
      en: [
        'CAD and KOMPAS-3D',
        'SolidWorks',
        'ANSYS',
        'Structural analysis',
        'Digitalisation of maintenance and repair',
        'Predictive maintenance',
        'Development of robotic systems',
        '1C'
      ],
      cs: [
        'CAD a KOMPAS-3D',
        'SolidWorks',
        'ANSYS',
        'Pevnostní výpočty',
        'Digitalizace údržby a oprav',
        'Prediktivní údržba',
        'Vývoj robotických systémů',
        '1C'
      ],
      de: [
        'CAD und KOMPAS-3D',
        'SolidWorks',
        'ANSYS',
        'Festigkeitsberechnungen',
        'Digitalisierung von Wartung und Instandhaltung',
        'Vorausschauende Instandhaltung',
        'Entwicklung robotischer Systeme',
        '1C'
      ]
    }
  },
  {
    id: 'product',
    title: {
      ru: 'Цифровые продукты',
      en: 'Digital products',
      cs: 'Digitální produkty',
      de: 'Digitale Produkte'
    },
    skills: {
      ru: [
        'Vue.js / TypeScript',
        'Фронтенд-разработка',
        'UX/UI-дизайн',
        'Графический дизайн и брендинг'
      ],
      en: ['Vue.js / TypeScript', 'Front-end development', 'UX/UI design', 'Graphic design and branding'],
      cs: ['Vue.js / TypeScript', 'Front-end vývoj', 'UX/UI design', 'Grafický design a branding'],
      de: ['Vue.js / TypeScript', 'Frontend-Entwicklung', 'UX/UI-Design', 'Grafikdesign und Branding']
    }
  },
  {
    id: 'people',
    title: {
      ru: 'Люди и процессы',
      en: 'People and processes',
      cs: 'Lidé a procesy',
      de: 'Menschen und Prozesse'
    },
    skills: {
      ru: [
        'Руководство проектными командами',
        'Проектный менеджмент',
        'Наставничество',
        'Организация мероприятий и конференций',
        'Работа с абитуриентами и олимпиадами'
      ],
      en: [
        'Leading project teams',
        'Project management',
        'Mentoring',
        'Organising events and conferences',
        'Work with applicants and olympiads'
      ],
      cs: [
        'Vedení projektových týmů',
        'Projektový management',
        'Mentoring',
        'Organizace akcí a konferencí',
        'Práce s uchazeči a olympiádami'
      ],
      de: [
        'Leitung von Projektteams',
        'Projektmanagement',
        'Mentoring',
        'Organisation von Veranstaltungen und Konferenzen',
        'Arbeit mit Studienbewerbern und Olympiaden'
      ]
    }
  },
  {
    id: 'accessibility',
    title: {
      ru: 'Доступная среда',
      en: 'Accessibility',
      cs: 'Přístupnost',
      de: 'Barrierefreiheit'
    },
    skills: {
      ru: [
        'Перевод на РЖЯ',
        'Доступная информационная среда',
        'Адаптация интерфейсов для лиц с ОВЗ',
        'Инклюзивные технологии'
      ],
      en: [
        'Russian Sign Language interpreting',
        'Accessible information environment',
        'Adapting interfaces for people with disabilities',
        'Inclusive technologies'
      ],
      cs: [
        'Tlumočení do ruského znakového jazyka',
        'Přístupné informační prostředí',
        'Úprava rozhraní pro osoby se zdravotním postižením',
        'Inkluzivní technologie'
      ],
      de: [
        'Dolmetschen in russische Gebärdensprache',
        'Barrierefreie Informationsumgebung',
        'Anpassung von Oberflächen für Menschen mit Behinderungen',
        'Inklusive Technologien'
      ]
    }
  }
]

export const getSkillGroups = (locale: Locale): SkillGroup[] =>
  skillGroupsData.map((group) => ({
    id: group.id,
    title: pick(group.title, locale),
    skills: pick(group.skills, locale)
  }))

// ─────────────────────────── Языки ───────────────────────────

const languagesData: L[] = [
  { ru: 'Русский', en: 'Russian', cs: 'Ruština', de: 'Russisch' },
  { ru: 'Английский', en: 'English', cs: 'Angličtina', de: 'Englisch' },
  { ru: 'Чешский', en: 'Czech', cs: 'Čeština', de: 'Tschechisch' },
  { ru: 'Немецкий', en: 'German', cs: 'Němčina', de: 'Deutsch' },
  {
    ru: 'Русский жестовый язык',
    en: 'Russian Sign Language',
    cs: 'Ruský znakový jazyk',
    de: 'Russische Gebärdensprache'
  }
]

export const getLanguages = (locale: Locale): LanguageItem[] =>
  languagesData.map((item) => ({ name: pick(item, locale) }))

// ─────────────────────────── Образование ───────────────────────────

const educationData: {
  id: string
  status: EducationItem['status']
  level: L
  institution: L
  faculty?: L
  department?: L
  program: L
  period: L
  thesis?: L
}[] = [
  {
    id: 'master',
    status: 'current',
    level: {
      ru: 'Магистратура',
      en: "Master's degree",
      cs: 'Magisterské studium',
      de: 'Masterstudium'
    },
    institution: {
      ru: 'РГУ нефти и газа (НИУ) имени И. М. Губкина',
      en: 'Gubkin Russian State University of Oil and Gas',
      cs: 'Gubkinova ruská státní univerzita ropy a plynu',
      de: 'Gubkin-Universität für Erdöl und Erdgas, Moskau'
    },
    faculty: {
      ru: 'Факультет автоматики и вычислительной техники (АиВТ)',
      en: 'Faculty of Automation and Computer Engineering',
      cs: 'Fakulta automatizace a výpočetní techniky',
      de: 'Fakultät für Automatisierung und Rechentechnik'
    },
    department: {
      ru: 'Кафедра автоматизированных систем управления (АСУ)',
      en: 'Department of Automated Control Systems',
      cs: 'Katedra automatizovaných řídicích systémů',
      de: 'Lehrstuhl für automatisierte Steuerungssysteme'
    },
    program: {
      ru: '09.04.01 «Информатика и вычислительная техника»',
      en: '09.04.01 Computer Science and Engineering',
      cs: '09.04.01 Informatika a výpočetní technika',
      de: '09.04.01 Informatik und Rechentechnik'
    },
    period: {
      ru: '2025 — по настоящее время',
      en: '2025 — present',
      cs: '2025 — dosud',
      de: '2025 — heute'
    }
  },
  {
    id: 'bachelor',
    status: 'completed',
    level: {
      ru: 'Бакалавриат',
      en: "Bachelor's degree",
      cs: 'Bakalářské studium',
      de: 'Bachelorstudium'
    },
    institution: {
      ru: 'МГТУ имени Н. Э. Баумана',
      en: 'Bauman Moscow State Technical University',
      cs: 'Baumanova moskevská státní technická univerzita',
      de: 'Staatliche Technische Universität Moskau „Bauman“'
    },
    faculty: {
      ru: 'Факультет «Робототехника и комплексная автоматизация» (РК)',
      en: 'Faculty of Robotics and Integrated Automation',
      cs: 'Fakulta robotiky a komplexní automatizace',
      de: 'Fakultät für Robotik und integrierte Automatisierung'
    },
    department: {
      ru: 'Кафедра РК-9',
      en: 'Department RK-9',
      cs: 'Katedra RK-9',
      de: 'Lehrstuhl RK-9'
    },
    program: {
      ru: '15.03.04 «Автоматизация технологических процессов и производств»',
      en: '15.03.04 Automation of Technological Processes and Production',
      cs: '15.03.04 Automatizace technologických procesů a výroby',
      de: '15.03.04 Automatisierung technologischer Prozesse und Produktion'
    },
    period: { ru: '2021 — 2025', en: '2021 — 2025', cs: '2021 — 2025', de: '2021 — 2025' },
    thesis: {
      ru:
        'Разработка системы для систематизации корпоративных знаний ' +
        'в архиве научно-технической документации',
      en:
        'A system for structuring corporate knowledge in an archive ' +
        'of scientific and technical documentation',
      cs:
        'Systém pro strukturování firemních znalostí v archivu ' +
        'vědeckotechnické dokumentace',
      de:
        'System zur Strukturierung von Unternehmenswissen im Archiv ' +
        'wissenschaftlich-technischer Dokumentation'
    }
  },
  {
    id: 'phd',
    status: 'planned',
    level: {
      ru: 'Аспирантура',
      en: 'Doctoral studies',
      cs: 'Doktorské studium',
      de: 'Promotion'
    },
    institution: {
      ru: 'Планирую поступление',
      en: 'Planned',
      cs: 'Plánováno',
      de: 'Geplant'
    },
    program: {
      ru: 'Тема диссертации пока не определена',
      en: 'Dissertation topic not yet defined',
      cs: 'Téma disertace zatím není stanoveno',
      de: 'Dissertationsthema noch offen'
    },
    period: { ru: '—', en: '—', cs: '—', de: '—' }
  }
]

export const getEducation = (locale: Locale): EducationItem[] =>
  educationData.map((item) => ({
    id: item.id,
    status: item.status,
    level: pick(item.level, locale),
    institution: pick(item.institution, locale),
    faculty: item.faculty ? pick(item.faculty, locale) : undefined,
    department: item.department ? pick(item.department, locale) : undefined,
    program: pick(item.program, locale),
    period: pick(item.period, locale),
    thesis: item.thesis ? pick(item.thesis, locale) : undefined
  }))

const additionalEducationData: { title: L; org: L }[] = [
  {
    title: {
      ru: 'Фронтенд-разработка',
      en: 'Front-end development',
      cs: 'Front-end vývoj',
      de: 'Frontend-Entwicklung'
    },
    org: { ru: 'Нетология', en: 'Netology', cs: 'Netologia', de: 'Netologia' }
  },
  {
    title: { ru: 'UX/UI-дизайн', en: 'UX/UI design', cs: 'UX/UI design', de: 'UX/UI-Design' },
    org: {
      ru: 'Цифровая кафедра МГТУ имени Н. Э. Баумана',
      en: 'Digital Department, Bauman Moscow State Technical University',
      cs: 'Digitální katedra Baumanovy univerzity',
      de: 'Digitaler Lehrstuhl der Bauman-Universität'
    }
  },
  {
    title: {
      ru: 'Русский жестовый язык',
      en: 'Russian Sign Language',
      cs: 'Ruský znakový jazyk',
      de: 'Russische Gebärdensprache'
    },
    org: {
      ru: 'Подготовка переводчиков',
      en: 'Interpreter training',
      cs: 'Příprava tlumočníků',
      de: 'Dolmetscherausbildung'
    }
  },
  {
    title: {
      ru: 'Академия научного наставничества',
      en: 'Academy of Research Mentoring',
      cs: 'Akademie vědeckého mentoringu',
      de: 'Akademie für wissenschaftliches Mentoring'
    },
    org: {
      ru: 'Выпускник программы, 2024',
      en: 'Programme graduate, 2024',
      cs: 'Absolvent programu, 2024',
      de: 'Absolvent des Programms, 2024'
    }
  }
]

export const getAdditionalEducation = (locale: Locale) =>
  additionalEducationData.map((item) => ({
    title: pick(item.title, locale),
    org: pick(item.org, locale)
  }))

// ─────────────────────────── Опыт ───────────────────────────

type ExperienceSource = {
  id: string
  current?: boolean
  organization: L
  unit?: L
  role: L
  period: L
  summary?: L
  highlights?: L<string[]>
  images?: string[]
}

const resolveExperience = (items: ExperienceSource[], locale: Locale): ExperienceItem[] =>
  items.map((item) => ({
    id: item.id,
    current: item.current,
    organization: pick(item.organization, locale),
    unit: item.unit ? pick(item.unit, locale) : undefined,
    role: pick(item.role, locale),
    period: pick(item.period, locale),
    summary: item.summary ? pick(item.summary, locale) : undefined,
    highlights: item.highlights ? pick(item.highlights, locale) : undefined,
    images: item.images
  }))

const experienceData: ExperienceSource[] = [
  {
    id: 'yakovlev',
    current: true,
    organization: {
      ru: 'ПАО «Яковлев»',
      en: 'PJSC Yakovlev',
      cs: 'PJSC Jakovlev',
      de: 'PJSC Jakowlew'
    },
    unit: {
      ru: 'Отдел эффективности проектирования',
      en: 'Design efficiency department',
      cs: 'Oddělení efektivity navrhování',
      de: 'Abteilung für Entwurfseffizienz'
    },
    role: { ru: 'Инженер', en: 'Engineer', cs: 'Inženýr', de: 'Ingenieur' },
    period: { ru: 'с 2024 г.', en: 'since 2024', cs: 'od roku 2024', de: 'seit 2024' },
    images: ['gallery/more/008.jpg', 'gallery/more/009.jpg']
  },
  {
    id: 'technekon',
    current: true,
    organization: {
      ru: 'ООО «ТД «Технекон»»',
      en: 'Technekon Trading House',
      cs: 'Obchodní dům Technekon',
      de: 'Handelshaus Technekon'
    },
    unit: {
      ru: 'Оборудование для неразрушающего контроля и вибродиагностики',
      en: 'Equipment for non-destructive testing and vibration diagnostics',
      cs: 'Zařízení pro nedestruktivní zkoušení a vibrační diagnostiku',
      de: 'Geräte für zerstörungsfreie Prüfung und Schwingungsdiagnostik'
    },
    role: {
      ru: 'Ведущий специалист по развитию бизнеса',
      en: 'Lead business development specialist',
      cs: 'Vedoucí specialista rozvoje obchodu',
      de: 'Leitender Spezialist für Geschäftsentwicklung'
    },
    period: {
      ru: 'по настоящее время',
      en: 'present',
      cs: 'dosud',
      de: 'aktuell'
    }
  },
  {
    id: 'transneft',
    organization: {
      ru: 'НИИ Транснефть',
      en: 'Transneft R&D Institute',
      cs: 'Výzkumný ústav Transněfť',
      de: 'Forschungsinstitut Transneft'
    },
    unit: {
      ru: 'Сектор моделирования технических систем',
      en: 'Technical systems modelling unit',
      cs: 'Sektor modelování technických systémů',
      de: 'Bereich Modellierung technischer Systeme'
    },
    role: {
      ru: 'Научный сотрудник',
      en: 'Research fellow',
      cs: 'Vědecký pracovník',
      de: 'Wissenschaftlicher Mitarbeiter'
    },
    period: { ru: '2025 — 2026', en: '2025 — 2026', cs: '2025 — 2026', de: '2025 — 2026' },
    images: ['gallery/transneft-conference-1.jpg', 'gallery/transneft-conference-2.jpg'],
    highlights: {
      ru: [
        'Версионирование онтологических моделей — основная работа на протяжении года',
        'Развитие искусственного интеллекта в инженерных контурах'
      ],
      en: [
        'Versioning of ontology models — the main workstream over the year',
        'Introducing artificial intelligence into engineering workflows'
      ],
      cs: [
        'Verzování ontologických modelů — hlavní náplň práce během roku',
        'Rozvoj umělé inteligence v inženýrských procesech'
      ],
      de: [
        'Versionierung von Ontologiemodellen — Schwerpunkt des Jahres',
        'Einsatz künstlicher Intelligenz in Engineering-Prozessen'
      ]
    }
  },
  {
    id: 'bmstu-admission',
    organization: {
      ru: 'МГТУ имени Н. Э. Баумана',
      en: 'Bauman Moscow State Technical University',
      cs: 'Baumanova moskevská státní technická univerzita',
      de: 'Staatliche Technische Universität Moskau „Bauman“'
    },
    unit: {
      ru: 'Управление приёмной комиссии, отдел стратегии взаимодействия с абитуриентами',
      en: 'Admissions office, applicant engagement strategy unit',
      cs: 'Přijímací kancelář, oddělení strategie komunikace s uchazeči',
      de: 'Zulassungsstelle, Abteilung für Bewerberkommunikation'
    },
    role: {
      ru: 'Специалист по информационным системам',
      en: 'Information systems specialist',
      cs: 'Specialista na informační systémy',
      de: 'Spezialist für Informationssysteme'
    },
    period: { ru: '2022 — 2024', en: '2022 — 2024', cs: '2022 — 2024', de: '2022 — 2024' },
    images: [
      'gallery/admissions-bmstu.jpg',
      'gallery/education-expo.jpg'
    ],
    highlights: {
      ru: [
        'Развитие бренда университета',
        'Кураторство колл-центра и взаимодействие с абитуриентами',
        'Дизайн основных макетов олимпиад со стороны университета'
      ],
      en: [
        'Developing the university brand',
        'Supervising the call centre and working with applicants',
        'Designing the university’s key olympiad materials'
      ],
      cs: [
        'Rozvoj značky univerzity',
        'Vedení call centra a práce s uchazeči',
        'Design hlavních materiálů univerzitních olympiád'
      ],
      de: [
        'Entwicklung der Universitätsmarke',
        'Leitung des Callcenters und Arbeit mit Bewerbern',
        'Gestaltung der zentralen Olympiade-Materialien der Universität'
      ]
    }
  }
]

export const getExperience = (locale: Locale): ExperienceItem[] =>
  resolveExperience(experienceData, locale)

const projectRolesData: ExperienceSource[] = [
  {
    id: 'kdme',
    organization: {
      ru: 'Многоцелевой мобильный робототехнический комплекс КДМЕ-23',
      en: 'KDME-23 multi-purpose mobile robotic system',
      cs: 'Víceúčelový mobilní robotický komplex KDME-23',
      de: 'Mehrzweck-Mobilrobotersystem KDME-23'
    },
    role: { ru: 'Разработчик', en: 'Developer', cs: 'Vývojář', de: 'Entwickler' },
    period: {
      ru: 'программирование, проектирование',
      en: 'programming and design',
      cs: 'programování a konstrukce',
      de: 'Programmierung und Konstruktion'
    }
  },
  {
    id: 'innovatika',
    organization: {
      ru: '«Инноватика» АО «Мособлгаз»',
      en: 'Innovatika contest, Mosoblgaz',
      cs: 'Soutěž Innovatika, Mosoblgaz',
      de: 'Wettbewerb Innovatika, Mosoblgaz'
    },
    role: {
      ru: 'Руководитель команды',
      en: 'Team lead',
      cs: 'Vedoucí týmu',
      de: 'Teamleiter'
    },
    period: {
      ru: 'первые места почти во всех номинациях, куда были заявлены проекты',
      en: 'first places in nearly every category the team entered',
      cs: 'první místa téměř ve všech kategoriích, do kterých tým vstoupil',
      de: 'erste Plätze in nahezu allen Kategorien, in denen das Team antrat'
    }
  },
  {
    id: 'rosmol',
    organization: {
      ru: 'Грант Росмолодёжи: лекции по робототехнике на РЖЯ',
      en: 'Rosmolodezh grant: robotics lectures in Russian Sign Language',
      cs: 'Grant Rosmoloděž: přednášky o robotice v ruském znakovém jazyce',
      de: 'Rosmolodjosch-Förderung: Robotik-Vorlesungen in russischer Gebärdensprache'
    },
    role: {
      ru: 'Руководитель команды, переводчик РЖЯ',
      en: 'Team lead and sign language interpreter',
      cs: 'Vedoucí týmu a tlumočník znakového jazyka',
      de: 'Teamleiter und Gebärdensprachdolmetscher'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' }
  },
  {
    id: 'gazprom-linde',
    organization: {
      ru: 'Чемпионат «Газпром Линде Инжиниринг»',
      en: 'Gazprom Linde Engineering championship',
      cs: 'Šampionát Gazprom Linde Engineering',
      de: 'Championship von Gazprom Linde Engineering'
    },
    role: {
      ru: 'Участник команды-победителя',
      en: 'Member of the winning team',
      cs: 'Člen vítězného týmu',
      de: 'Mitglied des Siegerteams'
    },
    period: { ru: '', en: '', cs: '', de: '' }
  }
]

export const getProjectRoles = (locale: Locale): ExperienceItem[] =>
  resolveExperience(projectRolesData, locale)

const mentorshipData: ExperienceSource[] = [
  {
    id: 'bmstu-mentoring',
    organization: {
      ru: 'МГТУ имени Н. Э. Баумана',
      en: 'Bauman Moscow State Technical University',
      cs: 'Baumanova moskevská státní technická univerzita',
      de: 'Staatliche Technische Universität Moskau „Bauman“'
    },
    role: {
      ru: 'Руководитель направления наставничества',
      en: 'Head of the mentoring programme',
      cs: 'Vedoucí mentoringového programu',
      de: 'Leiter des Mentoring-Programms'
    },
    period: { ru: '', en: '', cs: '', de: '' },
    summary: {
      ru: 'Выстроил систему наставничества с нуля — на момент запуска её в университете не было.',
      en: 'Built the mentoring system from scratch — the university had none before.',
      cs: 'Vybudoval systém mentoringu od nuly — univerzita jej do té doby neměla.',
      de: 'Baute das Mentoring-System von Grund auf auf — zuvor gab es an der Universität keines.'
    }
  },
  {
    id: 'rsl-lectures',
    organization: {
      ru: 'Адаптация лекций на РЖЯ',
      en: 'Lectures adapted into Russian Sign Language',
      cs: 'Přednášky adaptované do ruského znakového jazyka',
      de: 'Vorlesungen in russischer Gebärdensprache'
    },
    role: {
      ru: 'Переводчик и методист',
      en: 'Interpreter and methodologist',
      cs: 'Tlumočník a metodik',
      de: 'Dolmetscher und Methodiker'
    },
    period: { ru: '2024 — 2025', en: '2024 — 2025', cs: '2024 — 2025', de: '2024 — 2025' },
    summary: {
      ru: '27 лекций, преимущественно по авиации и робототехнике.',
      en: '27 lectures, mostly on aviation and robotics.',
      cs: '27 přednášek, převážně o letectví a robotice.',
      de: '27 Vorlesungen, überwiegend zu Luftfahrt und Robotik.'
    }
  },
  {
    id: 'engineers-future',
    organization: {
      ru: 'Конкурс «Инженеры будущего»',
      en: 'Engineers of the Future contest',
      cs: 'Soutěž Inženýři budoucnosti',
      de: 'Wettbewerb „Ingenieure der Zukunft“'
    },
    role: {
      ru: 'Наставник 10 школьных проектов',
      en: 'Mentor of 10 school projects',
      cs: 'Mentor 10 školních projektů',
      de: 'Mentor von 10 Schülerprojekten'
    },
    period: { ru: '2024', en: '2024', cs: '2024', de: '2024' }
  },
  {
    id: 'student-council',
    organization: {
      ru: 'Студенческий совет факультета РК МГТУ имени Н. Э. Баумана',
      en: 'Student council of the Robotics faculty, Bauman University',
      cs: 'Studentská rada fakulty robotiky, Baumanova univerzita',
      de: 'Studierendenrat der Fakultät für Robotik, Bauman-Universität'
    },
    role: {
      ru: 'Один из создателей',
      en: 'Co-founder',
      cs: 'Spoluzakladatel',
      de: 'Mitbegründer'
    },
    period: { ru: '2023 — 2024', en: '2023 — 2024', cs: '2023 — 2024', de: '2023 — 2024' }
  }
]

export const getMentorship = (locale: Locale): ExperienceItem[] =>
  resolveExperience(mentorshipData, locale)
