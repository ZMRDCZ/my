import { type L, type Locale, pick } from '@/i18n/core'
import type { Project, ProjectFilter } from '../types'

const filtersData: { value: string; label: L }[] = [
  {
    value: 'all',
    label: { ru: 'Все проекты', en: 'All projects', cs: 'Všechny projekty', de: 'Alle Projekte' }
  },
  {
    value: 'digital',
    label: {
      ru: 'Цифровизация ТЭК',
      en: 'Energy digitalisation',
      cs: 'Digitalizace energetiky',
      de: 'Digitalisierung der Energiewirtschaft'
    }
  },
  {
    value: 'robotics',
    label: { ru: 'Робототехника', en: 'Robotics', cs: 'Robotika', de: 'Robotik' }
  },
  {
    value: 'web',
    label: {
      ru: 'Веб-разработка',
      en: 'Web development',
      cs: 'Webový vývoj',
      de: 'Webentwicklung'
    }
  },
  {
    value: 'inclusive',
    label: {
      ru: 'Инклюзивные инициативы',
      en: 'Inclusive initiatives',
      cs: 'Inkluzivní iniciativy',
      de: 'Inklusive Initiativen'
    }
  },
  {
    value: 'education',
    label: { ru: 'Образование', en: 'Education', cs: 'Vzdělávání', de: 'Bildung' }
  },
  {
    value: 'organization',
    label: {
      ru: 'Организационные',
      en: 'Organisational',
      cs: 'Organizační',
      de: 'Organisatorisch'
    }
  }
]

export const getProjectFilters = (locale: Locale): ProjectFilter[] =>
  filtersData.map((item) => ({ value: item.value, label: pick(item.label, locale) }))

type ProjectSource = {
  id: number
  icon: string
  type: string
  archived?: boolean
  participants?: string
  publicationIds?: string[]
  images?: string[]
  title: L
  shortDescription: L
  fullDescription: L
  category: L
  technologies: L<string[]>
  duration: L
  status: L
  achievements: L<string[]>
  role?: L
  customer?: L
}

