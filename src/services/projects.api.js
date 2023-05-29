import axios from "axios"

export function getProjects() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/projects`)
  return promise
}

export function deliveyProject(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_BASE_URL}/projects/delivery`,
    body
  )
  return promise
}
const apiProjects = { getProjects, deliveyProject }

export default apiProjects
