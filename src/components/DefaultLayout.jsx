import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const DefaultLayout = () => {
  return (
    <>
      <main className="defaultLayout">
        <Nav />
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout