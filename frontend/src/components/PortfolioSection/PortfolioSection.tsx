import React from 'react'

import { PortfolioCase } from '@my-app/ui-library'
import { Link } from 'react-router-dom'
import './PortfolioSection.css'

export const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Кампания для бренда моды',
      description: 'Полный ребрендинг и запуск digital-кампании для fashion-бренда',
      characteristics: ['Брендинг', 'SMM', 'Таргетинг'],
      images: ['https://placehold.co/400x200/007bff/ffffff/png?text=Fashion']
    },
    {
      id: 2,
      title: 'Запуск мобильного приложения',
      description: 'Комплексное продвижение нового продукта на рынок',
      characteristics: ['Digital-маркетинг', 'ASO', 'PR'],
      images: ['https://placehold.co/400x200/28a745/ffffff/png?text=Mobile+App']
    },
    {
      id: 3,
      title: 'SMM для ресторана',
      description: 'Развитие присутствия в социальных сетях и увеличение трафика',
      characteristics: ['Контент-стратегия', 'Таргетинг', 'Аналитика'],
      images: ['https://placehold.co/400x200/dc3545/ffffff/png?text=Restaurant']
    }
  ]

  const handleViewDetails = (title: string, id: number) => {
    console.log(`Просмотр деталей: ${title} (ID: ${id})`)
  }

  const handleOrder = (title: string, id: number) => {
    console.log(`Заказ проекта: ${title} (ID: ${id})`)
  }

  return (
    <section className="portfolio-section">
      <div className="portfolio-section__container">
        <h2 className="portfolio-section__title">Наши кейсы</h2>
        <div className="portfolio-section__grid">
          {portfolioItems.map((item) => (
            <PortfolioCase
              key={item.id}
              title={item.title}
              description={item.description}
              characteristics={item.characteristics}
              images={item.images}
              onViewDetails={() => handleViewDetails(item.title, item.id)}
              onOrder={() => handleOrder(item.title, item.id)}
            />
          ))}
        </div>
        <div className="portfolio-section__footer">
          <Link to="/portfolio" className="portfolio-section__link">
            Смотреть все кейсы →
          </Link>
        </div>
      </div>
    </section>
  )
}