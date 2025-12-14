// ui-library/src/PhoneInput/PhoneInput.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import PhoneInput from './PhoneInput'

describe('PhoneInput Component', () => {
  test('renders with label', () => {
    render(<PhoneInput value="" onChange={() => {}} label="Телефон" />)
    
    expect(screen.getByText('Телефон')).toBeInTheDocument()
  })

  test('renders with required asterisk', () => {
    render(<PhoneInput value="" onChange={() => {}} label="Телефон" required />)
    
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  test('renders with placeholder', () => {
    render(
      <PhoneInput 
        value="" 
        onChange={() => {}} 
        placeholder="Введите номер" 
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'Введите номер')
  })

  test('renders with default placeholder', () => {
    render(<PhoneInput value="" onChange={() => {}} />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', '+7 (999) 999-99-99')
  })

  test('formats phone number on input', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '79991234567' } })
    
    // Проверяем, что вызывается форматирование
    expect(handleChange).toHaveBeenCalledWith('+7 (999) 123-45-67')
  })

  test('shows error message when provided', () => {
    render(
      <PhoneInput 
        value="+7" 
        onChange={() => {}} 
        error="Некорректный номер" 
      />
    )
    
    expect(screen.getByText('Некорректный номер')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveClass('phone-input__field--error')
  })


  test('does not show same digits error for valid number', () => {
    render(<PhoneInput value="+7 (999) 123-45-67" onChange={() => {}} />)
    
    expect(screen.queryByText('Номер телефона не может состоять из одинаковых цифр')).not.toBeInTheDocument()
  })

  test('handles backspace properly', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="+7 (999)" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    
    // Эмулируем нажатие Backspace
    fireEvent.change(input, { target: { value: '+7 (99' } })
    
    expect(handleChange).toHaveBeenCalledWith('+7 (99')
  })

  test('accepts only digits for formatting', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    
    // Ввод букв и символов
    fireEvent.change(input, { target: { value: '+7 abc!@# 123' } })
    
    // Должен отформатировать только цифры
    expect(handleChange).toHaveBeenCalledWith('+7 (123')
  })

  test('handles paste with formatting', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    
    // Эмулируем вставку номера
    fireEvent.change(input, { target: { value: '79991234567' } })
    
    expect(handleChange).toHaveBeenCalledWith('+7 (999) 123-45-67')
  })

  test('formats number starting with 8', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '89991234567' } })
    
    expect(handleChange).toHaveBeenCalledWith('+7 (999) 123-45-67')
  })

  test('applies custom className', () => {
    render(
      <PhoneInput 
        value="" 
        onChange={() => {}} 
        className="custom-class" 
      />
    )
    
    const container = screen.getByRole('textbox').closest('.phone-input')
    expect(container).toHaveClass('custom-class')
  })

  test('has maxLength attribute', () => {
    render(<PhoneInput value="" onChange={() => {}} />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('maxLength', '18')
  })

  test('calls onChange callback', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="+7" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '+7 (999' } })
    
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('formats partial numbers correctly', () => {
    const handleChange = jest.fn()
    render(<PhoneInput value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    
    // Постепенный ввод
    fireEvent.change(input, { target: { value: '7' } })
    expect(handleChange).toHaveBeenCalledWith('+7')
    
    // Сброс мока для следующего теста
    handleChange.mockClear()
    
    fireEvent.change(input, { target: { value: '799' } })
    expect(handleChange).toHaveBeenCalledWith('+7 (99')
    
    handleChange.mockClear()
    
    fireEvent.change(input, { target: { value: '7999' } })
    expect(handleChange).toHaveBeenCalledWith('+7 (999')
    
    handleChange.mockClear()
    
    fireEvent.change(input, { target: { value: '79991' } })
    expect(handleChange).toHaveBeenCalledWith('+7 (999) 1')
    
    handleChange.mockClear()
    
    fireEvent.change(input, { target: { value: '7999123' } })
    expect(handleChange).toHaveBeenCalledWith('+7 (999) 123')
  })
})