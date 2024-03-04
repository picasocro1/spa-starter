import { Link, Outlet } from 'react-router-dom'

export const Root = () => (
  <>
    <nav className="flex justify-center gap-2 p-2">
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
    </nav>
    <main className="grid h-full place-content-center">
      <Outlet />
    </main>
  </>
)
