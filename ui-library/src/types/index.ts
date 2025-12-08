// Реэкспорт всех типов компонентов
export type { ButtonProps } from '../Button'
export type { InputProps } from '../Input'
export type { TextareaProps } from '../Textarea'
export type { CardProps } from '../Card'
export type { PortfolioCaseProps } from '../PortfolioCase'
export type { PhotoGalleryProps } from '../PhotoGallery'

// Общие типы
export interface BaseComponentProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}