import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const customRender = (ui: ReactElement) => {
  return render(ui, {
    wrapper: BrowserRouter
  })
}

export * from '@testing-library/react'
export { customRender as render }