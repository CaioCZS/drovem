import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import { useEffect, useState } from "react"
import apiClasses from "../services/classes.api.js"
import apiProjects from "../services/projects.api.js"
import apiStudents from "../services/student.api.js"
import { useNavigate } from "react-router-dom"

export default function ProjectDeliveryPage() {
  const [classes, setClasses] = useState([])
  const [projects, setProjects] = useState([])
  const [students, setStudents] = useState([])
  const [form, setForm] = useState({
    classId: "",
    projectId: "",
    studentId: "",
    projectLink: "",
  })
  const navigate = useNavigate()
  useEffect(() => {
    if (classes.length === 0) {
      apiClasses
        .getClasses()
        .then((res) => setClasses(res.data))
        .catch((err) => console.log(err))
    }
    if (projects.length === 0) {
      apiProjects
        .getProjects()
        .then((res) => setProjects(res.data))
        .catch((err) => console.log(err))
    }

    if (classes.length > 0) {
      apiStudents
        .getStudentsClass(form.classId)
        .then((res) => {
          setStudents(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [form.classId])

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    apiProjects
      .deliveyProject(form)
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <HeaderPages />
      <H1Delivery>Entrega de Projeto</H1Delivery>
      <DeliveryForm onSubmit={handleSubmit}>
        <select name="classId" onChange={handleForm} required>
          <option value="">Selecione sua turma</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select name="studentId" onChange={handleForm} required>
          <option value="">Selecione seu nome</option>
          {students.map((c) => (
            <option key={c.id} value={c.studentId}>
              {c.name}
            </option>
          ))}
        </select>
        <select name="projectId" onChange={handleForm} required>
          <option value="">Selecione o projeto</option>
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <input
          type="url"
          placeholder="Link do projeto"
          onChange={handleForm}
          name="projectLink"
          value={form.projectLink}
          required
        />
        <button type="submit">Entregar projeto</button>
      </DeliveryForm>
    </>
  )
}

const DeliveryForm = styled.form`
  background-color: #606060;
  width: 50vw;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 40px;
  button {
    margin-top: 25px;
    height: 60px;
    width: 80%;
    border-radius: 5px;
    border: 2px solid #ff9933;
    font-size: 30px;
  }
  input {
    height: 40px;
    width: 95%;
    border-radius: 5px;
    border: 2px solid #ff9933;
  }
  select {
    height: 40px;
    width: 95%;
    border-radius: 5px;
    border: 2px solid #ff9933;
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 2px solid #ff9933;
    outline: 0;
  }
`

const H1Delivery = styled.h1`
  margin-top: 13vh;
  text-align: center;
  font-weight: bold;
  color: #ff9933;
`
