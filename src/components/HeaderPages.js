import { Link } from "react-router-dom"
import styled from "styled-components"

export default function HeaderPages() {
  return (
    <Header>
      <h1>Drovem</h1>
      <StyledBackLink to="/">Voltar</StyledBackLink>
    </Header>
  )
}

const Header = styled.header`
  height: 10vh;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  h1 {
    color: #ff9933;
    font-weight: bold;
    font-size: 30px;
  }
`

const StyledBackLink = styled(Link)`
  color: #ff9933;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`
