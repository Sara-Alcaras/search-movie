import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import movieImg from '../../assets/movie.svg';

export default function Head () {
    return (
      <div className="head-container">
        <section className="head">
      
         <div className="menu-buttons">

         <p>
            Ficar em casa em períodos longos, não deve ser nada fácil.  
        </p>
        
        <p>
            Iremos catalogar <strong>filmes</strong> para tornar esse momento mais interessante.
        </p>
        
         <p>
            Comece clicando em ver filmes para ver os filmes cadastrados e contribua adicionando o seu filme favorito.
        </p>
            <Link to="/register">
              <button type="button">
                 + Adicionar filmes
              </button>
            </Link>
      
            <Link to="/list">
              <button class="fat" type="button">
                 Ver filmes
              </button>
            </Link>

            </div>

        </section>

        <img src={movieImg} alt="Movies" />
      </div>

    );
}
