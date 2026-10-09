import { render } from '@testing-library/react'
import Page from './page'

describe('Home Page Sanity Test', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />)
    expect(container).toBeInTheDocument()
  })
})
