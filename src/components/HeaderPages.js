import { Link } from "react-router-dom"
import styled from "styled-components"

export default function HeaderPages({ page }) {
  return (
    <Header>
      <h1>Drovem</h1>
      {page === "home" ? (
        <>
          <StyledRegisterLink to="/registro">
            Cadastrar estudante
          </StyledRegisterLink>
          <StyledRegisterLink to="/projetos/entrega">
            Entregar Projeto
          </StyledRegisterLink>
        </>
      ) : (
        <StyledBackLink to="/">Voltar</StyledBackLink>
      )}
    </Header>
  )
}

const Header = styled.header`
  height: 10vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  h1 {
    color: #ff9933;
    font-weight: bold;
    font-size: 30px;
  }
  position: fixed;
  top: 0;
  right: 0;
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

const StyledRegisterLink = styled(Link)`
  color: #ff9933;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`
