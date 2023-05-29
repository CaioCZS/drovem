import styled from "styled-components"

export default function SidebarHome({
  classes,
  setCurrentClass,
  currentClass,
}) {
  if (classes.length === 0) return <Sidebar>Carregando turmas...</Sidebar>

  return (
    <Sidebar>
      {classes.map((c) => (
        <ClassCard
          key={c.id}
          onClick={() => setCurrentClass({ className: c.name, classId: c.id })}
          isSelected={
            currentClass && currentClass.classId === c.id ? true : false
          }
        >
          {c.name}
        </ClassCard>
      ))}
    </Sidebar>
  )
}

const Sidebar = styled.ul`
  padding: 20px;
  width: 25vw;
  height: 90vh;
  background-color: #404040;
  box-shadow: 13px 2px 22px -8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ClassCard = styled.li`
  border: solid thin black;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 25px;
  color: ${({ isSelected }) => (isSelected ? "#ff9933" : "black")};
`
