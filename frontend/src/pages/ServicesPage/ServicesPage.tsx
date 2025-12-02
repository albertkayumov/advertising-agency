import React from 'react'

import { Link } from 'react-router-dom'
import './ServicesPage.css'

export const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Брендинг',
      description: 'Создание уникального бренда и айдентики',
      details: [
        'Разработка названия и слогана',
        'Создание логотипа и фирменного стиля',
        'Разработка бренд-бука и гайдлайнов',
        'Позиционирование бренда на рынке'
      ],
      price: 'от 150 000 ₽'
    },
    {
      id: 2,
      title: 'Digital-маркетинг',
      description: 'Комплексное продвижение в интернете',
      details: [
        'Контекстная реклама (Яндекс.Директ, Google Ads)',
        'SEO-оптимизация и продвижение сайтов',
        'Email-маркетинг и рассылки',
        'Аналитика и отчетность'
      ],
      price: 'от 80 000 ₽/мес'
    },
    {
      id: 3,
      title: 'SMM',
      description: 'Продвижение в социальных сетях',
      details: [
        'Контент-стратегия и план публикаций',
        'Таргетированная реклама в соцсетях',
        'Комьюнити-менеджмент и модерация',
        'Анализ эффективности кампаний'
      ],
      price: 'от 60 000 ₽/мес'
    },
    {
      id: 4,
      title: 'Разработка сайтов',
      description: 'Создание современных веб-сайтов',
      details: [
        'Лендинги и посадочные страницы',
        'Корпоративные сайты',
        'Интернет-магазины',
        'Веб-приложения и порталы'
      ],
      price: 'от 100 000 ₽'
    },
    {
      id: 5,
      title: 'Мобильные приложения',
      description: 'Разработка приложений для iOS и Android',
      details: [
        'Нативные приложения',
        'Кроссплатформенные решения',
        'UI/UX дизайн',
        'Тестирование и публикация'
      ],
      price: 'от 300 000 ₽'
    },
    {
      id: 6,
      title: 'Поддержка и развитие',
      description: 'Техническая поддержка и развитие проектов',
      details: [
        'Хостинг и обслуживание сайтов',
        'Обновление и модернизация',
        'Техническая поддержка 24/7',
        'Мониторинг и аналитика'
      ],
      price: 'от 20 000 ₽/мес'
    }
  ]

  return (
    <div className="services-page">
      <div className="services-page__container">
        <header className="services-page__header">
          <h1 className="services-page__title">Наши услуги</h1>
          <p className="services-page__description">
            Полный спектр услуг для digital-продвижения вашего бизнеса
          </p>
        </header>

        <div className="services-page__grid">
          {services.map((service) => (
            <div key={service.id} className="services-page__card">
              <div className="services-page__card-header">
                <h2 className="services-page__card-title">{service.title}</h2>
                <span className="services-page__card-price">{service.price}</span>
              </div>
              <p className="services-page__card-description">{service.description}</p>
              <ul className="services-page__card-list">
                {service.details.map((detail, index) => (
                  <li key={index} className="services-page__card-list-item">
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="services-page__card-button">
                Заказать услугу
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}