import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Cams from "./pages/Cams"
import DefaultLayout from "./components/DefaultLayout"


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="/user" element={<Login />} />
          <Route path="/penitentiary" element={<Login />} />
          <Route path="/prisoners" element={<Login />} />
          <Route path="/cams" element={<Cams />} />
          <Route path="/map" element={<Login />} />
          <Route path="/register-cams" element={<Login />} />
          <Route path="/alert-ia" element={<Login />} />
          <Route path="/maintenance" element={<Login />} />

        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
