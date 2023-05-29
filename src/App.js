import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.js"
import HomePage from "./pages/HomePage.js"
import StudentPage from "./pages/StudentPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/aluno/:id" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
