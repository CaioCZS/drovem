import axios from "axios"

export function getStudentsClass(id) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/students/class/${id}`
  )
  return promise
}

export function getStudentsById(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/students/${id}`)
  return promise
}

export function editStudent(body, id) {
  const promise = axios.put(
    `${process.env.REACT_APP_BASE_URL}/students/${id}`,
    body
  )
  return promise
}
const apiStudents = { getStudentsClass, getStudentsById, editStudent }

export default apiStudents
