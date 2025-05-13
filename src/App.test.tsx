import { render, screen } from './components/__tests__/utils/testutils'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('header')).toBeInTheDocument()
  })
})