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

const apiStudents = { getStudentsClass, getStudentsById }

export default apiStudents
