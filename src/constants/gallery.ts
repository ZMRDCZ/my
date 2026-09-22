import { type L, type Locale, pick } from '@/i18n/core'
import type { GalleryCategory, GalleryItem } from '../types'
import { galleryMore } from './gallery-more'

const categoriesData: { value: string; label: L }[] = [
  { value: 'all', label: { ru: 'Все', en: 'All', cs: 'Vše', de: 'Alle' } },
  {
    value: 'science',
    label: {
      ru: 'Наука и доклады',
      en: 'Research and talks',
      cs: 'Věda a přednášky',
      de: 'Forschung und Vorträge'
    }
  },
  {
    value: 'robotics',
    label: { ru: 'Робототехника', en: 'Robotics', cs: 'Robotika', de: 'Robotik' }
  },
  {
    value: 'inclusion',
    label: { ru: 'Инклюзия', en: 'Inclusion', cs: 'Inkluze', de: 'Inklusion' }
  },
  {
    value: 'team',
    label: {
      ru: 'Команды и события',
      en: 'Teams and events',
      cs: 'Týmy a akce',
      de: 'Teams und Veranstaltungen'
    }
  },
  {
    value: 'portrait',
    label: { ru: 'Портреты', en: 'Portraits', cs: 'Portréty', de: 'Porträts' }
  }
]

export const getGalleryCategories = (locale: Locale) =>
  categoriesData.map((item) => ({ value: item.value, label: pick(item.label, locale) }))

type GallerySource = {
  id: string
  image: string
  category: GalleryCategory
  title: L
  description?: L
}

