import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';
import '../../global.css';

export default function Register() {
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

                    <Link to="/register">
                         <button type="button">
                             Listar filmes
                        </button>
                    </Link>
                
                </section>

                <form>
                    <input placeholder="Nome do filme" />
                    <input type="autor" placeholder="Autor" />
                    <input placeholder="Classificação" />
                    <input placeholder="Duração" />
                    <input type="url" placeholder="Link da imagem" />

                    <button className="fat" type="submit">Cadastrar</button>

                </form>
                
            </div>
        </div>
    );

}