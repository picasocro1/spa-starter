import { Outlet } from 'react-router-dom'

export const Root = () => (
  <>
    <nav className="flex justify-center gap-2 p-2">
      <a href={'/home'}>Home</a>
      <a href={'/about'}>About</a>
    </nav>
    <main className="grid h-full place-content-center">
      <Outlet />
    </main>
  </>
)
