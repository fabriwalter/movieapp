import { useEffect, useState } from 'react';
import api from '../../services/api'

//URL DA API: /movie/now_playing?api_key=e0e3c742e23c07da03302daefe5e4eca&language=pt-BR

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: 'e0e3c742e23c07da03302daefe5e4eca',
                    language: 'pt-BR',
                    page: 1
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();


    }, [])

    return(
        <div>
            <h1>Bem-vindo à home.</h1>
        </div>
    );
}

export default Home;