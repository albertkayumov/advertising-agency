import React from 'react'
import './ServicesSection.css'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Брендинг',
      description: 'Создание уникального бренда и айдентики для вашего бизнеса'
    },
    {
      id: 2,
      title: 'Digital-маркетинг',
      description: 'Комплексное продвижение в интернете с использованием современных инструментов'
    },
    {
      id: 3,
      title: 'SMM',
      description: 'Продвижение в социальных сетях и управление репутацией'
    },
    {
      id: 4,
      title: 'Разработка сайтов',
      description: 'Создание современных веб-сайтов и приложений'
    }
  ]

  return (
    <section className="services-section">
      <div className="services-section__container">
        <h2 className="services-section__title">Наши услуги</h2>
        <div className="services-section__grid">
          {services.map((service) => (
            <div key={service.id} className="services-section__card">
              <h3 className="services-section__card-title">{service.title}</h3>
              <p className="services-section__card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}