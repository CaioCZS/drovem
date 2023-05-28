import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/student/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
