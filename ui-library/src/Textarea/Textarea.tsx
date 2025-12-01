import React from 'react'
import './Textarea.css'

export interface TextareaProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  error?: string
  label?: string
  name?: string
  rows?: number
  className?: string
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  label,
  name,
  rows = 4,
  className = ''
}) => {
  const textareaClasses = `textarea ${error ? 'textarea--error' : ''} ${className}`.trim()

  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={name} className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={rows}
      />
      {error && <span className="textarea-error">{error}</span>}
    </div>
  )
}

export default Textarea