import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import Textarea from './Textarea'

describe('Textarea Component', () => {
  test('renders textarea with value', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value="test content"
        onChange={handleChange}
      />
    )
    
    const textarea = screen.getByDisplayValue('test content')

    expect(textarea).toBeInTheDocument()
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  test('renders textarea with placeholder', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        placeholder="Enter your message"
      />
    )
    
    const textarea = screen.getByPlaceholderText('Enter your message')

    expect(textarea).toBeInTheDocument()
  })

  test('renders textarea with label', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        label="Message"
        name="message"
      />
    )
    
    const label = screen.getByText('Message')
    const textarea = screen.getByLabelText('Message')
    
    expect(label).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('id', 'message')
    expect(textarea).toHaveAttribute('name', 'message')
  })

  test('handles change event', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
      />
    )
    
    const textarea = screen.getByRole('textbox')

    fireEvent.change(textarea, { target: { value: 'new content' } })
    
    expect(handleChange).toHaveBeenCalledWith('new content')
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('displays error message', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        error="Message is required"
      />
    )
    
    const error = screen.getByText('Message is required')
    const textarea = screen.getByRole('textbox')
    
    expect(error).toBeInTheDocument()
    expect(error).toHaveClass('textarea-error')
    expect(textarea).toHaveClass('textarea--error')
  })

  test('renders disabled textarea', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        disabled
      />
    )
    
    const textarea = screen.getByRole('textbox')

    expect(textarea).toBeDisabled()
    expect(textarea).toHaveAttribute('disabled')
  })

  test('applies custom rows attribute', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        rows={6}
      />
    )
    
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('rows', '6')
  })

  test('has default rows value', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
      />
    )
    
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('rows', '4')
  })

  test('applies custom className', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
        className="custom-textarea"
      />
    )
    
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveClass('custom-textarea')
  })

  test('does not show error when error prop is not provided', () => {
    const handleChange = jest.fn()

    render(
      <Textarea
        value=""
        onChange={handleChange}
      />
    )
    
    // Проверяем, что нет элементов с текстом ошибки
    const errorElements = screen.queryAllByText(/Message is required/)

    expect(errorElements).toHaveLength(0)
  })
})