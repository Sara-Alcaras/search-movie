import React from 'react';

import './styles.css';

import movieImg from '../../assets/movie.svg';

export default function Head () {
    return (
      <div className="head-container">
        <section className="form">
      
          <form>
            <h1>Cadastre seu filme favorito e ajude pessoas a encontrarem filmes.</h1>
            <button type="submit">+ Adicionar filmes</button>
            
            <button class="fat" type="submit">Listar filmes</button>
          </form>

        </section>
        <img src={movieImg} alt="Movies" />
      </div>

    );
}
