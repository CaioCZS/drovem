import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import { useEffect, useState } from "react"
import apiStudents from "../services/student.api.js"
import { useNavigate, useParams } from "react-router-dom"

export default function EditStudent() {
  const { id: studentId } = useParams()

  const [form, setForm] = useState({
    name: "",
    cpf: "",
    picture: "",
    email: "",
  })

  const navigate = useNavigate()
  useEffect(() => {
    apiStudents
      .getStudentsById(studentId)
      .then((res) => {
        const { name, cpf, picture, email } = res.data
        setForm({
          name,
          cpf,
          picture,
          email,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (window.confirm(`Confirmar edição do(a) ${form.name}?`)) {
      apiStudents
        .editStudent(form, studentId)
        .then((res) => {
          alert("Estudante editado com sucesso!")
          navigate("/")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <HeaderPages />
      <RegistroH1>Editação de estudante</RegistroH1>
      <RegisterForm onSubmit={handleSubmit}>
        <input
          placeholder="NOME"
          name="name"
          value={form.name}
          required
          onChange={handleForm}
          type="text"
        ></input>
        <input
          placeholder="E-MAIL"
          name="email"
          value={form.email}
          required
          onChange={handleForm}
          type="email"
        ></input>
        <input
          placeholder="CPF"
          required
          name="cpf"
          value={form.cpf}
          onChange={handleForm}
          type="text"
        ></input>
        <input
          placeholder="FOTO"
          required
          name="picture"
          value={form.picture}
          onChange={handleForm}
          type="url"
        ></input>
        <button type="submit">CONFIRMAR EDIÇÃO</button>
      </RegisterForm>
    </>
  )
}

const RegistroH1 = styled.h1`
  width: 100vw;
  text-align: center;
  color: #ff9933;
  font-weight: bold;
  margin-top: 15vh;
`

const RegisterForm = styled.form`
  background-color: #404040;
  margin: 0 auto;
  padding: 40px;
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
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

  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 2px solid #ff9933;
    outline: 0;
  }
`
