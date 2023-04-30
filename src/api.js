import axios from 'axios'

const search = (term) => {
  return axios.get("https://swapi.dev/api/starships", {
    params: {
      search: term
    }
  })
}

const details = (id) => {
  return axios.get(`https://swapi.dev/api/starships/${id}`)
}

const next = (url) => {
  return axios.get(url)
}

export default {
  search,
  next,
  details
}