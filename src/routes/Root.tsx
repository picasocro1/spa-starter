import { Outlet } from 'react-router-dom'

export const Root = () => (
  <main className="grid h-full place-content-center">
    <Outlet />
  </main>
)
