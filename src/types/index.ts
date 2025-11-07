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
  phone: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  ariaLabel: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image: string
  date?: string
  category?: string
}

