import App from './App.tsx'
import { render } from '@testing-library/react'

describe(App.name, () => {
  it('shows BASE_URL', async () => {
    const screen = render(<App />)

    expect(await screen.findByText(import.meta.env.BASE_URL)).toBeInTheDocument()
  })
})
