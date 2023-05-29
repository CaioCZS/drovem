import axios from "axios"

export function getStudentsClass(id) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/students/class/${id}`
  )
  return promise
}

const apiStudents = { getStudentsClass }

export default apiStudents
