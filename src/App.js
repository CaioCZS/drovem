import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.js"
import HomePage from "./pages/HomePage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/aluno/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
