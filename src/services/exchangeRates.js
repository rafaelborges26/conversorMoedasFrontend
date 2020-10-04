import axios from 'axios'

const apiRates = axios.create({
    baseURL: 'https://api.exchangeratesapi.io'
})

export default apiRates