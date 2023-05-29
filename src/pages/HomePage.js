import styled from "styled-components"
import HeaderPages from "../components/HeaderPages.js"
import SidebarHome from "../components/homepage/SidebarHome.js"
import { useEffect, useState } from "react"
import apiClasses from "../services/classes.api.js"

export default function HomePage() {
  const [classes, setClasses] = useState([])
  const [currentClass, setCurrentClass] = useState(undefined) //parei aqui(renderizar alunos das turmas)
  useEffect(() => {
    apiClasses
      .getClasses()
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <HeaderPages page="home" />
      <PageContainer>
        <SidebarHome classes={classes} />
      </PageContainer>
    </>
  )
}

const PageContainer = styled.div`
  width: 100vw;
  height: 90vh;
`
