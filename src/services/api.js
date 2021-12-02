import axios from "axios";

const api = axios.create({
    
    baseURL: "https://api.themoviedb.org/3/movie"
})
export default api;

//var token = "345411636508e2b74308228fcfc87973";
//await axios.get("https://api.themoviedb.org/3/movie/${filme}?api_key=${TOKEN}");
