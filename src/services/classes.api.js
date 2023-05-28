import axios from "axios"

function getClasses() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/classes`)
  return promise
}

function register(body) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/register`, body)
  return promise
}

const apiClasses = { getClasses, register }

export default apiClasses
