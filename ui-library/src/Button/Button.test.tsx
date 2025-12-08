import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import Button from './Button'

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('applies primary variant by default', () => {
    render(<Button>Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--primary')
  })

  test('applies secondary variant when specified', () => {
    render(<Button variant="secondary">Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--secondary')
  })

  test('applies outline variant when specified', () => {
    render(<Button variant="outline">Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--outline')
  })

  test('applies small size when specified', () => {
    render(<Button size="small">Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--small')
  })

  test('applies medium size by default', () => {
    render(<Button>Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--medium')
  })

  test('applies large size when specified', () => {
    render(<Button size="large">Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('btn--large')
  })

  test('handles click event', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByText('Click me')

    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByText('Disabled')

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('disabled')
  })

  test('has correct type attribute', () => {
    render(<Button type="submit">Submit</Button>)
    const button = screen.getByText('Submit')

    expect(button).toHaveAttribute('type', 'submit')
  })

  test('has button type by default', () => {
    render(<Button>Default</Button>)
    const button = screen.getByText('Default')

    expect(button).toHaveAttribute('type', 'button')
  })

  test('applies custom className', () => {
    render(<Button className="custom-class">Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toHaveClass('custom-class')
  })

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )
    
    const button = screen.getByText('Disabled')

    fireEvent.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })
})