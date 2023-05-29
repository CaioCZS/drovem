import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import SidebarHome from "../components/homepage/SidebarHome.js"
import { useEffect, useState } from "react"
import apiClasses from "../services/classes.api.js"
import MainScreenHome from "../components/homepage/MainScreenHome.js"
import apiStudents from "../services/student.api.js"

export default function HomePage() {
  const [classes, setClasses] = useState([])
  const [currentClass, setCurrentClass] = useState(undefined)
  const [studentsList, setStudentsList] = useState([])

  useEffect(() => {
    apiClasses
      .getClasses()
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err))

    if (currentClass) {
      setStudentsList([])
      apiStudents
        .getStudentsClass(currentClass.classId)
        .then((res) => setStudentsList(res.data))
        .catch((err) => {
          if (err.response.status === 404) {
            setStudentsList([])
          }
          console.log(err)
        })
    }
  }, [currentClass])

  return (
    <>
      <HeaderPages page="home" />
      <PageContainer>
        <SidebarHome
          classes={classes}
          setCurrentClass={setCurrentClass}
          currentClass={currentClass}
        />
        <MainScreenHome
          studentsList={studentsList}
          currentClass={currentClass}
        />
      </PageContainer>
    </>
  )
}

const PageContainer = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  display: flex;
`