const projectsData: ProjectSource[] = [
  {
    id: 9,
    icon: 'tools',
    type: 'digital',
    participants: '2',
    images: ['gallery/more/014.jpg', 'gallery/more/011.jpg'],
    title: {
      ru: 'Сети газораспределения для КОМПАС-3D',
      en: 'Gas distribution networks for KOMPAS-3D',
      cs: 'Plynovodní sítě pro KOMPAS-3D',
      de: 'Gasverteilnetze für KOMPAS-3D'
    },
    shortDescription: {
      ru: 'Автоматизированное проектирование сетей газораспределения в среде КОМПАС-3D',
      en: 'Automated design of gas distribution networks inside KOMPAS-3D',
      cs: 'Automatizovaný návrh plynovodních sítí v prostředí KOMPAS-3D',
      de: 'Automatisierte Auslegung von Gasverteilnetzen in KOMPAS-3D'
    },
    fullDescription: {
      ru:
        'Приложение для КОМПАС-3D, автоматизирующее проектирование сетей газораспределения: ' +
        'параметрические модели элементов сети, компоновка трассы и выпуск проектной документации. ' +
        'Проект конкурса «Инноватика» АО «Мособлгаз».',
      en:
        'A KOMPAS-3D add-in that automates the design of gas distribution networks: parametric ' +
        'models of network elements, route layout and generation of design documentation. ' +
        'Entered in the Innovatika contest run by Mosoblgaz.',
      cs:
        'Nadstavba pro KOMPAS-3D automatizující návrh plynovodních sítí: parametrické modely ' +
        'prvků sítě, vedení trasy a tvorba projektové dokumentace. Projekt soutěže Innovatika ' +
        'společnosti Mosoblgaz.',
      de:
        'Ein KOMPAS-3D-Add-in zur automatisierten Auslegung von Gasverteilnetzen: parametrische ' +
        'Modelle der Netzelemente, Trassenführung und Erzeugung der Projektdokumentation. ' +
        'Projekt des Innovatika-Wettbewerbs von Mosoblgaz.'
    },
    category: {
      ru: 'Инженерное ПО',
      en: 'Engineering software',
      cs: 'Inženýrský software',
      de: 'Ingenieursoftware'
    },
    technologies: {
      ru: ['КОМПАС-3D', 'API САПР', 'Газораспределение', 'Проектная документация'],
      en: ['KOMPAS-3D', 'CAD API', 'Gas distribution', 'Design documentation'],
      cs: ['KOMPAS-3D', 'CAD API', 'Distribuce plynu', 'Projektová dokumentace'],
      de: ['KOMPAS-3D', 'CAD-API', 'Gasverteilung', 'Projektdokumentation']
    },
    duration: { ru: '2025', en: '2025', cs: '2025', de: '2025' },
    status: {
      ru: 'Победитель конкурса',
      en: 'Contest winner',
      cs: 'Vítěz soutěže',
      de: 'Wettbewerbssieger'
    },
    customer: {
      ru: 'АО «Мособлгаз», конкурс «Инноватика»',
      en: 'Mosoblgaz, Innovatika contest',
      cs: 'Mosoblgaz, soutěž Innovatika',
      de: 'Mosoblgaz, Wettbewerb Innovatika'
    },
    achievements: {
      ru: [
        'Победитель «Инноватики» АО «Мособлгаз»',
        'Специальный приз имени А. И. Гордюхина',
        'Команда: Дмитрий Комаров, Степан Матвеев'
      ],
      en: [
        'Winner of the Innovatika contest, Mosoblgaz',
        'A. I. Gordyukhin special prize',
        'Team: Dmitry Komarov, Stepan Matveev'
      ],
      cs: [
        'Vítěz soutěže Innovatika společnosti Mosoblgaz',
        'Zvláštní cena A. I. Gorďuchina',
        'Tým: Dmitry Komarov, Stepan Matvejev'
      ],
      de: [
        'Sieger des Innovatika-Wettbewerbs von Mosoblgaz',
        'Sonderpreis „A. I. Gordjuchin“',
        'Team: Dmitry Komarov, Stepan Matwejew'
      ]
    }
  },
  {
    id: 10,
    icon: 'brain',
    type: 'digital',
    participants: '2',
    images: [
      'gallery/talk-gubkin-asu.jpg',
      'gallery/talk-podium.jpg',
      'gallery/industry-conference.jpg',
      'gallery/more/012.jpg'
    ],
    publicationIds: ['aerospace-knowledge-2025'],
    title: {
      ru: 'Управление отраслевыми знаниями в ТЭК',
      en: 'Industry knowledge management in the energy sector',
      cs: 'Správa oborových znalostí v energetice',
      de: 'Branchenwissensmanagement in der Energiewirtschaft'
    },
    shortDescription: {
      ru: 'Система структурирования нормативных требований и инженерной информации',
      en: 'A system for structuring regulatory requirements and engineering information',
      cs: 'Systém pro strukturování normativních požadavků a inženýrských informací',
      de: 'System zur Strukturierung von Normanforderungen und Engineering-Informationen'
    },
    fullDescription: {
      ru:
        'Система управления отраслевыми знаниями топливно-энергетического комплекса: нормативные ' +
        'требования, данные об оборудовании и инженерная информация приводятся к ' +
        'машиноинтерпретируемому виду и связываются с этапами жизненного цикла объекта.',
      en:
        'A knowledge management system for the energy sector: regulatory requirements, equipment ' +
        'data and engineering information are converted into a machine-interpretable form and ' +
        'linked to the stages of a facility’s life cycle.',
      cs:
        'Systém správy oborových znalostí v energetice: normativní požadavky, data o zařízeních ' +
        'a inženýrské informace se převádějí do strojově interpretovatelné podoby a propojují ' +
        's etapami životního cyklu objektu.',
      de:
        'Wissensmanagementsystem für die Energiewirtschaft: Normanforderungen, Anlagendaten und ' +
        'Engineering-Informationen werden in eine maschinell interpretierbare Form überführt und ' +
        'mit den Lebenszyklusphasen der Anlage verknüpft.'
    },
    category: {
      ru: 'Управление знаниями',
      en: 'Knowledge management',
      cs: 'Správa znalostí',
      de: 'Wissensmanagement'
    },
    technologies: {
      ru: ['Онтологии', 'OWL', 'Управление требованиями', 'ТЭК'],
      en: ['Ontologies', 'OWL', 'Requirements management', 'Energy sector'],
      cs: ['Ontologie', 'OWL', 'Správa požadavků', 'Energetika'],
      de: ['Ontologien', 'OWL', 'Anforderungsmanagement', 'Energiewirtschaft']
    },
    duration: { ru: '2025', en: '2025', cs: '2025', de: '2025' },
    status: {
      ru: 'Победитель конкурса',
      en: 'Contest winner',
      cs: 'Vítěz soutěže',
      de: 'Wettbewerbssieger'
    },
    customer: {
      ru: 'АО «Мособлгаз», конкурс «Инноватика»',
      en: 'Mosoblgaz, Innovatika contest',
      cs: 'Mosoblgaz, soutěž Innovatika',
      de: 'Mosoblgaz, Wettbewerb Innovatika'
    },
    achievements: {
      ru: [
        'Победитель «Инноватики» АО «Мособлгаз»',
        'Машиноинтерпретируемое представление нормативных требований',
        'Команда: Дмитрий Комаров, София Миронова'
      ],
      en: [
        'Winner of the Innovatika contest, Mosoblgaz',
        'Machine-interpretable representation of regulatory requirements',
        'Team: Dmitry Komarov, Sofia Mironova'
      ],
      cs: [
        'Vítěz soutěže Innovatika společnosti Mosoblgaz',
        'Strojově interpretovatelná reprezentace normativních požadavků',
        'Tým: Dmitry Komarov, Sofia Mironovová'
      ],
      de: [
        'Sieger des Innovatika-Wettbewerbs von Mosoblgaz',
        'Maschinell interpretierbare Darstellung von Normanforderungen',
        'Team: Dmitry Komarov, Sofia Mironowa'
      ]
    }
  },
  {
    id: 11,
    icon: 'puzzle',
    type: 'digital',
    images: ['gallery/transneft-conference-1.jpg', 'gallery/transneft-conference-2.jpg'],
    title: {
      ru: 'Онтологии в трубопроводном транспорте',
      en: 'Ontologies for pipeline transport',
      cs: 'Ontologie v potrubní dopravě',
      de: 'Ontologien im Pipelinetransport'
    },
    shortDescription: {
      ru: 'Формализация отраслевых знаний и требований к оборудованию трубопроводного транспорта',
      en: 'Formalising industry knowledge and equipment requirements for pipeline transport',
      cs: 'Formalizace oborových znalostí a požadavků na zařízení potrubní dopravy',
      de: 'Formalisierung von Branchenwissen und Anlagenanforderungen im Pipelinetransport'
    },
    fullDescription: {
      ru:
        'Проектная команда по разработке онтологий для трубопроводного транспорта: построение ' +
        'онтологических моделей предметной области, версионирование моделей, структурирование ' +
        'нормативных требований и машиноинтерпретируемое представление инженерной информации ' +
        'на протяжении жизненного цикла объектов.',
      en:
        'A project team developing ontologies for pipeline transport: domain ontology models, ' +
        'model versioning, structuring of regulatory requirements and machine-interpretable ' +
        'engineering information across the facility life cycle.',
      cs:
        'Projektový tým pro ontologie v potrubní dopravě: tvorba doménových ontologických modelů, ' +
        'verzování modelů, strukturování normativních požadavků a strojově interpretovatelné ' +
        'inženýrské informace v průběhu životního cyklu objektů.',
      de:
        'Projektteam für Ontologien im Pipelinetransport: Aufbau von Domänen-Ontologiemodellen, ' +
        'Versionierung der Modelle, Strukturierung von Normanforderungen und maschinell ' +
        'interpretierbare Engineering-Informationen über den Lebenszyklus der Anlagen.'
    },
    category: {
      ru: 'Исследовательский проект',
      en: 'Research project',
      cs: 'Výzkumný projekt',
      de: 'Forschungsprojekt'
    },
    technologies: {
      ru: ['Онтологическое моделирование', 'Жизненный цикл', 'Инженерные данные'],
      en: ['Ontology modelling', 'Life cycle', 'Engineering data'],
      cs: ['Ontologické modelování', 'Životní cyklus', 'Inženýrská data'],
      de: ['Ontologiemodellierung', 'Lebenszyklus', 'Engineering-Daten']
    },
    duration: { ru: '2025—2026', en: '2025—2026', cs: '2025—2026', de: '2025—2026' },
    status: {
      ru: 'В разработке',
      en: 'In progress',
      cs: 'Ve vývoji',
      de: 'In Arbeit'
    },
    customer: {
      ru: 'НИИ Транснефть',
      en: 'Transneft R&D Institute',
      cs: 'Výzkumný ústav Transněfť',
      de: 'Forschungsinstitut Transneft'
    },
    role: {
      ru: 'Научный сотрудник',
      en: 'Research fellow',
      cs: 'Vědecký pracovník',
      de: 'Wissenschaftlicher Mitarbeiter'
    },
    achievements: {
      ru: [
        'Онтологические модели предметной области',
        'Версионирование онтологических моделей',
        'Развитие ИИ в инженерных контурах'
      ],
      en: [
        'Domain ontology models',
        'Versioning of ontology models',
        'Applying AI in engineering workflows'
      ],
      cs: [
        'Doménové ontologické modely',
        'Verzování ontologických modelů',
        'Rozvoj AI v inženýrských procesech'
      ],
      de: [
        'Domänen-Ontologiemodelle',
        'Versionierung von Ontologiemodellen',
        'KI in Engineering-Prozessen'
      ]
    }
  },
  {
    id: 12,
    icon: 'factory',
    type: 'digital',
    images: ['gallery/more/088.jpg'],
    publicationIds: [
      'lng-ontology-zero-lifecycle-2025',
      'lng-critical-equipment-2025',
      'lng-predictive-maintenance-2025'
    ],
    title: {
      ru: 'Цифровизация ТОиР заводов СПГ',
      en: 'Digitalisation of maintenance at LNG plants',
      cs: 'Digitalizace údržby závodů na LNG',
      de: 'Digitalisierung der Instandhaltung von LNG-Anlagen'
    },
    shortDescription: {
      ru: 'Цифровое обеспечение технического обслуживания и ремонта оборудования заводов СПГ',
      en: 'Digital support for maintenance and repair of LNG plant equipment',
      cs: 'Digitální podpora údržby a oprav zařízení závodů na LNG',
      de: 'Digitale Unterstützung von Wartung und Instandsetzung in LNG-Anlagen'
    },
    fullDescription: {
      ru:
        'Проект цифровизации технического обслуживания и ремонта оборудования заводов ' +
        'по производству сжиженного природного газа: онтологическое описание оборудования, ' +
        'подходы к предиктивному ТОиР и связь с этапами жизненного цикла.',
      en:
        'A project on digitalising maintenance and repair at liquefied natural gas plants: ' +
        'ontological description of equipment, approaches to predictive maintenance and links ' +
        'to life-cycle stages.',
      cs:
        'Projekt digitalizace údržby a oprav v závodech na zkapalněný zemní plyn: ontologický ' +
        'popis zařízení, přístupy k prediktivní údržbě a vazba na etapy životního cyklu.',
      de:
        'Projekt zur Digitalisierung von Wartung und Instandsetzung in Anlagen für verflüssigtes ' +
        'Erdgas: ontologische Beschreibung der Ausrüstung, Ansätze zur vorausschauenden ' +
        'Instandhaltung und Verknüpfung mit den Lebenszyklusphasen.'
    },
    category: {
      ru: 'Промышленная цифровизация',
      en: 'Industrial digitalisation',
      cs: 'Průmyslová digitalizace',
      de: 'Industrielle Digitalisierung'
    },
    technologies: {
      ru: ['ТОиР', 'СПГ', 'Онтологии', 'Эксплуатация оборудования'],
      en: ['Maintenance', 'LNG', 'Ontologies', 'Equipment operation'],
      cs: ['Údržba', 'LNG', 'Ontologie', 'Provoz zařízení'],
      de: ['Instandhaltung', 'LNG', 'Ontologien', 'Anlagenbetrieb']
    },
    duration: { ru: '2025', en: '2025', cs: '2025', de: '2025' },
    status: {
      ru: 'Победитель чемпионата',
      en: 'Championship winner',
      cs: 'Vítěz šampionátu',
      de: 'Sieger der Championship'
    },
    achievements: {
      ru: ['Победитель чемпионата «Газпром Линде Инжиниринг»'],
      en: ['Winner of the Gazprom Linde Engineering championship'],
      cs: ['Vítěz šampionátu Gazprom Linde Engineering'],
      de: ['Sieger der Championship von Gazprom Linde Engineering']
    }
  },
  {
    id: 13,
    icon: 'robot',
    type: 'robotics',
    participants: '2',
    images: ['gallery/kdme23-stand.jpg', 'gallery/kdme23-talk-mephi.jpg'],
    publicationIds: [
      'kdme23-inspection-2025',
      'kdme23-drive-paper-2025',
      'kdme23-drive-abstract-2025',
      'kdme23-inverse-tasks-2025',
      'kdme23-design-2024',
      'kdme23-christie-2024',
      'kdme23-primary-calc-2024'
    ],
    title: {
      ru: 'Робототехнический комплекс КДМЕ-23',
      en: 'KDME-23 robotic system',
      cs: 'Robotický komplex KDME-23',
      de: 'Robotersystem KDME-23'
    },
    shortDescription: {
      ru: 'Многоцелевой мобильный робототехнический комплекс с адаптивной ходовой частью',
      en: 'A multi-purpose mobile robotic system with an adaptive chassis',
      cs: 'Víceúčelový mobilní robotický komplex s adaptivním podvozkem',
      de: 'Mehrzweck-Mobilrobotersystem mit adaptivem Fahrwerk'
    },
    fullDescription: {
      ru:
        'Многоцелевой мобильный робототехнический комплекс КДМЕ-23: адаптивные колёса, ' +
        'подвеска Кристи, система «Развал», цифровая платформа управления и автоматическая ' +
        'генерация конфигураций комплекса на основе имитационной модели.',
      en:
        'KDME-23, a multi-purpose mobile robotic system: adaptive wheels, Christie suspension, ' +
        'the “Razval” camber system, a digital control platform and automatic generation of ' +
        'system configurations from a simulation model.',
      cs:
        'Víceúčelový mobilní robotický komplex KDME-23: adaptivní kola, Christieho zavěšení, ' +
        'systém odklonu kol, digitální řídicí platforma a automatické generování konfigurací ' +
        'na základě simulačního modelu.',
      de:
        'Mehrzweck-Mobilrobotersystem KDME-23: adaptive Räder, Christie-Federung, Sturzsystem, ' +
        'digitale Steuerungsplattform und automatische Erzeugung von Systemkonfigurationen ' +
        'aus einem Simulationsmodell.'
    },
    category: { ru: 'Робототехника', en: 'Robotics', cs: 'Robotika', de: 'Robotik' },
    technologies: {
      ru: ['Робототехника', 'Имитационное моделирование', 'Расчёты прочности', 'САПР'],
      en: ['Robotics', 'Simulation modelling', 'Structural analysis', 'CAD'],
      cs: ['Robotika', 'Simulační modelování', 'Pevnostní výpočty', 'CAD'],
      de: ['Robotik', 'Simulationsmodellierung', 'Festigkeitsberechnung', 'CAD']
    },
    duration: { ru: '2023—2025', en: '2023—2025', cs: '2023—2025', de: '2023—2025' },
    status: { ru: 'В разработке', en: 'In progress', cs: 'Ve vývoji', de: 'In Arbeit' },
    role: {
      ru: 'Разработчик: программирование и проектирование',
      en: 'Developer: programming and design',
      cs: 'Vývojář: programování a konstrukce',
      de: 'Entwickler: Programmierung und Konstruktion'
    },
    achievements: {
      ru: [
        'I место на выставке «Политехника» (2024)',
        'Семь публикаций и докладов',
        'Команда: Дмитрий Комаров, Егор Морозов'
      ],
      en: [
        'First place at the Politekhnika exhibition (2024)',
        'Seven publications and conference talks',
        'Team: Dmitry Komarov, Egor Morozov'
      ],
      cs: [
        'První místo na výstavě Politechnika (2024)',
        'Sedm publikací a konferenčních příspěvků',
        'Tým: Dmitry Komarov, Jegor Morozov'
      ],
      de: [
        'Erster Platz auf der Ausstellung „Politechnika“ (2024)',
        'Sieben Publikationen und Konferenzbeiträge',
        'Team: Dmitry Komarov, Jegor Morosow'
      ]
    }
  },
  {
    id: 1,
    icon: 'rocket',
    type: 'organization',
    images: ['gallery/portrait-student-council.jpg'],
    title: {
      ru: 'Студенческий совет факультета РК',
      en: 'Student council of the Robotics faculty',
      cs: 'Studentská rada fakulty robotiky',
      de: 'Studierendenrat der Fakultät für Robotik'
    },
    shortDescription: {
      ru: 'Создание студенческого совета факультета «Робототехника и комплексная автоматизация»',
      en: 'Founding the student council of the Robotics and Integrated Automation faculty',
      cs: 'Založení studentské rady fakulty robotiky a komplexní automatizace',
      de: 'Gründung des Studierendenrats der Fakultät für Robotik und Automatisierung'
    },
    fullDescription: {
      ru:
        'Один из создателей студенческого совета факультета РК МГТУ имени Н. Э. Баумана. ' +
        'Совет занимается организацией мероприятий, поддержкой студентов и развитием ' +
        'академической среды факультета.',
      en:
        'Co-founder of the student council of the Robotics faculty at Bauman Moscow State ' +
        'Technical University. The council organises events, supports students and develops ' +
        'the academic environment of the faculty.',
      cs:
        'Spoluzakladatel studentské rady fakulty robotiky Baumanovy univerzity. Rada pořádá akce, ' +
        'podporuje studenty a rozvíjí akademické prostředí fakulty.',
      de:
        'Mitbegründer des Studierendenrats der Fakultät für Robotik an der Bauman-Universität. ' +
        'Der Rat organisiert Veranstaltungen, unterstützt Studierende und entwickelt das ' +
        'akademische Umfeld der Fakultät.'
    },
    category: {
      ru: 'Организационный проект',
      en: 'Organisational project',
      cs: 'Organizační projekt',
      de: 'Organisationsprojekt'
    },
    technologies: {
      ru: ['Организация', 'Проектный менеджмент', 'Работа с сообществом'],
      en: ['Organisation', 'Project management', 'Community work'],
      cs: ['Organizace', 'Projektový management', 'Práce s komunitou'],
      de: ['Organisation', 'Projektmanagement', 'Community-Arbeit']
    },
    duration: { ru: '2023—2024', en: '2023—2024', cs: '2023—2024', de: '2023—2024' },
    status: { ru: 'Завершён', en: 'Completed', cs: 'Dokončeno', de: 'Abgeschlossen' },
    role: { ru: 'Сооснователь', en: 'Co-founder', cs: 'Spoluzakladatel', de: 'Mitbegründer' },
    achievements: {
      ru: ['Создание структуры совета', 'Организация мероприятий факультета'],
      en: ['Set up the council structure', 'Organised faculty events'],
      cs: ['Vytvoření struktury rady', 'Organizace fakultních akcí'],
      de: ['Aufbau der Ratsstruktur', 'Organisation von Fakultätsveranstaltungen']
    }
  },
  {
    id: 2,
    icon: 'users',
    type: 'education',
    images: ['gallery/mentoring-lecture.jpg', 'gallery/more/053.jpg'],
    title: {
      ru: 'Система наставничества МГТУ',
      en: 'Mentoring system at Bauman University',
      cs: 'Systém mentoringu Baumanovy univerzity',
      de: 'Mentoring-System der Bauman-Universität'
    },
    shortDescription: {
      ru: 'Направление наставничества, выстроенное с нуля',
      en: 'A mentoring programme built from scratch',
      cs: 'Mentoringový program vybudovaný od nuly',
      de: 'Ein von Grund auf aufgebautes Mentoring-Programm'
    },
    fullDescription: {
      ru:
        'Разработка и запуск системы наставничества в МГТУ имени Н. Э. Баумана: до этого ' +
        'системы наставничества в университете не было. Методология, отбор и подготовка ' +
        'наставников, сопровождение студентов младших курсов.',
      en:
        'Designing and launching the mentoring system at Bauman Moscow State Technical ' +
        'University, which previously had none: methodology, selection and training of mentors, ' +
        'support for junior students.',
      cs:
        'Návrh a spuštění systému mentoringu na Baumanově univerzitě, která jej dosud neměla: ' +
        'metodika, výběr a příprava mentorů, podpora studentů nižších ročníků.',
      de:
        'Konzeption und Start des Mentoring-Systems an der Bauman-Universität, die zuvor keines ' +
        'hatte: Methodik, Auswahl und Schulung von Mentoren, Begleitung von Studienanfängern.'
    },
    category: {
      ru: 'Образовательная инициатива',
      en: 'Educational initiative',
      cs: 'Vzdělávací iniciativa',
      de: 'Bildungsinitiative'
    },
    technologies: {
      ru: ['Методология наставничества', 'Обучение', 'Организация'],
      en: ['Mentoring methodology', 'Training', 'Organisation'],
      cs: ['Metodika mentoringu', 'Školení', 'Organizace'],
      de: ['Mentoring-Methodik', 'Schulung', 'Organisation']
    },
    duration: { ru: 'с 2023 г.', en: 'since 2023', cs: 'od roku 2023', de: 'seit 2023' },
    status: { ru: 'Активный', en: 'Active', cs: 'Aktivní', de: 'Aktiv' },
    role: {
      ru: 'Руководитель направления',
      en: 'Programme lead',
      cs: 'Vedoucí programu',
      de: 'Programmleiter'
    },
    achievements: {
      ru: [
        'Создание методологии наставничества',
        'Подготовка наставников',
        'Организация межвузовской конференции по наставничеству'
      ],
      en: [
        'Created the mentoring methodology',
        'Trained mentors',
        'Organised an inter-university conference on mentoring'
      ],
      cs: [
        'Vytvoření metodiky mentoringu',
        'Příprava mentorů',
        'Organizace mezivysokoškolské konference o mentoringu'
      ],
      de: [
        'Entwicklung der Mentoring-Methodik',
        'Ausbildung von Mentoren',
        'Organisation einer hochschulübergreifenden Mentoring-Konferenz'
      ]
    }
  },
  {
    id: 4,
    icon: 'coins',
    type: 'inclusive',
    images: ['gallery/inclusive-robotics-class.jpg'],
    title: {
      ru: 'Грант Росмолодёжи «Открытые Перспективы»',
      en: 'Rosmolodezh grant “Open Perspectives”',
      cs: 'Grant Rosmoloděž „Otevřené perspektivy“',
      de: 'Rosmolodjosch-Förderung „Offene Perspektiven“'
    },
    shortDescription: {
      ru: 'Цикл лекций по робототехнике на русском жестовом языке',
      en: 'A series of robotics lectures in Russian Sign Language',
      cs: 'Cyklus přednášek o robotice v ruském znakovém jazyce',
      de: 'Vorlesungsreihe zur Robotik in russischer Gebärdensprache'
    },
    fullDescription: {
      ru:
        'Победа в грантовом конкурсе Росмолодёжи (300 000 ₽) и реализация проекта: ' +
        'лекции по робототехнике на русском жестовом языке для школьников и студентов ' +
        'с нарушениями слуха.',
      en:
        'Winning the Rosmolodezh grant competition (RUB 300,000) and delivering the project: ' +
        'robotics lectures in Russian Sign Language for deaf and hard-of-hearing school and ' +
        'university students.',
      cs:
        'Vítězství v grantové soutěži Rosmoloděž (300 000 ₽) a realizace projektu: přednášky ' +
        'o robotice v ruském znakovém jazyce pro neslyšící žáky a studenty.',
      de:
        'Sieg im Förderwettbewerb von Rosmolodjosch (300 000 ₽) und Umsetzung des Projekts: ' +
        'Robotik-Vorlesungen in russischer Gebärdensprache für gehörlose Schülerinnen, Schüler ' +
        'und Studierende.'
    },
    category: {
      ru: 'Грантовый проект',
      en: 'Grant project',
      cs: 'Grantový projekt',
      de: 'Förderprojekt'
    },
    technologies: {
      ru: ['Проектный менеджмент', 'РЖЯ', 'Инклюзивные технологии'],
      en: ['Project management', 'Russian Sign Language', 'Inclusive technologies'],
      cs: ['Projektový management', 'Ruský znakový jazyk', 'Inkluzivní technologie'],
      de: ['Projektmanagement', 'Russische Gebärdensprache', 'Inklusive Technologien']
    },
    duration: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    status: { ru: 'Завершён', en: 'Completed', cs: 'Dokončeno', de: 'Abgeschlossen' },
    role: {
      ru: 'Руководитель команды, переводчик РЖЯ',
      en: 'Team lead and sign language interpreter',
      cs: 'Vedoucí týmu a tlumočník znakového jazyka',
      de: 'Teamleiter und Gebärdensprachdolmetscher'
    },
    achievements: {
      ru: ['Грант 300 000 ₽', 'Цикл лекций по робототехнике на РЖЯ'],
      en: ['RUB 300,000 grant', 'A series of robotics lectures in Russian Sign Language'],
      cs: ['Grant 300 000 ₽', 'Cyklus přednášek o robotice ve znakovém jazyce'],
      de: ['Förderung über 300 000 ₽', 'Vorlesungsreihe zur Robotik in Gebärdensprache']
    }
  },
  {
    id: 5,
    icon: 'star',
    type: 'inclusive',
    images: ['gallery/ano-team-meeting.jpg'],
    title: {
      ru: 'АНО «Открытые Перспективы»',
      en: 'Open Perspectives non-profit',
      cs: 'Nezisková organizace Otevřené perspektivy',
      de: 'Gemeinnützige Organisation „Offene Perspektiven“'
    },
    shortDescription: {
      ru: 'Направление доступной информационной среды',
      en: 'Accessible information environment programme',
      cs: 'Program přístupného informačního prostředí',
      de: 'Programm für barrierefreie Informationsumgebung'
    },
    fullDescription: {
      ru:
        'Работа в АНО «Открытые Перспективы»: адаптация интерфейсов, переводы и обеспечение ' +
        'доступности информации для лиц с ограниченными возможностями здоровья.',
      en:
        'Work at the Open Perspectives non-profit: adapting interfaces, interpreting and making ' +
        'information accessible to people with disabilities.',
      cs:
        'Práce v neziskové organizaci Otevřené perspektivy: úpravy rozhraní, tlumočení ' +
        'a zpřístupňování informací osobám se zdravotním postižením.',
      de:
        'Arbeit bei der gemeinnützigen Organisation „Offene Perspektiven“: Anpassung von ' +
        'Oberflächen, Dolmetschen und barrierefreie Bereitstellung von Informationen für ' +
        'Menschen mit Behinderungen.'
    },
    category: {
      ru: 'Общественная деятельность',
      en: 'Civic work',
      cs: 'Veřejná činnost',
      de: 'Gemeinnützige Arbeit'
    },
    technologies: {
      ru: ['Доступная среда', 'Адаптация интерфейсов', 'РЖЯ'],
      en: ['Accessibility', 'Interface adaptation', 'Russian Sign Language'],
      cs: ['Přístupnost', 'Úprava rozhraní', 'Ruský znakový jazyk'],
      de: ['Barrierefreiheit', 'Oberflächenanpassung', 'Russische Gebärdensprache']
    },
    duration: { ru: 'с 2022 г.', en: 'since 2022', cs: 'od roku 2022', de: 'seit 2022' },
    status: { ru: 'Активный', en: 'Active', cs: 'Aktivní', de: 'Aktiv' },
    role: {
      ru: 'Руководитель направления доступной информационной среды',
      en: 'Head of the accessible information environment programme',
      cs: 'Vedoucí programu přístupného informačního prostředí',
      de: 'Leiter des Programms für barrierefreie Informationsumgebung'
    },
    achievements: {
      ru: [
        'Адаптация интерфейсов и информационных материалов',
        'Переводы и сопровождение мероприятий'
      ],
      en: ['Adapted interfaces and information materials', 'Interpreting and event support'],
      cs: ['Úpravy rozhraní a informačních materiálů', 'Tlumočení a doprovod akcí'],
      de: [
        'Anpassung von Oberflächen und Informationsmaterialien',
        'Dolmetschen und Begleitung von Veranstaltungen'
      ]
    }
  },
  {
    id: 6,
    icon: 'hand',
    type: 'inclusive',
    images: ['gallery/yakovlev-inclusive-lecture.jpg', 'gallery/more/057.jpg'],
    title: {
      ru: 'Адаптация лекций на РЖЯ',
      en: 'Lectures adapted into Russian Sign Language',
      cs: 'Přednášky adaptované do ruského znakového jazyka',
      de: 'Vorlesungen in russischer Gebärdensprache'
    },
    shortDescription: {
      ru: 'Технические лекции на русском жестовом языке',
      en: 'Technical lectures in Russian Sign Language',
      cs: 'Technické přednášky v ruském znakovém jazyce',
      de: 'Technische Vorlesungen in russischer Gebärdensprache'
    },
    fullDescription: {
      ru:
        'Адаптация и перевод технических лекций на русский жестовый язык — преимущественно ' +
        'по авиации и робототехнике. 27 лекций за 2024—2025 годы.',
      en:
        'Adapting and interpreting technical lectures into Russian Sign Language, mostly on ' +
        'aviation and robotics: 27 lectures in 2024—2025.',
      cs:
        'Adaptace a tlumočení technických přednášek do ruského znakového jazyka, převážně ' +
        'o letectví a robotice: 27 přednášek v letech 2024—2025.',
      de:
        'Anpassung und Dolmetschen technischer Vorlesungen in russische Gebärdensprache, ' +
        'vor allem zu Luftfahrt und Robotik: 27 Vorlesungen in den Jahren 2024—2025.'
    },
    category: {
      ru: 'Инклюзивный проект',
      en: 'Inclusive project',
      cs: 'Inkluzivní projekt',
      de: 'Inklusives Projekt'
    },
    technologies: {
      ru: ['РЖЯ', 'Методика преподавания', 'Доступная среда'],
      en: ['Russian Sign Language', 'Teaching methodology', 'Accessibility'],
      cs: ['Ruský znakový jazyk', 'Metodika výuky', 'Přístupnost'],
      de: ['Russische Gebärdensprache', 'Lehrmethodik', 'Barrierefreiheit']
    },
    duration: { ru: '2024—2025', en: '2024—2025', cs: '2024—2025', de: '2024—2025' },
    status: { ru: 'Активный', en: 'Active', cs: 'Aktivní', de: 'Aktiv' },
    role: {
      ru: 'Переводчик и методист',
      en: 'Interpreter and methodologist',
      cs: 'Tlumočník a metodik',
      de: 'Dolmetscher und Methodiker'
    },
    achievements: {
      ru: ['27 адаптированных лекций', 'Преимущественно авиация и робототехника'],
      en: ['27 adapted lectures', 'Mostly aviation and robotics'],
      cs: ['27 adaptovaných přednášek', 'Převážně letectví a robotika'],
      de: ['27 angepasste Vorlesungen', 'Überwiegend Luftfahrt und Robotik']
    }
  },
  {
    id: 7,
    icon: 'globe',
    type: 'web',
    images: ['gallery/more/056.jpg'],
    title: {
      ru: 'Сайт АНО «Открытые Перспективы»',
      en: 'Website for the Open Perspectives non-profit',
      cs: 'Web neziskové organizace Otevřené perspektivy',
      de: 'Website der Organisation „Offene Perspektiven“'
    },
    shortDescription: {
      ru: 'Официальный сайт организации с акцентом на доступность',
      en: 'The organisation’s official site, built around accessibility',
      cs: 'Oficiální web organizace s důrazem na přístupnost',
      de: 'Offizielle Website der Organisation mit Fokus auf Barrierefreiheit'
    },
    fullDescription: {
      ru:
        'Разработка сайта АНО «Открытые Перспективы»: адаптивная вёрстка, доступность ' +
        'интерфейса и понятная структура разделов. Сайт работает.',
      en:
        'Building the Open Perspectives website: responsive layout, accessible interface and ' +
        'a clear section structure. The site is live.',
      cs:
        'Vývoj webu organizace Otevřené perspektivy: responzivní layout, přístupné rozhraní ' +
        'a přehledná struktura sekcí. Web je v provozu.',
      de:
        'Entwicklung der Website „Offene Perspektiven“: responsives Layout, barrierefreie ' +
        'Oberfläche und klare Struktur. Die Website ist online.'
    },
    category: {
      ru: 'Веб-разработка',
      en: 'Web development',
      cs: 'Webový vývoj',
      de: 'Webentwicklung'
    },
    technologies: {
      ru: ['Vue.js', 'SCSS', 'Веб-доступность', 'Адаптивная вёрстка'],
      en: ['Vue.js', 'SCSS', 'Web accessibility', 'Responsive layout'],
      cs: ['Vue.js', 'SCSS', 'Webová přístupnost', 'Responzivní layout'],
      de: ['Vue.js', 'SCSS', 'Web-Barrierefreiheit', 'Responsives Layout']
    },
    duration: { ru: '2024', en: '2024', cs: '2024', de: '2024' },
    status: { ru: 'Работает', en: 'Live', cs: 'V provozu', de: 'Online' },
    achievements: {
      ru: ['Адаптивный дизайн', 'Доступность интерфейса'],
      en: ['Responsive design', 'Accessible interface'],
      cs: ['Responzivní design', 'Přístupné rozhraní'],
      de: ['Responsives Design', 'Barrierefreie Oberfläche']
    }
  },
  {
    id: 8,
    icon: 'laptop',
    type: 'web',
    images: ['gallery/more/004.jpg'],
    title: {
      ru: 'Сайт «Технекон»',
      en: 'Technekon website',
      cs: 'Web Technekon',
      de: 'Website von Technekon'
    },
    shortDescription: {
      ru: 'Сайт поставщика оборудования для неразрушающего контроля и вибродиагностики',
      en: 'Website of a supplier of non-destructive testing and vibration diagnostics equipment',
      cs: 'Web dodavatele zařízení pro nedestruktivní zkoušení a vibrační diagnostiku',
      de: 'Website eines Anbieters für zerstörungsfreie Prüf- und Schwingungsdiagnosetechnik'
    },
    fullDescription: {
      ru:
        'Разработка и сопровождение сайта ООО «ТД «Технекон»» — оборудование для технологий ' +
        'неразрушающего контроля и вибродиагностики: каталог, описание решений, заявки. ' +
        'Сайт работает.',
      en:
        'Building and maintaining the website of Technekon Trading House — equipment for ' +
        'non-destructive testing and vibration diagnostics: catalogue, solution descriptions ' +
        'and enquiries. The site is live.',
      cs:
        'Vývoj a údržba webu obchodního domu Technekon — zařízení pro nedestruktivní zkoušení ' +
        'a vibrační diagnostiku: katalog, popis řešení, poptávky. Web je v provozu.',
      de:
        'Entwicklung und Betreuung der Website des Handelshauses Technekon — Technik für ' +
        'zerstörungsfreie Prüfung und Schwingungsdiagnostik: Katalog, Lösungsbeschreibungen, ' +
        'Anfragen. Die Website ist online.'
    },
    category: {
      ru: 'Веб-разработка',
      en: 'Web development',
      cs: 'Webový vývoj',
      de: 'Webentwicklung'
    },
    technologies: {
      ru: ['Фронтенд', 'Адаптивная вёрстка', 'Каталог продукции'],
      en: ['Front-end', 'Responsive layout', 'Product catalogue'],
      cs: ['Front-end', 'Responzivní layout', 'Katalog produktů'],
      de: ['Frontend', 'Responsives Layout', 'Produktkatalog']
    },
    duration: { ru: '2023', en: '2023', cs: '2023', de: '2023' },
    status: { ru: 'Работает', en: 'Live', cs: 'V provozu', de: 'Online' },
    achievements: {
      ru: ['Каталог оборудования', 'Мобильная версия'],
      en: ['Equipment catalogue', 'Mobile version'],
      cs: ['Katalog zařízení', 'Mobilní verze'],
      de: ['Gerätekatalog', 'Mobile Version']
    }
  },

  // Архив: показывается отдельным блоком
  {
    id: 3,
    icon: 'target',
    type: 'inclusive',
    archived: true,
    images: ['gallery/more/005.jpg'],
    title: {
      ru: 'Конкурс «Твой ход»',
      en: 'Your Move contest',
      cs: 'Soutěž Tvůj tah',
      de: 'Wettbewerb „Dein Zug“'
    },
    shortDescription: {
      ru: 'Участие в федеральном конкурсе молодёжных проектов',
      en: 'Participation in the federal contest of youth projects',
      cs: 'Účast ve federální soutěži mládežnických projektů',
      de: 'Teilnahme am föderalen Wettbewerb für Jugendprojekte'
    },
    fullDescription: {
      ru:
        'Участие в федеральном конкурсе «Твой ход» с проектом по развитию инклюзивного ' +
        'образования и доступной образовательной среды.',
      en:
        'Took part in the federal Your Move contest with a project on inclusive education and ' +
        'an accessible learning environment.',
      cs:
        'Účast ve federální soutěži Tvůj tah s projektem inkluzivního vzdělávání a přístupného ' +
        'vzdělávacího prostředí.',
      de:
        'Teilnahme am föderalen Wettbewerb „Dein Zug“ mit einem Projekt zu inklusiver Bildung ' +
        'und barrierefreier Lernumgebung.'
    },
    category: {
      ru: 'Конкурсный проект',
      en: 'Contest project',
      cs: 'Soutěžní projekt',
      de: 'Wettbewerbsprojekt'
    },
    technologies: {
      ru: ['Социальные технологии', 'Проектная работа'],
      en: ['Social technologies', 'Project work'],
      cs: ['Sociální technologie', 'Projektová práce'],
      de: ['Soziale Technologien', 'Projektarbeit']
    },
    duration: { ru: '2023', en: '2023', cs: '2023', de: '2023' },
    status: { ru: 'Завершён', en: 'Completed', cs: 'Dokončeno', de: 'Abgeschlossen' },
    achievements: {
      ru: ['Участие в федеральном конкурсе'],
      en: ['Took part in the federal contest'],
      cs: ['Účast ve federální soutěži'],
      de: ['Teilnahme am föderalen Wettbewerb']
    }
  }
]

const resolve = (item: ProjectSource, locale: Locale): Project => ({
  id: item.id,
  icon: item.icon,
  type: item.type,
  archived: item.archived,
  participants: item.participants,
  publicationIds: item.publicationIds,
  images: item.images,
  title: pick(item.title, locale),
  shortDescription: pick(item.shortDescription, locale),
  fullDescription: pick(item.fullDescription, locale),
  category: pick(item.category, locale),
  technologies: pick(item.technologies, locale),
  duration: pick(item.duration, locale),
  status: pick(item.status, locale),
  achievements: pick(item.achievements, locale),
  role: item.role ? pick(item.role, locale) : undefined,
  customer: item.customer ? pick(item.customer, locale) : undefined
})

export const getProjects = (locale: Locale): Project[] =>
  projectsData.map((item) => resolve(item, locale))

export const getActiveProjects = (locale: Locale): Project[] =>
  projectsData.filter((item) => !item.archived).map((item) => resolve(item, locale))

export const getArchivedProjects = (locale: Locale): Project[] =>
  projectsData.filter((item) => item.archived).map((item) => resolve(item, locale))
