import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/aluno/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
