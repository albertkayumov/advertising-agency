import React from 'react'
import './HeroSection.css'

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            Создаем эффективные рекламные кампании
          </h1>
          <p className="hero-section__description">
            Полный цикл услуг: от разработки стратегии до реализации и аналитики.
            Помогаем бизнесу расти с помощью digital-инструментов.
          </p>
          <div className="hero-section__buttons">
            <button className="hero-section__button hero-section__button--primary">
              Начать проект
            </button>
            <button className="hero-section__button hero-section__button--secondary">
              Смотреть кейсы
            </button>
          </div>
        </div>
        <div className="hero-section__image">
          <div className="hero-section__placeholder">
            Здесь будет изображение героя секции
          </div>
        </div>
      </div>
    </section>
  )
}