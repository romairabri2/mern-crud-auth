import axios from 'axios'

const instance = axios.create({
    baseUrl: 'http://localhost:3000/api',
    withCredentials: true
})

export default instance