import React from 'react'
import './AboutPage.css'
import heroImage1 from '@assets/images/team.png'

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Александр Иванов',
      position: 'CEO & Основатель',
      description: '15 лет опыта в digital-маркетинге и управлении проектами'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      position: 'Дизайн-директор',
      description: 'Специалист по UI/UX и брендингу, автор 50+ успешных проектов'
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      description: 'Full-stack разработчик с экспертизой в современных технологиях'
    },
    {
      id: 4,
      name: 'Екатерина Козлова',
      position: 'Менеджер проектов',
      description: 'Сертифицированный специалист по Agile и Scrum методологиям'
    }
  ]

  const achievements = [
    { id: 1, value: '50+', label: 'Успешных проектов' },
    { id: 2, value: '30+', label: 'Довольных клиентов' },
    { id: 3, value: '5 лет', label: 'На рынке' },
    { id: 4, value: '95%', label: 'Довольных клиентов' }
  ]

  return (
    <div className="about-page">
      <div className="about-page__container">
        <header className="about-page__header">
          <h1 className="about-page__title">О нашем агентстве</h1>
          <p className="about-page__subtitle">
            Мы создаем digital-решения, которые помогают бизнесу расти
          </p>
        </header>

        <section className="about-page__intro">
          <div className="about-page__intro-content">
            <h2 className="about-page__section-title">Наша миссия</h2>
            <p className="about-page__intro-text">
              AdAgency - это рекламное агентство полного цикла, основанное в 2020 году.
              Мы специализируемся на создании эффективных digital-решений для бизнеса любого масштаба.
              Наша цель - помогать компаниям достигать своих целей с помощью современных технологий
              и креативных подходов.
            </p>
          </div>
          <div className="about-page__intro-image">
            <img 
            src={heroImage1} 
            alt="Маркетолог анализирует данные" 
            className="hero-section__person-image"
            />
          </div>
        </section>

        <section className="about-page__achievements">
          <h2 className="about-page__section-title about-page__section-title--center">
            Наши достижения
          </h2>
          <div className="about-page__achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="about-page__achievement">
                <div className="about-page__achievement-value">{achievement.value}</div>
                <div className="about-page__achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-page__team">
          <h2 className="about-page__section-title about-page__section-title--center">
            Наша команда
          </h2>
          <div className="about-page__team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="about-page__team-member">
                <div className="about-page__member-avatar">
                  <div className="about-page__avatar-placeholder">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="about-page__member-name">{member.name}</h3>
                <div className="about-page__member-position">{member.position}</div>
                <p className="about-page__member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-page__values">
          <h2 className="about-page__section-title about-page__section-title--center">
            Наши ценности
          </h2>
          <div className="about-page__values-list">
            <div className="about-page__value">
              <h3>Качество</h3>
              <p>Мы стремимся к совершенству в каждом проекте</p>
            </div>
            <div className="about-page__value">
              <h3>Инновации</h3>
              <p>Используем современные технологии и подходы</p>
            </div>
            <div className="about-page__value">
              <h3>Прозрачность</h3>
              <p>Честность и открытость в работе с клиентами</p>
            </div>
            <div className="about-page__value">
              <h3>Результат</h3>
              <p>Фокусируемся на достижении целей клиента</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}