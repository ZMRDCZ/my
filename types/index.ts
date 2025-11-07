// Project Types
export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  icon: string
  technologies: string[]
  participants?: string
  duration?: string
  status?: string
  type: ProjectType
  achievements?: string[]
  videoReport?: string
  links?: ProjectLink[]
}

export interface ProjectLink {
  title: string
  url: string
}

export type ProjectType = 'all' | 'web' | 'inclusive' | 'education' | 'organization'

export interface ProjectFilter {
  value: ProjectType
  label: string
}

// Navigation Types
export interface NavigationItem {
  label: string
  path: string
  icon?: string
}

// Contact Types
export interface ContactInfo {
  email: string
  phone: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  ariaLabel: string
}

// Achievement Types
export interface Achievement {
  id: number
  title: string
  description: string
  year: number
  icon?: string
  category?: string
}

// Publication Types
export interface Publication {
  id: number
  title: string
  authors: string[]
  journal?: string
  year: number
  link?: string
  description?: string
}

// Initiative Types
export interface Initiative {
  id: number
  title: string
  description: string
  date: string
  participants?: number
  location?: string
  status: 'completed' | 'active' | 'planned'
}

