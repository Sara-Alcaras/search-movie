import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import './style.css';

export default function List() {
    return(
        <div className="list-container">
            <header>

            <Link to="/register">
              <button type="button">
                 + Adicionar filmes
              </button>
            </Link>
            <Link to="/">
              <button type="button">
                 Menu
              </button>
            </Link>
            </header>

            <h1> Filmes cadastrados</h1>

            <ul>
                <li>
                    <strong>
                    <p>Filme:</p>
                    <p>Autor:</p>
                    <p>Classificação:</p>
                    <p>Duração:</p>
                    </strong> 
                    <button type="button">
                        <FiTrash2 size={20} color="rgb(141, 25, 52, 0.5);"/>
                    </button>
                </li>

                <li>
                    <strong>
                    <p>Filme:</p>
                    <p>Autor:</p>
                    <p>Classificação:</p>
                    <p>Duração:</p>
                    </strong> 
                    <button type="button">
                        <FiTrash2 size={20} color="rgb(141, 25, 52, 0.5);"/>
                    </button>
                </li>

                <li>
                    <strong>
                    <p>Filme:</p>
                    <p>Autor:</p>
                    <p>Classificação:</p>
                    <p>Duração:</p>
                    </strong> 
                    <button type="button">
                        <FiTrash2 size={20} color="rgb(141, 25, 52, 0.5);"/>
                    </button>
                </li>

                <li>
                    <strong>
                    <p>Filme:</p>
                    <p>Autor:</p>
                    <p>Classificação:</p>
                    <p>Duração:</p>
                    </strong> 
                    <button type="button">
                        <FiTrash2 size={20} color="rgb(141, 25, 52, 0.5);"/>
                    </button>
                </li>

            </ul>

        </div>
    );

    

}