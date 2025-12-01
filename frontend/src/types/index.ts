/**
 * Типы для портфолио
 */
export interface PortfolioItem {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  characteristics: string[]
  client: string
  year: number
  link?: string
}

/**
 * Типы для услуг
 */
export interface Service {
  id: number
  title: string
  description: string
  price?: string
  features: string[]
  icon?: string
}

/**
 * Типы для формы контакта
 */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  service?: string
}

/**
 * Типы для модального окна
 */
export interface ModalState {
  isOpen: boolean
  content: React.ReactNode | null
  title?: string
  size?: 'small' | 'medium' | 'large'
}

/**
 * Типы для навигации
 */
export interface NavItem {
  path: string
  label: string
  icon?: string
}

/**
 * Типы для команды
 */
export interface TeamMember {
  id: number
  name: string
  position: string
  description: string
  avatar?: string
}

/**
 * Типы для достижений
 */
export interface Achievement {
  id: number
  value: string
  label: string
  description?: string
}

/**
 * Типы для фильтров портфолио
 */
export interface PortfolioFilter {
  id: string
  label: string
  count?: number
}