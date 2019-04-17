import axios from 'axios';


const api = axios.create({
    baseURL: 'https://force-backend.herokuapp.com/',
})

export default api;