import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=e0e3c742e23c07da03302daefe5e4eca&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;