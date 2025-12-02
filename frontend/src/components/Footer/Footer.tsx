import React from 'react'
import './Footer.css'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">AdAgency</h3>
            <p className="footer__description">
              Рекламное агентство полного цикла. Создаем эффективные решения для вашего бизнеса.
            </p>
          </div>
          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <ul className="footer__list">
              <li className="footer__list-item">
                <span className="footer__list-label">Email:</span>
                info@adagency.ru
              </li>
              <li className="footer__list-item">
                <span className="footer__list-label">Телефон:</span>
                +7 (999) 999-99-99
              </li>
              <li className="footer__list-item">
                <span className="footer__list-label">Адрес:</span>
                г. Казань, ул. Четаева, д. 18
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__subtitle">Услуги</h4>
            <ul className="footer__list">
              <li className="footer__list-item">Брендинг</li>
              <li className="footer__list-item">Digital-маркетинг</li>
              <li className="footer__list-item">SMM</li>
              <li className="footer__list-item">Разработка сайтов</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} AdAgency. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}