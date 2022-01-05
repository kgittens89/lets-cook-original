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
                <Link to={`/${recipe.id}`} key={recipe.id}><img src={recipe.image} alt="" /></Link>
                )
        })}
            <Button />
            </div>
            );
        }
        
        export default Main;