import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.js"
import HomePage from "./pages/HomePage.js"
import StudentPage from "./pages/StudentPage.js"
import ProjectsPage from "./pages/ProjectsPage.js"
import EditStudent from "./pages/EditStudent.js"
import ProjectDeliveryPage from "./pages/ProjectDeliveryPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/aluno/editar/:id" element={<EditStudent />} />
        <Route path="/aluno/:id" element={<StudentPage />} />
        <Route path="/projetos/turma/:id" element={<ProjectsPage />} />
        <Route path="/projetos/entrega" element={<ProjectDeliveryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