const galleryData: GallerySource[] = [
  {
    id: 'talk-gubkin-asu',
    image: 'gallery/talk-gubkin-asu.jpg',
    category: 'science',
    title: {
      ru: 'Доклад на конференции',
      en: 'Conference talk',
      cs: 'Konferenční příspěvek',
      de: 'Konferenzvortrag'
    },
    description: {
      ru: 'Онтологическое обеспечение и цифровизация эксплуатации объектов ТЭК.',
      en: 'Ontology support and digitalisation of energy facility operation.',
      cs: 'Ontologická podpora a digitalizace provozu energetických objektů.',
      de: 'Ontologische Unterstützung und Digitalisierung des Anlagenbetriebs.'
    }
  },
  {
    id: 'kdme23-stand',
    image: 'gallery/kdme23-stand.jpg',
    category: 'robotics',
    title: {
      ru: 'Стенд КДМЕ-23',
      en: 'KDME-23 exhibition stand',
      cs: 'Stánek KDME-23',
      de: 'Messestand KDME-23'
    },
    description: {
      ru: 'Адаптивные колёса комплекса на выставке инженерных разработок.',
      en: 'The system’s adaptive wheels at an engineering exhibition.',
      cs: 'Adaptivní kola komplexu na výstavě inženýrských projektů.',
      de: 'Die adaptiven Räder des Systems auf einer Technikausstellung.'
    }
  },
  {
    id: 'kdme23-talk-mephi',
    image: 'gallery/kdme23-talk-mephi.jpg',
    category: 'robotics',
    title: {
      ru: 'КДМЕ-23: цифровой двойник',
      en: 'KDME-23: digital twin',
      cs: 'KDME-23: digitální dvojče',
      de: 'KDME-23: digitaler Zwilling'
    },
    description: {
      ru: 'Доклад о проектировании комплекса через обратные задачи, НИЯУ МИФИ.',
      en: 'A talk on designing the system through inverse problems, MEPhI.',
      cs: 'Přednáška o návrhu komplexu pomocí inverzních úloh, MEPhI.',
      de: 'Vortrag über den Entwurf des Systems mittels inverser Aufgaben, MEPhI.'
    }
  },
  {
    id: 'inclusive-robotics-class',
    image: 'gallery/inclusive-robotics-class.jpg',
    category: 'inclusion',
    title: {
      ru: 'Занятие по робототехнике',
      en: 'Robotics class',
      cs: 'Hodina robotiky',
      de: 'Robotik-Unterricht'
    },
    description: {
      ru: 'Инклюзивное занятие: сборка электроники со школьниками и студентами.',
      en: 'An inclusive class: building electronics with school and university students.',
      cs: 'Inkluzivní hodina: stavba elektroniky se žáky a studenty.',
      de: 'Inklusiver Unterricht: Elektronik bauen mit Schülern und Studierenden.'
    }
  },
  {
    id: 'yakovlev-inclusive-lecture',
    image: 'gallery/yakovlev-inclusive-lecture.jpg',
    category: 'inclusion',
    title: {
      ru: 'Инклюзивная лекция об авиастроении',
      en: 'Inclusive lecture on aircraft construction',
      cs: 'Inkluzivní přednáška o letecké výrobě',
      de: 'Inklusive Vorlesung zum Flugzeugbau'
    },
    description: {
      ru: 'Лекция о конструкторе А. С. Яковлеве для слушателей с инвалидностью.',
      en: 'A lecture on the aircraft designer A. S. Yakovlev for an audience with disabilities.',
      cs: 'Přednáška o leteckém konstruktérovi A. S. Jakovlevovi pro posluchače s postižením.',
      de: 'Vortrag über den Flugzeugkonstrukteur A. S. Jakowlew für Menschen mit Behinderungen.'
    }
  },
  {
    id: 'mentorship-academy',
    image: 'gallery/mentorship-academy.jpg',
    category: 'team',
    title: {
      ru: 'Академия научного наставничества',
      en: 'Academy of Research Mentoring',
      cs: 'Akademie vědeckého mentoringu',
      de: 'Akademie für wissenschaftliches Mentoring'
    },
    description: {
      ru: 'Сертификаты по итогам программы подготовки научных наставников, 2024.',
      en: 'Certificates awarded on completion of the research mentor programme, 2024.',
      cs: 'Certifikáty po absolvování programu přípravy vědeckých mentorů, 2024.',
      de: 'Zertifikate nach Abschluss des Programms für wissenschaftliche Mentoren, 2024.'
    }
  },
  {
    id: 'vitte-readings-2024',
    image: 'gallery/vitte-readings-2024.jpg',
    category: 'science',
    title: {
      ru: 'Виттевские чтения — 2024',
      en: 'Witte Readings 2024',
      cs: 'Witteho čtení 2024',
      de: 'Witte-Lesungen 2024'
    },
    description: {
      ru: 'Международный конгресс молодой науки: доклад по КДМЕ-23.',
      en: 'International congress of young science: a talk on KDME-23.',
      cs: 'Mezinárodní kongres mladé vědy: příspěvek o KDME-23.',
      de: 'Internationaler Kongress der jungen Wissenschaft: Vortrag zu KDME-23.'
    }
  },
  {
    id: 'talk-podium',
    image: 'gallery/talk-podium.jpg',
    category: 'science',
    title: {
      ru: 'Выступление с трибуны',
      en: 'Speaking from the podium',
      cs: 'Vystoupení na pódiu',
      de: 'Vortrag am Rednerpult'
    },
    description: {
      ru: 'Научно-техническая конференция.',
      en: 'A scientific and technical conference.',
      cs: 'Vědeckotechnická konference.',
      de: 'Wissenschaftlich-technische Konferenz.'
    }
  },
  {
    id: 'roundtable',
    image: 'gallery/roundtable.jpg',
    category: 'science',
    title: {
      ru: 'Круглый стол',
      en: 'Round table',
      cs: 'Kulatý stůl',
      de: 'Runder Tisch'
    },
    description: {
      ru: 'Обсуждение технологических инициатив.',
      en: 'Discussing technology initiatives.',
      cs: 'Diskuse o technologických iniciativách.',
      de: 'Diskussion über Technologieinitiativen.'
    }
  },
  {
    id: 'uac-3d-printing',
    image: 'gallery/uac-3d-printing.jpg',
    category: 'science',
    title: {
      ru: 'Прототипирование в ОАК',
      en: 'Prototyping at UAC',
      cs: 'Prototypování v UAC',
      de: 'Prototyping bei UAC'
    },
    description: {
      ru: 'Разбор напечатанной детали на площадке Объединённой авиастроительной корпорации.',
      en: 'Reviewing a printed part at the United Aircraft Corporation site.',
      cs: 'Rozbor tištěného dílu v areálu United Aircraft Corporation.',
      de: 'Begutachtung eines gedruckten Bauteils bei der United Aircraft Corporation.'
    }
  },
  {
    id: 'uac-stand',
    image: 'gallery/uac-stand.jpg',
    category: 'team',
    title: {
      ru: 'Стенд авиационных проектов',
      en: 'Aviation projects stand',
      cs: 'Stánek leteckých projektů',
      de: 'Stand für Luftfahrtprojekte'
    },
    description: {
      ru: 'Разговор с участниками на выставочной площадке.',
      en: 'Talking with visitors at the exhibition.',
      cs: 'Rozhovor s účastníky na výstavě.',
      de: 'Gespräch mit Besuchern auf der Ausstellung.'
    }
  },
  {
    id: 'ano-team-meeting',
    image: 'gallery/ano-team-meeting.jpg',
    category: 'inclusion',
    title: {
      ru: 'Команда АНО «Открытые Перспективы»',
      en: 'The Open Perspectives team',
      cs: 'Tým Otevřených perspektiv',
      de: 'Das Team von „Offene Perspektiven“'
    },
    description: {
      ru: 'Рабочая встреча направления доступной информационной среды.',
      en: 'A working meeting of the accessible information environment programme.',
      cs: 'Pracovní schůzka programu přístupného informačního prostředí.',
      de: 'Arbeitstreffen des Programms für barrierefreie Informationsumgebung.'
    }
  },
  {
    id: 'summer-intensive',
    image: 'gallery/summer-intensive.jpg',
    category: 'inclusion',
    title: {
      ru: 'Летний инженерный интенсив',
      en: 'Summer engineering intensive',
      cs: 'Letní inženýrský intenziv',
      de: 'Sommer-Intensivkurs Technik'
    },
    description: {
      ru: 'Вручение сертификатов участникам интенсива.',
      en: 'Handing out certificates to the participants.',
      cs: 'Předávání certifikátů účastníkům.',
      de: 'Übergabe der Zertifikate an die Teilnehmenden.'
    }
  },
  {
    id: 'mentoring-lecture',
    image: 'gallery/mentoring-lecture.jpg',
    category: 'team',
    title: {
      ru: 'О научной работе — студентам',
      en: 'Talking research with students',
      cs: 'O vědecké práci se studenty',
      de: 'Über Forschung mit Studierenden'
    },
    description: {
      ru: 'Встреча о первых научных работах, НИОКР и проектах.',
      en: 'A session on first research papers, R&D and projects.',
      cs: 'Setkání o prvních vědeckých pracích, výzkumu a projektech.',
      de: 'Treffen zu ersten wissenschaftlichen Arbeiten, F&E und Projekten.'
    }
  },
  {
    id: 'mentorship-academy-talk',
    image: 'gallery/mentorship-academy-talk.jpg',
    category: 'team',
    title: {
      ru: 'Наставничество в действии',
      en: 'Mentoring in practice',
      cs: 'Mentoring v praxi',
      de: 'Mentoring in der Praxis'
    },
    description: {
      ru: 'Разговор с участниками программы.',
      en: 'Talking with the programme participants.',
      cs: 'Rozhovor s účastníky programu.',
      de: 'Gespräch mit den Programmteilnehmenden.'
    }
  },
  {
    id: 'education-expo',
    image: 'gallery/education-expo.jpg',
    category: 'team',
    title: {
      ru: 'Выставка «Образование»',
      en: 'The Education exhibition',
      cs: 'Výstava Vzdělávání',
      de: 'Bildungsmesse'
    },
    description: {
      ru: 'Работа с абитуриентами на московской международной выставке.',
      en: 'Working with applicants at the Moscow international exhibition.',
      cs: 'Práce s uchazeči na moskevské mezinárodní výstavě.',
      de: 'Arbeit mit Studienbewerbern auf der internationalen Messe in Moskau.'
    }
  },
  {
    id: 'transneft-conference-1',
    image: 'gallery/transneft-conference-1.jpg',
    category: 'science',
    title: {
      ru: 'Отраслевая конференция',
      en: 'Industry conference',
      cs: 'Oborová konference',
      de: 'Branchenkonferenz'
    },
    description: {
      ru: 'НИИ Транснефть: разбор материалов в зале конференции.',
      en: 'Transneft R&D Institute: going through materials in the conference hall.',
      cs: 'Výzkumný ústav Transněfť: procházení materiálů v sále konference.',
      de: 'Forschungsinstitut Transneft: Materialien im Konferenzsaal.'
    }
  },
  {
    id: 'transneft-conference-2',
    image: 'gallery/transneft-conference-2.jpg',
    category: 'science',
    title: {
      ru: 'В зале конференции',
      en: 'In the conference hall',
      cs: 'V sále konference',
      de: 'Im Konferenzsaal'
    },
    description: {
      ru: 'НИИ Транснефть, сектор моделирования технических систем.',
      en: 'Transneft R&D Institute, technical systems modelling unit.',
      cs: 'Výzkumný ústav Transněfť, sektor modelování technických systémů.',
      de: 'Forschungsinstitut Transneft, Bereich Modellierung technischer Systeme.'
    }
  },
  {
    id: 'industry-conference',
    image: 'gallery/industry-conference.jpg',
    category: 'science',
    title: {
      ru: 'Отраслевая конференция',
      en: 'Industry conference',
      cs: 'Oborová konference',
      de: 'Branchenkonferenz'
    },
    description: {
      ru: 'Обсуждение проектов с представителями отрасли.',
      en: 'Discussing projects with industry representatives.',
      cs: 'Diskuse o projektech se zástupci oboru.',
      de: 'Projektgespräche mit Branchenvertretern.'
    }
  },
  {
    id: 'tek-olympiad',
    image: 'gallery/tek-olympiad.jpg',
    category: 'team',
    title: {
      ru: 'Олимпиада «Автоматизация и информатизация ТЭК»',
      en: 'Olympiad on automation and IT in the energy sector',
      cs: 'Olympiáda Automatizace a informatizace energetiky',
      de: 'Olympiade „Automatisierung und Informatisierung der Energiewirtschaft“'
    },
    description: {
      ru: 'Общее фото участников и организаторов, Губкинский университет.',
      en: 'Group photo of participants and organisers, Gubkin University.',
      cs: 'Společná fotografie účastníků a organizátorů, Gubkinova univerzita.',
      de: 'Gruppenfoto von Teilnehmenden und Organisatoren, Gubkin-Universität.'
    }
  },
  {
    id: 'admissions-bmstu',
    image: 'gallery/admissions-bmstu.jpg',
    category: 'team',
    title: {
      ru: 'Приёмная комиссия МГТУ',
      en: 'Bauman University admissions office',
      cs: 'Přijímací kancelář Baumanovy univerzity',
      de: 'Zulassungsstelle der Bauman-Universität'
    },
    description: {
      ru: 'Работа с абитуриентами: «Чек-лист абитуриента».',
      en: 'Working with applicants: the applicant checklist.',
      cs: 'Práce s uchazeči: checklist uchazeče.',
      de: 'Arbeit mit Bewerbern: die Bewerber-Checkliste.'
    }
  },
  {
    id: 'talk-bmstu',
    image: 'gallery/talk-bmstu.jpg',
    category: 'science',
    title: {
      ru: 'Трибуна МГТУ имени Н. Э. Баумана',
      en: 'At the Bauman University podium',
      cs: 'Na pódiu Baumanovy univerzity',
      de: 'Am Rednerpult der Bauman-Universität'
    },
    description: {
      ru: 'Выступление на университетской конференции.',
      en: 'Speaking at a university conference.',
      cs: 'Vystoupení na univerzitní konferenci.',
      de: 'Vortrag auf einer Universitätskonferenz.'
    }
  },
  {
    id: 'portrait-suit',
    image: 'gallery/portrait-suit.jpg',
    category: 'portrait',
    title: {
      ru: 'Панельная дискуссия',
      en: 'Panel discussion',
      cs: 'Panelová diskuse',
      de: 'Podiumsdiskussion'
    },
    description: {
      ru: 'Участие в панельной дискуссии.',
      en: 'Taking part in a panel discussion.',
      cs: 'Účast na panelové diskusi.',
      de: 'Teilnahme an einer Podiumsdiskussion.'
    }
  },
  {
    id: 'portrait-mentor',
    image: 'gallery/portrait-mentor.jpg',
    category: 'portrait',
    title: {
      ru: 'Наставник факультета РК',
      en: 'Mentor of the Robotics faculty',
      cs: 'Mentor fakulty robotiky',
      de: 'Mentor der Fakultät für Robotik'
    }
  },
  {
    id: 'portrait-student-council',
    image: 'gallery/portrait-student-council.jpg',
    category: 'portrait',
    title: {
      ru: 'Студенческий совет факультета РК',
      en: 'Student council of the Robotics faculty',
      cs: 'Studentská rada fakulty robotiky',
      de: 'Studierendenrat der Fakultät für Robotik'
    }
  },
  ...galleryMore
]

export const getGalleryItems = (locale: Locale): GalleryItem[] =>
  galleryData.map((item) => ({
    id: item.id,
    image: item.image,
    category: item.category,
    title: pick(item.title, locale),
    description: item.description ? pick(item.description, locale) : undefined
  }))

/** Портрет для главной страницы: панельная дискуссия, костюм и галстук. */
export const heroPortrait = 'gallery/portrait-suit.jpg'

/** Портрет для страницы «О себе»: тот же кадр в костюме, что и на главной. */
export const aboutPortrait = 'gallery/portrait-suit.jpg'

/** Полный путь с учётом базового адреса сайта. */
export const assetUrl = (path: string): string => `${import.meta.env.BASE_URL}${path}`
