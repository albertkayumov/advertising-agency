import React from 'react'

import { HeroSection } from '../../components/HeroSection'
import { PortfolioSection } from '../../components/PortfolioSection'
import { ServicesSection } from '../../components/ServicesSection'
import { Link } from 'react-router-dom'
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
          <Link to="/contact" className="cta-section__button">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  )
}