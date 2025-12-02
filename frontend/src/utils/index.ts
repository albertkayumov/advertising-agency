/**
 * Форматирует номер телефона в российский формат
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    return `+7 (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7, 9)}-${cleaned.substring(9, 11)}`
  }
  
  if (cleaned.length === 10) {
    return `+7 (${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 8)}-${cleaned.substring(8, 10)}`
  }
  
  return phone
}

/**
 * Валидирует email адрес
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}

/**
 * Дебаунс функция для оптимизации производительности
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Форматирует сумму в рублях
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

/**
 * Генерирует уникальный ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Обрезает текст до указанной длины
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text

  return text.substring(0, maxLength - 3) + '...'
}