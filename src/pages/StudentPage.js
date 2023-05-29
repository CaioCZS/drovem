import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import apiStudents from "../services/student.api.js"
import ExperiencesList from "../components/studentpage/ExperiencesList.js"
import { AiFillEdit } from "react-icons/ai"
export default function StudentPage() {
  const { id } = useParams()
  const [student, setStudent] = useState({
    picture: "",
    cpf: "",
    email: "",
    id: "",
    name: "",
    experiences: [
      {
        className: "",
        endDate: "",
        id: "",
        startDate: "",
      },
    ],
  })
  useEffect(() => {
    apiStudents
      .getStudentsById(id)
      .then((res) => {
        console.log(res.data)
        setStudent(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <HeaderPages page="student" />
      <RegisterH1>Registro de estudante</RegisterH1>
      <PerfilImage>
        <img src={student.picture} alt="aluno" />
      </PerfilImage>

      <StudentDetails>
        <LinkEdit to="/">
          <AiFillEdit />
          Editar aluno
        </LinkEdit>
        <p>
          <b>Nome: </b>
          {student.name}
        </p>
        <p>
          <b>CPF: </b>
          {student.cpf}{" "}
        </p>
        <p>
          <b>E-mail: </b>
          {student.email}
        </p>
        <p>
          <b>Turmas: </b>
        </p>
        <ExperiencesList list={student.experiences} />
      </StudentDetails>
    </>
  )
}

const RegisterH1 = styled.h1`
  margin-top: 13vh;
  text-align: center;
`
const StudentDetails = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 40vw;
  height: 55vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const PerfilImage = styled.div`
  width: 40vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  img {
    width: 13em;
    height: 13em;
    border-radius: 100px;
    border: 2px solid #ff9933;
  }
`

const LinkEdit = styled(Link)`
  text-decoration: none;
  color: #ff9933;
`
