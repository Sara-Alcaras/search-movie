import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import movieImg from '../../assets/movie.svg';

export default function Head () {
    return (
      <div className="head-container">
        <section className="head">
      
         <div className="menu-buttons">

            <h1>Cadastre seu filme favorito e ajude pessoas </h1>
            <Link to="/register">
              <button type="button">
                 + Adicionar filmes
              </button>
            </Link>
      
            <Link to="/register">
              <button class="fat" type="button">
                 Listar filmes
              </button>
            </Link>
            
            </div>

        </section>

        <img src={movieImg} alt="Movies" />
      </div>

    );
}
