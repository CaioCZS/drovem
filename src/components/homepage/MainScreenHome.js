import styled from "styled-components"
import { GrContactInfo } from "react-icons/gr"
import { Link } from "react-router-dom"

export default function MainScreenHome({ studentsList, currentClass }) {
  return (
    <TittleClass>
      {currentClass ? (
        <>
          <h1>Estudantes da {currentClass.className}</h1>
          <ProjectsLink to={`/projetos/turma/${currentClass.classId}`}>
            Ver projetos da turma
          </ProjectsLink>
        </>
      ) : (
        <h1>Selecione uma turma para ver os estudantes</h1>
      )}
      <UlStudents>
        {currentClass && studentsList.length === 0 ? (
          <h1>Esta turma ainda não tem estudantes cadastrados</h1>
        ) : (
          studentsList.map((s) => (
            <LiStudents key={s.studentId}>
              <img src={s.picture} alt="aluno" />
              {s.name}
              <InfoStudentLink to={`/aluno/${s.studentId}`}>
                <GrContactInfo />
              </InfoStudentLink>
            </LiStudents>
          ))
        )}
      </UlStudents>
    </TittleClass>
  )
}

const TittleClass = styled.div`
  background-color: #808080;
  width: 75vw;
  height: 90vh;
  text-align: center;
`

const UlStudents = styled.ul`
  height: 79vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-top: 20px;
  div {
    background-color: red;
    width: 100vw;
    height: 100vh;
  }
`

const LiStudents = styled.li`
  background-color: #505050;
  height: 10vh;
  width: 90%;
  border-radius: 5px;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  position: relative;
  border: thin solid black;
  img {
    font-size: 10px;
    border-radius: 50px;
    width: 5em;
    height: 5em;
    margin-right: 10px;
    border: 2px solid #ff9933;
  }
  react-icons:hover {
    cursor: pointer;
  }
`
const InfoStudentLink = styled(Link)`
  position: absolute;
  right: 30px;
`

const ProjectsLink = styled(Link)`
  text-decoration: none;
  color: #ff9933;
  font-weight: bold;
`
