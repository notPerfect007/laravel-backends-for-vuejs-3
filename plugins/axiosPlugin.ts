import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => {
    axios.get("http://localhost:8000/sanctum/csrf-cookie")
    axios.defaults.baseURL = "http://localhost:8000"
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
    axios.defaults.headers.common["Content-Type"] = "application/json"
    axios.defaults.headers.common["Accept"] = "application/json"
    axios.defaults.withCredentials = true

   // await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
 })
