import React, { useState } from 'react'
import './ContactPage.css'
import heroImage2 from '@assets/images/map.png'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  service: string
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '+7',
    message: '',
    service: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: '', label: 'Выберите услугу' },
    { id: 'branding', label: 'Брендинг' },
    { id: 'digital', label: 'Digital-маркетинг' },
    { id: 'smm', label: 'SMM' },
    { id: 'web', label: 'Разработка сайтов' },
    { id: 'mobile', label: 'Мобильные приложения' },
    { id: 'support', label: 'Поддержка' },
    { id: 'other', label: 'Другое' }
  ]

  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Адрес',
      content: 'г. Казань, ул. Четаева, д. 18',
      detail: 'БЦ "Центральный", офис 405'
    },
    {
      id: 2,
      icon: '📞',
      title: 'Телефон',
      content: '+7 (999) 999-99-99',
      detail: 'Пн-Пт: 9:00 - 18:00'
    },
    {
      id: 3,
      icon: '✉️',
      title: 'Email',
      content: 'info@adagency.ru',
      detail: 'Ответим в течение 24 часов'
    },
    {
      id: 4,
      icon: '⏰',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      detail: 'Сб-Вс: выходной'
    }
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Если пользователь пытается удалить +7, не позволяем этого
    if (value.length < 3) {
      setFormData(prev => ({
        ...prev,
        phone: '+7'
      }));
      return;
    }
    
    const formattedPhone = formatPhoneNumber(value);
    
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    })
  }

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, '');
    
    if (phoneNumber.startsWith('7') || phoneNumber.startsWith('8') || phoneNumber.length === 0) {
      const formattedNumber = phoneNumber.startsWith('7') || phoneNumber.startsWith('8') 
        ? phoneNumber.substring(1) 
        : phoneNumber;
      
      let result = '+7';
      
      if (formattedNumber.length > 0) {
        result += ' (' + formattedNumber.substring(0, 3);
      }
      if (formattedNumber.length > 3) {
        result += ') ' + formattedNumber.substring(3, 6);
      }
      if (formattedNumber.length > 6) {
        result += '-' + formattedNumber.substring(6, 8);
      }
      if (formattedNumber.length > 8) {
        result += '-' + formattedNumber.substring(8, 10);
      }
      
      return result;
    }
    
    return '+7' + phoneNumber;
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <header className="contact-page__header">
          <h1 className="contact-page__title">Контакты</h1>
          <p className="contact-page__subtitle">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </header>

        <div className="contact-page__content">
          <div className="contact-page__info">
            <h2 className="contact-page__section-title">Наши контакты</h2>
            <div className="contact-page__info-grid">
              {contactInfo.map((info) => (
                <div key={info.id} className="contact-page__info-card">
                  <div className="contact-page__info-icon">{info.icon}</div>
                  <h3 className="contact-page__info-title">{info.title}</h3>
                  <p className="contact-page__info-content">{info.content}</p>
                  <p className="contact-page__info-detail">{info.detail}</p>
                </div>
              ))}
            </div>

            <div className="contact-page__map">
              <img 
              src={heroImage2} 
              alt="Маркетолог анализирует данные" 
              className="hero-section__person-image"
              />
            </div>
          </div>

          <div className="contact-page__form-section">
            <h2 className="contact-page__section-title">Напишите нам</h2>
            
            {isSubmitted && (
              <div className="contact-page__success">
                Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__form-group">
                <label htmlFor="name" className="contact-page__form-label">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-page__form-input"
                  required
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="email" className="contact-page__form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-page__form-input"
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="phone" className="contact-page__form-label">
                  Телефон *
                </label>
                <div className="contact-page__input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="contact-page__form-input"
                    maxLength={18}
                  />
                  <div 
                    className={`contact-page__input-mask ${formData.phone ? 'contact-page__input-mask--hidden' : ''}`}
                  >
                    <span className="contact-page__input-mask-text">+7</span>
                    <span className="contact-page__input-mask-text" style={{ color: '#ccc' }}>
                      &nbsp;(999) 999-99-99
                    </span>
                  </div>
                </div>
                {formData.phone && formData.phone.replace(/\D/g, '').length < 11 && (
                  <div className="contact-page__error">
                    Введите полный номер телефона (10 цифр)
                  </div>
                )}
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="service" className="contact-page__form-label">
                  Интересующая услуга
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-page__form-select"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="message" className="contact-page__form-label">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-page__form-textarea"
                  rows={5}
                  required
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                />
              </div>

              <button type="submit" className="contact-page__form-button">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}