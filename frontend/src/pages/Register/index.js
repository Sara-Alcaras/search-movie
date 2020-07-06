import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> Cadastro</h1>
                    <p>Cadastre seu filme favorito e ajude outras pessoas a sairem do tédio</p>
                    
                    <Link className="back-link" to="/register">
                        Menu
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome do filme" />
                    <input type="autor" placeholder="Autor" />
                    <input placeholder="Classificação" />
                    <input placeholder="Duração" />
                    <input type="url" placeholder="Link da capa" />

                </form>
                <button className="fat" type="submit">Cadastrar</button>
            </div>
        </div>
    );

}