import React from 'react'

import { HeroSection } from '../../components/HeroSection'
import { PortfolioSection } from '../../components/PortfolioSection'
import { ServicesSection } from '../../components/ServicesSection'
import './HomePage.css'

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <section className="cta-section">
        <div className="cta-section__container">
          <h2 className="cta-section__title">Готовы начать проект?</h2>
          <p className="cta-section__description">
            Свяжитесь с нами для бесплатной консультации и обсуждения ваших идей
          </p>
          <button className="cta-section__button">
            Обсудить проект
          </button>
        </div>
      </section>
    </div>
  )
}