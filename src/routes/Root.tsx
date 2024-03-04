import { NavLink, Outlet } from 'react-router-dom'

export const Root = () => (
  <>
    <nav className="flex justify-center gap-2 p-2">
      <NavLink to={'/home'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
        Home
      </NavLink>
      <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
        About
      </NavLink>
    </nav>
    <main className="grid h-full place-content-center">
      <Outlet />
    </main>
  </>
)
