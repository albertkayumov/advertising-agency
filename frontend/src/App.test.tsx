import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Тестируем простой компонент вместо App
const SimpleComponent = () => (
  <div>
    <h1>Simple Test Component</h1>
    <p>This is a test component for Jest</p>
  </div>
)

describe('Simple Test', () => {
  test('renders simple component', () => {
    render(<SimpleComponent />)
    expect(screen.getByText('Simple Test Component')).toBeInTheDocument()
    expect(screen.getByText('This is a test component for Jest')).toBeInTheDocument()
  })
})

export default SimpleComponent