import { render } from '@testing-library/react'
import { Root } from './Root.tsx'

describe(Root.name, () => {
  it('shows BASE_URL', async () => {
    const screen = render(<Root />)

    expect(await screen.findByText(import.meta.env.BASE_URL)).toBeInTheDocument()
  })
})
