import { type L, type Locale, pick } from '@/i18n/core'
import type { AchievementCategory, AchievementItem, CategoryFilter } from '../types'

/** Источник с фотографиями и подтверждением — кафедра РК-9 МГТУ им. Н.Э. Баумана */
const rk9 = (id: number): { label: L; url: string } => ({
  label: {
    ru: 'Новость кафедры РК-9',
    en: 'Department RK-9 news',
    cs: 'Aktualita katedry RK-9',
    de: 'Meldung des Lehrstuhls RK-9'
  },
  url: `https://rk9.bmstu.ru/news/${id}`
})

const innovatika: { label: L; url: string } = {
  label: {
    ru: 'Конкурс «Инноватика»',
    en: 'Innovatika contest',
    cs: 'Soutěž Innovatika',
    de: 'Wettbewerb Innovatika'
  },
  url: 'https://innovatika-mosoblgaz.ru/projects/'
}

const categoriesData: { value: string; label: L }[] = [
  { value: 'all', label: { ru: 'Все', en: 'All', cs: 'Vše', de: 'Alle' } },
  {
    value: 'competition',
    label: { ru: 'Конкурсы', en: 'Competitions', cs: 'Soutěže', de: 'Wettbewerbe' }
  },
  {
    value: 'award',
    label: {
      ru: 'Стипендии и гранты',
      en: 'Scholarships and grants',
      cs: 'Stipendia a granty',
      de: 'Stipendien und Förderungen'
    }
  },
  {
    value: 'conference',
    label: { ru: 'Конференции', en: 'Conferences', cs: 'Konference', de: 'Konferenzen' }
  },
  { value: 'project', label: { ru: 'Проекты', en: 'Projects', cs: 'Projekty', de: 'Projekte' } },
  {
    value: 'inclusive',
    label: { ru: 'Инклюзия', en: 'Inclusion', cs: 'Inkluze', de: 'Inklusion' }
  },
  {
    value: 'leadership',
    label: { ru: 'Лидерство', en: 'Leadership', cs: 'Vedení', de: 'Leadership' }
  }
]

export const getAchievementCategories = (locale: Locale): CategoryFilter[] =>
  categoriesData.map((item) => ({ value: item.value, label: pick(item.label, locale) }))

export const achievementYears: string[] = ['all', '2026', '2025', '2024', '2023']

type AchievementSource = {
  id: string
  year: string
  date?: string
  category: AchievementCategory
  icon: string
  archived?: boolean
  source?: { label: L; url: string }
  images?: string[]
  title: L
  description: L
  result?: L
  role?: L
  details?: L<string[]>
}

