import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export const Header: React.FC = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/services', label: 'Услуги' },
    { path: '/about', label: 'О нас' },
    { path: '/contact', label: 'Контакты' }
  ]

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            AdAgency
          </Link>
        </div>
        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}