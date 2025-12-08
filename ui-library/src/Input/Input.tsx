import React from 'react'
import './Input.css'

export interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  placeholder?: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  error?: string
  label?: string
  name?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  label,
  name,
  className = ''
}) => {
  const inputClasses = `input ${error ? 'input--error' : ''} ${className}`.trim()

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default Input