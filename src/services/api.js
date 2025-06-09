import axios from 'axios'

const api = axios.create({
  baseURL: 'https://app.wewantwaste.co.uk/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api