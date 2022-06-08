import { render, screen } from '@testing-library/react'

import { Logo } from './Logo'

describe('Logo', () => {
  it('should render without crashing', () => {
    render(<Logo />)
    const logo = screen.getByTestId('logo')
    expect(logo).not.toHaveAttribute('width')
    expect(logo).not.toHaveAttribute('height')
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })

  it('should render with 200 of width and height', () => {
    const size = '200'
    render(<Logo size={size} />)
    const logo = screen.getByTestId('logo')
    expect(logo).toHaveAttribute('width', size)
    expect(logo).toHaveAttribute('height', size)
  })
})
