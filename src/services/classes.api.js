import axios from "axios"

function getClasses() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/classes`)
  return promise
}

const apiClasses = { getClasses }

export default apiClasses
