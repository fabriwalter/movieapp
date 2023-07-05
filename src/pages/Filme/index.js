import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './filme-info.css'

import api from '../../services/api';

//URL https://api.themoviedb.org/3/movie/455476?api_key=e0e3c742e23c07da03302daefe5e4eca&language=pt-BR

function Filme() {
    
    const { id } = useParams();
    const navigation = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
               params: {
                api_key: 'e0e3c742e23c07da03302daefe5e4eca',
                language: 'pt-BR',
               } 
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log('filme não encontrado');
                navigation("/", { replace: true });
                return;
            })
        }

        loadFilme();


        return() => {
            console.log('COMPONENTE FOI DESMONTADO!');
        }
    }, [navigation, id])
    
    if(loading) {
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }

    return(
        <div className='filme-info'>
            
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse: </h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a target='_blank' rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    );
}

export default Filme;