const achievementsData: AchievementSource[] = [
  // ───────────────────────────── 2026 ─────────────────────────────
  {
    id: 'aprngk-2026',
    year: '2026',
    category: 'inclusive',
    icon: 'hand',
    images: ['gallery/talk-gubkin-asu.jpg'],
    title: {
      ru: 'Доклад «Интеграция глухих в нефтегазовую отрасль»',
      en: 'Talk “Integrating deaf people into the oil and gas industry”',
      cs: 'Přednáška „Integrace neslyšících do ropného a plynárenského odvětví“',
      de: 'Vortrag „Integration gehörloser Menschen in die Öl- und Gasbranche“'
    },
    description: {
      ru:
        'Всероссийская научно-техническая конференция «Актуальные проблемы развития ' +
        'нефтегазового комплекса России». Доклад включён в сборник конференции.',
      en:
        'All-Russian scientific and technical conference on current issues in the Russian ' +
        'oil and gas sector. The talk is included in the conference proceedings.',
      cs:
        'Celoruská vědeckotechnická konference o aktuálních otázkách ruského ropného ' +
        'a plynárenského odvětví. Příspěvek je zařazen do sborníku.',
      de:
        'Gesamtrussische wissenschaftlich-technische Konferenz zu aktuellen Fragen der ' +
        'russischen Öl- und Gaswirtschaft. Der Beitrag erscheint im Tagungsband.'
    }
  },

  // ───────────────────────────── 2025 ─────────────────────────────
  {
    id: 'gazprom-linde-2025',
    year: '2025',
    category: 'competition',
    icon: 'trophy',
    images: ['gallery/more/003.jpg'],
    title: {
      ru: 'Победитель чемпионата «Газпром Линде Инжиниринг»',
      en: 'Winner of the Gazprom Linde Engineering championship',
      cs: 'Vítěz šampionátu Gazprom Linde Engineering',
      de: 'Sieger der Championship von Gazprom Linde Engineering'
    },
    description: {
      ru: 'Победа в составе команды.',
      en: 'Won as part of a team.',
      cs: 'Vítězství v rámci týmu.',
      de: 'Sieg im Team.'
    },
    result: { ru: 'Победитель', en: 'Winner', cs: 'Vítěz', de: 'Sieger' }
  },
  {
    id: 'innovatika-2025',
    year: '2025',
    category: 'competition',
    icon: 'medal-gold',
    images: ['gallery/more/012.jpg', 'gallery/more/014.jpg'],
    source: innovatika,
    title: {
      ru: 'Победитель «Инноватики» АО «Мособлгаз»',
      en: 'Winner of the Innovatika contest, Mosoblgaz',
      cs: 'Vítěz soutěže Innovatika společnosti Mosoblgaz',
      de: 'Sieger des Innovatika-Wettbewerbs von Mosoblgaz'
    },
    description: {
      ru: 'Команда заняла первые места почти во всех номинациях, куда были заявлены проекты.',
      en: 'The team took first place in nearly every category it entered.',
      cs: 'Tým získal první místa téměř ve všech kategoriích, do kterých se přihlásil.',
      de: 'Das Team belegte in nahezu allen Kategorien, in denen es antrat, den ersten Platz.'
    },
    result: {
      ru: 'Первые места',
      en: 'First places',
      cs: 'První místa',
      de: 'Erste Plätze'
    },
    role: {
      ru: 'Руководитель команды',
      en: 'Team lead',
      cs: 'Vedoucí týmu',
      de: 'Teamleiter'
    }
  },
  {
    id: 'gordyukhin-2025',
    year: '2025',
    category: 'award',
    icon: 'award',
    images: ['gallery/more/016.jpg'],
    source: innovatika,
    title: {
      ru: 'Специальный приз имени А. И. Гордюхина',
      en: 'A. I. Gordyukhin special prize',
      cs: 'Zvláštní cena A. I. Gorďuchina',
      de: 'Sonderpreis „A. I. Gordjuchin“'
    },
    description: {
      ru: 'Специальный приз конкурса «Инноватика» АО «Мособлгаз».',
      en: 'Special prize of the Innovatika contest run by Mosoblgaz.',
      cs: 'Zvláštní cena soutěže Innovatika společnosti Mosoblgaz.',
      de: 'Sonderpreis des Innovatika-Wettbewerbs von Mosoblgaz.'
    }
  },
  {
    id: 'oil-gas-2025',
    year: '2025',
    category: 'conference',
    icon: 'medal-bronze',
    images: ['gallery/more/037.jpg', 'gallery/industry-conference.jpg'],
    title: {
      ru: 'III место, «Нефть и газ — 2025»',
      en: 'Third place, Oil and Gas 2025',
      cs: 'Třetí místo, Ropa a plyn 2025',
      de: 'Dritter Platz, „Öl und Gas 2025“'
    },
    description: {
      ru: 'Международная молодёжная научная конференция, секция инженерной механики.',
      en: 'International youth research conference, engineering mechanics section.',
      cs: 'Mezinárodní studentská vědecká konference, sekce technické mechaniky.',
      de: 'Internationale Nachwuchskonferenz, Sektion Technische Mechanik.'
    },
    result: { ru: 'III место', en: 'Third place', cs: 'Třetí místo', de: 'Dritter Platz' }
  },
  {
    id: 'government-scholarship-2025',
    year: '2025',
    category: 'award',
    icon: 'graduation',
    images: ['gallery/talk-podium.jpg'],
    source: rk9(210),
    title: {
      ru: 'Стипендия Правительства Российской Федерации',
      en: 'Scholarship of the Government of the Russian Federation',
      cs: 'Stipendium vlády Ruské federace',
      de: 'Stipendium der Regierung der Russischen Föderation'
    },
    description: {
      ru: 'Назначена за достижения в учебной и научной деятельности.',
      en: 'Awarded for academic and research achievements.',
      cs: 'Uděleno za studijní a vědecké výsledky.',
      de: 'Verliehen für Studien- und Forschungsleistungen.'
    }
  },
  {
    id: 'ontology-pipeline-2025',
    year: '2025',
    category: 'project',
    icon: 'puzzle',
    images: ['gallery/transneft-conference-1.jpg', 'gallery/transneft-conference-2.jpg'],
    title: {
      ru: 'Проектная команда по онтологиям в трубопроводном транспорте',
      en: 'Ontology team for pipeline transport',
      cs: 'Projektový tým pro ontologie v potrubní dopravě',
      de: 'Projektteam für Ontologien im Pipelinetransport'
    },
    description: {
      ru: 'Версионирование онтологических моделей и развитие ИИ в инженерных контурах в НИИ Транснефть.',
      en: 'Versioning ontology models and applying AI in engineering workflows at the Transneft R&D Institute.',
      cs: 'Verzování ontologických modelů a rozvoj AI v inženýrských procesech ve výzkumném ústavu Transněfť.',
      de: 'Versionierung von Ontologiemodellen und KI in Engineering-Prozessen am Forschungsinstitut Transneft.'
    },
    role: {
      ru: 'Научный сотрудник',
      en: 'Research fellow',
      cs: 'Vědecký pracovník',
      de: 'Wissenschaftlicher Mitarbeiter'
    }
  },
  {
    id: 'jury-2025',
    year: '2025',
    category: 'leadership',
    icon: 'scale',
    images: ['gallery/more/093.jpg'],
    title: {
      ru: 'Член жюри конкурсов студенческих и школьных проектов',
      en: 'Jury member for student and school project contests',
      cs: 'Člen poroty soutěží studentských a školních projektů',
      de: 'Jurymitglied bei Studierenden- und Schülerwettbewerben'
    },
    description: {
      ru: 'Экспертная оценка проектных работ.',
      en: 'Expert assessment of project work.',
      cs: 'Odborné hodnocení projektových prací.',
      de: 'Fachliche Bewertung von Projektarbeiten.'
    }
  },

  // ───────────────────────────── 2024 ─────────────────────────────
  {
    id: 'rostec-vector-2024',
    year: '2024',
    category: 'competition',
    icon: 'rocket',
    images: ['gallery/more/004.jpg', 'gallery/more/005.jpg'],
    title: {
      ru: 'Статус «Технологический лидер Ростеха»',
      en: 'Rostec Technology Leader status',
      cs: 'Status „Technologický lídr Rostecu“',
      de: 'Status „Technologieführer von Rostec“'
    },
    description: {
      ru: 'По итогам программы «Вектор» ГК «Ростех».',
      en: 'Awarded on completion of the Vektor programme run by Rostec.',
      cs: 'Uděleno po absolvování programu Vektor společnosti Rostec.',
      de: 'Verliehen nach Abschluss des Vektor-Programms von Rostec.'
    },
    result: {
      ru: 'Технологический лидер Ростеха',
      en: 'Rostec Technology Leader',
      cs: 'Technologický lídr Rostecu',
      de: 'Technologieführer von Rostec'
    }
  },
  {
    id: 'uac-2024',
    year: '2024',
    category: 'competition',
    icon: 'plane',
    images: ['gallery/uac-3d-printing.jpg', 'gallery/uac-stand.jpg', 'gallery/more/007.jpg'],
    title: {
      ru: 'Конкурс «Будущее авиации» ПАО «ОАК»',
      en: 'Future of Aviation contest, United Aircraft Corporation',
      cs: 'Soutěž Budoucnost letectví, United Aircraft Corporation',
      de: 'Wettbewerb „Zukunft der Luftfahrt“, United Aircraft Corporation'
    },
    description: {
      ru: 'Участие в конкурсе инженерных проектов Объединённой авиастроительной корпорации.',
      en: 'Took part in the engineering project contest of the United Aircraft Corporation.',
      cs: 'Účast v soutěži inženýrských projektů United Aircraft Corporation.',
      de: 'Teilnahme am Ingenieurwettbewerb der United Aircraft Corporation.'
    }
  },
  {
    id: 'politehnika-2024',
    year: '2024',
    category: 'competition',
    icon: 'medal-gold',
    images: ['gallery/kdme23-stand.jpg'],
    source: rk9(180),
    title: {
      ru: 'I место на выставке «Политехника»',
      en: 'First place at the Politekhnika exhibition',
      cs: 'První místo na výstavě Politechnika',
      de: 'Erster Platz auf der Ausstellung „Politechnika“'
    },
    description: {
      ru: 'Выставка инженерных разработок.',
      en: 'An exhibition of engineering developments.',
      cs: 'Výstava inženýrských projektů.',
      de: 'Ausstellung technischer Entwicklungen.'
    },
    result: { ru: 'I место', en: 'First place', cs: 'První místo', de: 'Erster Platz' }
  },
  {
    id: 'council-scholarship-2024',
    year: '2024',
    category: 'award',
    icon: 'graduation',
    images: ['gallery/portrait-mentor.jpg'],
    source: rk9(156),
    title: {
      ru: 'Стипендия Учёного совета МГТУ имени Н. Э. Баумана',
      en: 'Academic Council scholarship, Bauman Moscow State Technical University',
      cs: 'Stipendium vědecké rady Baumanovy univerzity',
      de: 'Stipendium des Wissenschaftlichen Rates der Bauman-Universität'
    },
    description: {
      ru: 'Назначена за научную работу и участие в жизни университета.',
      en: 'Awarded for research work and involvement in university life.',
      cs: 'Uděleno za vědeckou práci a zapojení do života univerzity.',
      de: 'Verliehen für Forschungsarbeit und Engagement im Universitätsleben.'
    }
  },
  {
    id: 'rosmolodezh-2024',
    year: '2024',
    category: 'award',
    icon: 'coins',
    images: ['gallery/inclusive-robotics-class.jpg', 'gallery/more/078.jpg'],
    title: {
      ru: 'Грант Росмолодёжи — 300 000 ₽',
      en: 'Rosmolodezh grant — RUB 300,000',
      cs: 'Grant Rosmoloděž — 300 000 ₽',
      de: 'Rosmolodjosch-Förderung — 300 000 ₽'
    },
    description: {
      ru: 'Победа в грантовом конкурсе: цикл лекций по робототехнике на русском жестовом языке.',
      en: 'Winner of the grant competition: a series of robotics lectures in Russian Sign Language.',
      cs: 'Vítězství v grantové soutěži: cyklus přednášek o robotice v ruském znakovém jazyce.',
      de: 'Sieg im Förderwettbewerb: eine Vorlesungsreihe zur Robotik in russischer Gebärdensprache.'
    },
    result: {
      ru: 'Победитель грантового конкурса',
      en: 'Grant competition winner',
      cs: 'Vítěz grantové soutěže',
      de: 'Sieger des Förderwettbewerbs'
    },
    role: {
      ru: 'Руководитель команды',
      en: 'Team lead',
      cs: 'Vedoucí týmu',
      de: 'Teamleiter'
    }
  },
  {
    id: 'mentorship-academy-2024',
    year: '2024',
    category: 'leadership',
    icon: 'book',
    images: ['gallery/mentorship-academy.jpg', 'gallery/mentorship-academy-talk.jpg'],
    title: {
      ru: 'Академия научного наставничества',
      en: 'Academy of Research Mentoring',
      cs: 'Akademie vědeckého mentoringu',
      de: 'Akademie für wissenschaftliches Mentoring'
    },
    description: {
      ru: 'Выпускник программы.',
      en: 'Graduate of the programme.',
      cs: 'Absolvent programu.',
      de: 'Absolvent des Programms.'
    }
  },
  {
    id: 'engineers-future-2024',
    year: '2024',
    category: 'leadership',
    icon: 'compass',
    images: ['gallery/more/104.jpg', 'gallery/more/105.jpg'],
    title: {
      ru: 'Наставник 10 школьных проектов, «Инженеры будущего»',
      en: 'Mentor of 10 school projects, Engineers of the Future',
      cs: 'Mentor 10 školních projektů, Inženýři budoucnosti',
      de: 'Mentor von 10 Schülerprojekten, „Ingenieure der Zukunft“'
    },
    description: {
      ru: 'Сопровождение школьных команд от идеи до защиты.',
      en: 'Guiding school teams from the initial idea to the final defence.',
      cs: 'Vedení školních týmů od nápadu až po obhajobu.',
      de: 'Begleitung von Schülerteams von der Idee bis zur Verteidigung.'
    },
    role: { ru: 'Наставник', en: 'Mentor', cs: 'Mentor', de: 'Mentor' }
  },
  {
    id: 'mentorship-conf-2024',
    year: '2024',
    category: 'leadership',
    icon: 'files',
    images: ['gallery/more/035.jpg'],
    title: {
      ru: 'Межвузовская конференция по наставничеству',
      en: 'Inter-university conference on mentoring',
      cs: 'Mezivysokoškolská konference o mentoringu',
      de: 'Hochschulübergreifende Konferenz zum Mentoring'
    },
    description: {
      ru: 'Организация конференции: программа, участники, площадка.',
      en: 'Organised the conference: programme, participants and venue.',
      cs: 'Organizace konference: program, účastníci, místo konání.',
      de: 'Organisation der Konferenz: Programm, Teilnehmende, Veranstaltungsort.'
    },
    role: { ru: 'Организатор', en: 'Organiser', cs: 'Organizátor', de: 'Organisator' }
  },
  {
    id: 'jury-2024',
    year: '2024',
    category: 'leadership',
    icon: 'scale',
    images: ['gallery/more/095.jpg'],
    title: {
      ru: 'Член жюри конкурсов студенческих и школьных проектов',
      en: 'Jury member for student and school project contests',
      cs: 'Člen poroty soutěží studentských a školních projektů',
      de: 'Jurymitglied bei Studierenden- und Schülerwettbewerben'
    },
    description: {
      ru: 'Экспертная оценка проектных работ.',
      en: 'Expert assessment of project work.',
      cs: 'Odborné hodnocení projektových prací.',
      de: 'Fachliche Bewertung von Projektarbeiten.'
    }
  },
  {
    id: 'summer-intensives-2024',
    year: '2024',
    category: 'inclusive',
    icon: 'hand',
    images: ['gallery/summer-intensive.jpg'],
    title: {
      ru: 'Летние интенсивы для глухих школьников',
      en: 'Summer intensives for deaf school students',
      cs: 'Letní intenzivní kurzy pro neslyšící žáky',
      de: 'Sommerintensivkurse für gehörlose Schülerinnen und Schüler'
    },
    description: {
      ru: 'Занятия по робототехнике и инженерным направлениям на русском жестовом языке.',
      en: 'Robotics and engineering classes delivered in Russian Sign Language.',
      cs: 'Výuka robotiky a technických oborů v ruském znakovém jazyce.',
      de: 'Unterricht in Robotik und Technik in russischer Gebärdensprache.'
    }
  },
  {
    id: 'yakovlev-2024',
    year: '2024',
    category: 'inclusive',
    icon: 'plane',
    images: ['gallery/yakovlev-inclusive-lecture.jpg'],
    source: rk9(189),
    title: {
      ru: 'Инклюзивная лекция с ПАО «Яковлев»',
      en: 'Inclusive lecture with PJSC Yakovlev',
      cs: 'Inkluzivní přednáška s PJSC Jakovlev',
      de: 'Inklusive Vorlesung mit PJSC Jakowlew'
    },
    description: {
      ru: 'Лекция об авиастроении с сопровождением на русском жестовом языке.',
      en: 'A lecture on aircraft construction with Russian Sign Language interpretation.',
      cs: 'Přednáška o letecké výrobě s tlumočením do ruského znakového jazyka.',
      de: 'Vorlesung zum Flugzeugbau mit Dolmetschung in russische Gebärdensprache.'
    }
  },
  {
    id: 'brc-course-2024',
    year: '2024',
    category: 'inclusive',
    icon: 'book',
    images: ['gallery/more/043.jpg'],
    source: rk9(144),
    title: {
      ru: 'Инклюзивный курс BRC «Автоматизированные системы управления»',
      en: 'Inclusive BRC course “Automated control systems”',
      cs: 'Inkluzivní kurz BRC „Automatizované řídicí systémy“',
      de: 'Inklusiver BRC-Kurs „Automatisierte Steuerungssysteme“'
    },
    description: {
      ru: 'Адаптация курса и его сопровождение для студентов с нарушениями слуха.',
      en: 'Adapted and supported the course for students with hearing impairments.',
      cs: 'Adaptace a doprovod kurzu pro studenty se sluchovým postižením.',
      de: 'Anpassung und Begleitung des Kurses für hörbeeinträchtigte Studierende.'
    }
  },
  {
    id: 'science-spring-2024',
    year: '2024',
    category: 'conference',
    icon: 'medal-bronze',
    images: ['gallery/talk-bmstu.jpg'],
    source: rk9(137),
    title: {
      ru: 'III место, «Студенческая научная весна»',
      en: 'Third place, Student Research Spring',
      cs: 'Třetí místo, Studentské vědecké jaro',
      de: 'Dritter Platz, „Studentischer Wissenschaftsfrühling“'
    },
    description: {
      ru: 'Всероссийская студенческая конференция.',
      en: 'All-Russian student conference.',
      cs: 'Celoruská studentská konference.',
      de: 'Gesamtrussische Studierendenkonferenz.'
    },
    result: { ru: 'III место', en: 'Third place', cs: 'Třetí místo', de: 'Dritter Platz' }
  },
  {
    id: 'conferences-2024',
    year: '2024',
    category: 'conference',
    icon: 'books',
    images: ['gallery/vitte-readings-2024.jpg', 'gallery/roundtable.jpg'],
    title: {
      ru: 'Награды научных конференций и конкурсов 2024 года',
      en: 'Awards at research conferences and contests in 2024',
      cs: 'Ocenění na vědeckých konferencích a soutěžích v roce 2024',
      de: 'Auszeichnungen bei Konferenzen und Wettbewerben 2024'
    },
    description: {
      ru: 'Отмеченные работы по робототехнике и управлению знаниями.',
      en: 'Awarded work on robotics and knowledge management.',
      cs: 'Oceněné práce z robotiky a správy znalostí.',
      de: 'Ausgezeichnete Arbeiten zu Robotik und Wissensmanagement.'
    },
    details: {
      ru: [
        'Виттевские чтения',
        'СНК-2024, Московский Политех',
        'Научная сессия СНО НИЯУ МИФИ',
        'XVII Международный конкурс научных, учебных и творческих работ',
        '«Научный прорыв — 2024»',
        '«Молодые учёные — гордость страны»',
        'Конференция «КАПП(М)-2024»'
      ],
      en: [
        'Witte Readings',
        'SNK-2024, Moscow Polytechnic University',
        'Research session of the student society, MEPhI',
        '17th International contest of research, academic and creative work',
        'Scientific Breakthrough 2024',
        'Young Scientists — Pride of the Country',
        'KAPP(M)-2024 conference'
      ],
      cs: [
        'Witteho čtení',
        'SNK-2024, Moskevská polytechnická univerzita',
        'Vědecké zasedání studentské společnosti MEPhI',
        '17. mezinárodní soutěž vědeckých, studijních a tvůrčích prací',
        'Vědecký průlom 2024',
        'Mladí vědci — pýcha země',
        'Konference KAPP(M)-2024'
      ],
      de: [
        'Witte-Lesungen',
        'SNK-2024, Polytechnische Universität Moskau',
        'Wissenschaftliche Sitzung der Studierendengesellschaft, MEPhI',
        '17. Internationaler Wettbewerb wissenschaftlicher und kreativer Arbeiten',
        '„Wissenschaftlicher Durchbruch 2024“',
        '„Junge Wissenschaftler — Stolz des Landes“',
        'Konferenz KAPP(M)-2024'
      ]
    }
  },

  // ───────────────────────────── 2023 ─────────────────────────────
  {
    id: 'politehnika-2023',
    year: '2023',
    category: 'competition',
    icon: 'medal-silver',
    images: ['gallery/more/054.jpg', 'gallery/more/002.jpg'],
    title: {
      ru: 'II место на выставке «Политехника»',
      en: 'Second place at the Politekhnika exhibition',
      cs: 'Druhé místo na výstavě Politechnika',
      de: 'Zweiter Platz auf der Ausstellung „Politechnika“'
    },
    description: {
      ru: 'Выставка инженерных разработок.',
      en: 'An exhibition of engineering developments.',
      cs: 'Výstava inženýrských projektů.',
      de: 'Ausstellung technischer Entwicklungen.'
    },
    result: { ru: 'II место', en: 'Second place', cs: 'Druhé místo', de: 'Zweiter Platz' }
  },
  {
    id: 'student-council-2023',
    year: '2023',
    date: '2023—2024',
    category: 'leadership',
    icon: 'users',
    images: ['gallery/portrait-student-council.jpg'],
    title: {
      ru: 'Студенческий совет факультета РК',
      en: 'Student council of the Robotics faculty',
      cs: 'Studentská rada fakulty robotiky',
      de: 'Studierendenrat der Fakultät für Robotik'
    },
    description: {
      ru: 'Один из создателей студенческого совета факультета.',
      en: 'Co-founder of the faculty student council.',
      cs: 'Spoluzakladatel studentské rady fakulty.',
      de: 'Mitbegründer des Studierendenrats der Fakultät.'
    },
    role: { ru: 'Сооснователь', en: 'Co-founder', cs: 'Spoluzakladatel', de: 'Mitbegründer' }
  },
  {
    id: 'mentorship-program-2023',
    year: '2023',
    category: 'leadership',
    icon: 'teacher',
    images: ['gallery/mentoring-lecture.jpg'],
    title: {
      ru: 'Система наставничества МГТУ имени Н. Э. Баумана',
      en: 'Mentoring system at Bauman Moscow State Technical University',
      cs: 'Systém mentoringu Baumanovy univerzity',
      de: 'Mentoring-System der Bauman-Universität'
    },
    description: {
      ru: 'Направление выстроено с нуля — до этого системы наставничества не было.',
      en: 'Built from scratch — the university had no mentoring system before.',
      cs: 'Vybudováno od nuly — univerzita do té doby mentoring neměla.',
      de: 'Von Grund auf aufgebaut — zuvor gab es kein Mentoring-System.'
    },
    role: {
      ru: 'Руководитель направления',
      en: 'Programme lead',
      cs: 'Vedoucí programu',
      de: 'Programmleiter'
    }
  },
  {
    id: 'ano-open-perspectives',
    year: '2023',
    date: '2022—2024',
    category: 'inclusive',
    icon: 'globe',
    images: ['gallery/ano-team-meeting.jpg', 'gallery/more/056.jpg'],
    title: {
      ru: 'АНО «Открытые Перспективы»',
      en: 'Open Perspectives non-profit',
      cs: 'Nezisková organizace Otevřené perspektivy',
      de: 'Gemeinnützige Organisation „Offene Perspektiven“'
    },
    description: {
      ru: 'Направление доступной информационной среды: адаптация интерфейсов и переводы.',
      en: 'Accessible information environment: interface adaptation and interpreting.',
      cs: 'Přístupné informační prostředí: úpravy rozhraní a tlumočení.',
      de: 'Barrierefreie Informationsumgebung: Anpassung von Oberflächen und Dolmetschen.'
    },
    role: {
      ru: 'Руководитель направления',
      en: 'Programme lead',
      cs: 'Vedoucí programu',
      de: 'Programmleiter'
    }
  },
  {
    id: 'tvoy-hod-2023',
    year: '2023',
    category: 'competition',
    icon: 'target',
    archived: true,
    images: ['gallery/more/079.jpg'],
    title: {
      ru: 'Конкурс «Твой ход»',
      en: 'Your Move contest',
      cs: 'Soutěž Tvůj tah',
      de: 'Wettbewerb „Dein Zug“'
    },
    description: {
      ru: 'Участие во всероссийском студенческом конкурсе.',
      en: 'Took part in the all-Russian student contest.',
      cs: 'Účast v celoruské studentské soutěži.',
      de: 'Teilnahme am gesamtrussischen Studierendenwettbewerb.'
    }
  }
]

const resolve = (item: AchievementSource, locale: Locale): AchievementItem => ({
  id: item.id,
  year: item.year,
  date: item.date,
  category: item.category,
  icon: item.icon,
  archived: item.archived,
  title: pick(item.title, locale),
  description: pick(item.description, locale),
  result: item.result ? pick(item.result, locale) : undefined,
  role: item.role ? pick(item.role, locale) : undefined,
  details: item.details ? pick(item.details, locale) : undefined,
  source: item.source ? { label: pick(item.source.label, locale), url: item.source.url } : undefined,
  images: item.images
})

export const getAchievements = (locale: Locale): AchievementItem[] =>
  achievementsData.map((item) => resolve(item, locale))

export const getCurrentAchievements = (locale: Locale): AchievementItem[] =>
  achievementsData.filter((item) => !item.archived).map((item) => resolve(item, locale))

export const getArchivedAchievements = (locale: Locale): AchievementItem[] =>
  achievementsData.filter((item) => item.archived).map((item) => resolve(item, locale))
