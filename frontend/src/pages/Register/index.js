import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import './style.css';
import '../../global.css';

export default function Register() {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [classification, setClassification] = useState('');
    const [duration, setDuration] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            author,
            classification,
            duration,
        };

        try {
            const response = await api.post('movies', data);
        
            alert(`Filme cadastrado com sucesso, seu ID: ${response.data.id}`);

            history.push('/');

        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> Cadastro</h1>
                    <p>Cadastre seu filme favorito e ajude outras pessoas a sair do tédio</p>
                    
                    <Link to="/">
                         <button type="button">
                             Menu
                        </button>
                    </Link>

                    <Link to="/list">
                         <button type="button">
                             Listar filmes
                        </button>
                    </Link>
                
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome do filme" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="autor" 
                        placeholder="Autor"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />

                    <input 
                        placeholder="Classificação"
                        value={classification}
                        onChange={e => setClassification(e.target.value)}
                    />

                    <input 
                        placeholder="Duração" 
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                    
                    <button className="fat" type="submit">Cadastrar</button>

                </form>
                
            </div>
        </div>
    );

}