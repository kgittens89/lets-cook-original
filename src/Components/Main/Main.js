import React from 'react';
import { Link } from 'react-router-dom';
// import recipes from '../../data.json'
import Button from './Button';

function Main({randomRecipes}) { 
    if (!randomRecipes) {
        return <p>Loading...</p>
    }
    return (
        <div>
        {randomRecipes.map((recipe) => {
            return (
                <Link to={`/${recipe.id}`} key={recipe.id}>
                    <h2>{ recipe.title }</h2>
                    <img src={recipe.image} alt={recipe.title} />
                </Link>
                )
        })}
            <Button />
            </div>
            );
        }
        
        export default Main;