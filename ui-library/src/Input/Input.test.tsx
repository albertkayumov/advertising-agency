import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import Input from './Input'

describe('Input Component', () => {
  test('renders input with value', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value="test value"
        onChange={handleChange}
      />
    )
    
    const input = screen.getByDisplayValue('test value')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  test('renders input with placeholder', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        placeholder="Enter text"
      />
    )
    
    const input = screen.getByPlaceholderText('Enter text')

    expect(input).toBeInTheDocument()
  })

  test('renders input with label', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        label="Username"
        name="username"
      />
    )
    
    const label = screen.getByText('Username')
    const input = screen.getByLabelText('Username')
    
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'username')
    expect(input).toHaveAttribute('name', 'username')
  })

  test('handles change event', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
      />
    )
    
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'new value' } })
    
    expect(handleChange).toHaveBeenCalledWith('new value')
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('displays error message', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        error="This field is required"
      />
    )
    
    const error = screen.getByText('This field is required')
    const input = screen.getByRole('textbox')
    
    expect(error).toBeInTheDocument()
    expect(error).toHaveClass('input-error')
    expect(input).toHaveClass('input--error')
  })

  test('renders disabled input', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        disabled
      />
    )
    
    const input = screen.getByRole('textbox')

    expect(input).toBeDisabled()
    expect(input).toHaveAttribute('disabled')
  })

  test('applies custom type', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        type="email"
      />
    )
    
    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('type', 'email')
  })

  test('applies custom className', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
        className="custom-input"
      />
    )
    
    const input = screen.getByRole('textbox')

    expect(input).toHaveClass('custom-input')
  })

  test('has text type by default', () => {
    const handleChange = jest.fn()

    render(
      <Input
        value=""
        onChange={handleChange}
      />
    )
    
    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('type', 'text')
  })
})