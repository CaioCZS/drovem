import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import { useEffect, useState } from "react"
import apiClasses from "../services/classes.api.js"

export default function RegisterPage() {
  const [classes, setClasses] = useState([])
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    picture: "",
    email: "",
    turma: "",
  })

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
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
      <RegisterForm>
        <input
          placeholder="NOME"
          name="name"
          value={form.name}
          required
          onChange={handleForm}
        ></input>
        <input
          placeholder="E-MAIL"
          name="email"
          value={form.email}
          required
          onChange={handleForm}
        ></input>
        <input
          placeholder="CPF"
          required
          name="cpf"
          value={form.cpf}
          onChange={handleForm}
        ></input>
        <input
          placeholder="FOTO"
          required
          name="picture"
          value={form.picture}
          onChange={handleForm}
        ></input>
        <select name="turmas" required>
          <option value="">Selecione a turma</option>
          {classes.map((c) => (
            <option value={c.name} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit"></button>
      </RegisterForm>
    </>
  )
}

const RegistroH1 = styled.h1`
  width: 100vw;
  text-align: center;
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
    width: 90%;
    border-radius: 5px;
    border: 2px solid #ff9933;
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
