export interface NavigationItem {
  label: string
  path: string
}

export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  icon: string
  technologies: string[]
  participants?: string
  duration: string
  status: string
  type: string
  achievements: string[]
  role?: string
  customer?: string
  archived?: boolean
  publicationIds?: string[]
  images?: string[]
  videoReport?: string
  links?: { title: string; url: string }[]
}

export interface ProjectFilter {
  value: string
  label: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: number
  organization?: string
  icon?: string
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  year: number
  journal?: string
  conference?: string
  link?: string
  description?: string
}

export interface Initiative {
  id: string
  title: string
  description: string
  date: string
  participants?: number
  image?: string
  category?: string
}

export interface ContactInfo {
  email: string
  emailAlt?: string
  phone: string
  phoneHref: string
  city: string
  timezone: string
  availability: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  ariaLabel: string
  handle?: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image: string
  date?: string
  category: GalleryCategory
  credit?: string
}

export type GalleryCategory =
  | 'robotics'
  | 'science'
  | 'inclusion'
  | 'awards'
  | 'team'
  | 'portrait'

/** Ступень образования — карточка в разделе «О себе». */
export interface EducationItem {
  id: string
  level: string
  institution: string
  faculty?: string
  department?: string
  program: string
  period: string
  status: 'completed' | 'current' | 'planned'
  thesis?: string
  note?: string
}

/** Место работы или роль — раздел «Опыт». */
export interface ExperienceItem {
  id: string
  organization: string
  unit?: string
  role: string
  period: string
  current?: boolean
  summary?: string
  highlights?: string[]
  images?: string[]
}

/** Группа навыков для облака слов. */
export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface LanguageItem {
  name: string
  level?: string
}

export type AchievementCategory =
  | 'competition'
  | 'award'
  | 'conference'
  | 'inclusive'
  | 'project'
  | 'leadership'

export interface AchievementSource {
  label: string
  url: string
}

export interface AchievementItem {
  id: string
  year: string
  date?: string
  title: string
  description: string
  category: AchievementCategory
  icon: string
  result?: string
  role?: string
  team?: string
  project?: string
  details?: string[]
  source?: AchievementSource
  archived?: boolean
  images?: string[]
}

export interface CategoryFilter {
  value: string
  label: string
}

export type PublicationType = 'journal' | 'conference'

export interface PublicationItem {
  id: string
  title: string
  authors: string
  year: string
  type: PublicationType
  source: string
  city?: string
  pages?: string
  topics?: string[]
  note?: string
  link?: string
  pending?: boolean
  abstract?: string
  keywords?: string[]
}
