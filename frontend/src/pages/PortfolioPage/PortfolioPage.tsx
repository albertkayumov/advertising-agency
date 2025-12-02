import React, { useState } from 'react'

import { PortfolioCase } from '@my-app/ui-library'
import './PortfolioPage.css'

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'Корпоративный сайт для ООО "ТехноПро"',
      description: 'Разработка современного адаптивного корпоративного сайта с системой управления контентом.',
      characteristics: ['Адаптивный дизайн', 'CMS система', 'SEO-оптимизация'],
      category: 'web',
      images: ['https://placehold.co/400x200/007bff/ffffff/png?text=ТехноПро']
    },
    {
      id: 2,
      title: 'Интернет-магазин "Модный стиль"',
      description: 'Создание полнофункционального интернет-магазина одежды с системой онлайн-оплаты.',
      characteristics: ['E-commerce', 'Мобильная версия', 'Интеграция с CRM'],
      category: 'ecommerce',
      images: ['https://placehold.co/400x200/28a745/ffffff/png?text=Модный+стиль']
    },
    {
      id: 3,
      title: 'Лендинг для стартапа "EcoLife"',
      description: 'Разработка продающей посадочной страницы для экологического стартапа.',
      characteristics: ['Высокая конверсия', 'A/B тестирование', 'Аналитика'],
      category: 'landing',
      images: ['https://placehold.co/400x200/dc3545/ffffff/png?text=EcoLife']
    },
    {
      id: 4,
      title: 'Мобильное приложение "FitTrack"',
      description: 'Разработка приложения для отслеживания фитнес-активности с синхронизацией устройств.',
      characteristics: ['iOS/Android', 'Виджеты', 'Аналитика данных'],
      category: 'mobile',
      images: ['https://placehold.co/400x200/6f42c1/ffffff/png?text=FitTrack']
    },
    {
      id: 5,
      title: 'SMM кампания для ресторана "La Bella"',
      description: 'Комплексное продвижение в социальных сетях с увеличением охвата на 300%.',
      characteristics: ['Контент-стратегия', 'Таргетинг', 'Аналитика ROI'],
      category: 'smm',
      images: ['https://placehold.co/400x200/fd7e14/ffffff/png?text=La+Bella']
    },
    {
      id: 6,
      title: 'Брендинг для кофейни "Morning Brew"',
      description: 'Создание полного фирменного стиля и айдентики для сети кофеен.',
      characteristics: ['Логотип', 'Айдентика', 'Гайдлайны'],
      category: 'branding',
      images: ['https://placehold.co/400x200/17a2b8/ffffff/png?text=Morning+Brew']
    },
    {
      id: 7,
      title: 'Кампания для бренда моды',
      description: 'Полный ребрендинг и запуск digital-кампании для fashion-бренда',
      characteristics: ['Брендинг', 'SMM', 'Таргетинг'],
      category: 'branding',
      images: ['https://placehold.co/400x200/007bff/ffffff/png?text=Fashion']
    },
    {
      id: 8,
      title: 'Запуск мобильного приложения',
      description: 'Комплексное продвижение нового продукта на рынок',
      characteristics: ['Digital-маркетинг', 'ASO', 'PR'],
      category: 'mobile',
      images: ['https://placehold.co/400x200/28a745/ffffff/png?text=Mobile+App']
    },
    {
      id: 9,
      title: 'SMM для ресторана',
      description: 'Развитие присутствия в социальных сетях и увеличение трафика',
      characteristics: ['Контент-стратегия', 'Таргетинг', 'Аналитика'],
      category: 'smm',
      images: ['https://placehold.co/400x200/dc3545/ffffff/png?text=Restaurant']
    }
  ]

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'web', label: 'Веб-разработка' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'landing', label: 'Лендинги' },
    { id: 'mobile', label: 'Мобильные приложения' },
    { id: 'smm', label: 'SMM' },
    { id: 'branding', label: 'Брендинг' }
  ]

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleViewDetails = (title: string, id: number) => {
    console.log(`Просмотр деталей: ${title} (ID: ${id})`)
  }

  const handleOrder = (title: string, id: number) => {
    console.log(`Заказ проекта: ${title} (ID: ${id})`)
  }

  return (
    <div className="portfolio-page">
      <div className="portfolio-page__container">
        <header className="portfolio-page__header">
          <h1 className="portfolio-page__title">Наше портфолио</h1>
          <p className="portfolio-page__description">
            Примеры реализованных проектов с использованием современных технологий и подходов
          </p>
        </header>

        <div className="portfolio-page__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`portfolio-page__filter-button ${activeFilter === filter.id ? 'portfolio-page__filter-button--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-page__grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-page__item">
              <PortfolioCase
                title={item.title}
                description={item.description}
                characteristics={item.characteristics}
                images={item.images}
                onViewDetails={() => handleViewDetails(item.title, item.id)}
                onOrder={() => handleOrder(item.title, item.id)}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="portfolio-page__empty">
            <p>Проекты в этой категории пока отсутствуют</p>
          </div>
        )}
      </div>
    </div>
  )
}