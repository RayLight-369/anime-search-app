import {Outlet, Link} from "react-router-dom"

export default function Layout() {
  return (
    <>
      <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>About</Link>
      <Link to={ "/about" }>Contact</Link>
      </nav>
      <Outlet />
    </>
  )
}