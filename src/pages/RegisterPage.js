import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import { useEffect, useState } from "react"
import apiClasses from "../services/classes.api.js"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const [classes, setClasses] = useState([])
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    picture: "",
    email: "",
    classId: "",
    startDate: "",
  })
  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    apiClasses
      .register(form)
      .then((res) => {
        navigate("/")
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  function handleSelect(e) {
    console.log(e.target.value)
    setForm({
      ...form,
      startDate: e.target.value.slice(2),
      classId: e.target.value[0],
    })
  }

  useEffect(() => {
    apiClasses
      .getClasses()
      .then((res) => {
        console.log(res)
        setClasses(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <HeaderPages />
      <RegistroH1>Cadastro de estudante</RegistroH1>
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
        <select name="" required onChange={handleSelect}>
          <option value="">Selecione a turma</option>
          {classes.map((c) => (
            <option value={[c.id, c.startDate]} key={c.id} name="class">
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit">CADASTRAR</button>
      </RegisterForm>
    </>
  )
}

const RegistroH1 = styled.h1`
  width: 100vw;
  text-align: center;
  color: #ff9933;
  font-weight: bold;
`

const RegisterForm = styled.form`
  background-color: #404040;
  margin: 0 auto;
  padding: 40px;
  width: 80vw;
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
