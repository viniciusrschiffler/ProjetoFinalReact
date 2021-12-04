import axios from 'axios';

const api = axios.creat({
    baseURL: 'https://api.github.com/users'
}
)

export default api;