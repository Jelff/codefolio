import { render, screen } from '../__tests__/utils/testutils'
import '@testing-library/jest-dom'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('deve renderizar o título principal com saudação', () => {
    const nome = 'Jeff'
    render(<HeroSection />)
    
    const heading = screen.getByRole('heading', {
      name: new RegExp(`Oi, eu sou o ${nome}`, 'i'),
    })
    expect(heading).toBeInTheDocument()
  })
})