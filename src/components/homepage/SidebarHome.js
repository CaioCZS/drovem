import styled from "styled-components"

export default function SidebarHome({ classes }) {
  if (classes.length === 0) return <Sidebar>Carreando turmas...</Sidebar>

  return (
    <Sidebar>
      {classes.map((c) => (
        <ClassCard>{c.name}</ClassCard>
      ))}
    </Sidebar>
  )
}

const Sidebar = styled.ul`
  padding: 20px;
  width: 25vw;
  height: 90vh;
  background-color: #606060;
  box-shadow: 13px 2px 22px -8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ClassCard = styled.li`
  border: solid thin black;
  border-radius: 5px;
  font-size: 25px;
  text-align: center;
`
