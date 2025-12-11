import React from 'react'
import './PhoneInput.css';

export interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder = '+7 (999) 999-99-99',
  label,
  required = false,
  error,
  className = ''
}) => {
  const formatPhoneNumber = (inputValue: string): string => {
    const phoneNumber = inputValue.replace(/\D/g, '');
    
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (newValue.length < 3) {
      onChange('+7');
      return;
    }
    
    const formattedValue = formatPhoneNumber(newValue);
    onChange(formattedValue);
  };

  const digitsOnly = value.replace(/\D/g, '');
  const allSameDigits = digitsOnly.length === 11 && /^(\d)\1+$/.test(digitsOnly);

  return (
    <div className={`phone-input ${className}`}>
      {label && (
        <label className="phone-input__label">
          {label}
          {required && <span className="phone-input__required">*</span>}
        </label>
      )}
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`phone-input__field ${error ? 'phone-input__field--error' : ''}`}
        maxLength={18}
      />
      {error && <div className="phone-input__error">{error}</div>}
      {!error && value && digitsOnly.length < 11 && (
        <div className="phone-input__hint">
          Осталось ввести {11 - digitsOnly.length} цифр
        </div>
      )}
      {!error && value && allSameDigits && (
        <div className="phone-input__error">
          Номер телефона не может состоять из одинаковых цифр
        </div>
      )}
    </div>
  );
};

export default PhoneInput;