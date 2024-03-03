import '@testing-library/jest-dom'
import { act, cleanup } from '@testing-library/react'

// Transition components do some state stuff
// when they unmount. We need all of this to
// finish before we can do the next thing, so
// this needs to be wrapped in act()
afterEach(() => act(cleanup))
