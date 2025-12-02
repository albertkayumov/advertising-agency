import React, { useState } from 'react'
import './ContactForm.css'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  service: string
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма контакта отправлена:', formData)
    alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label htmlFor="contact-name" className="contact-form__label">
          Ваше имя
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-form__input"
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="contact-email" className="contact-form__label">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form__input"
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="contact-message" className="contact-form__label">
          Сообщение
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="contact-form__button">
        Отправить сообщение
      </button>
    </form>
  )
}