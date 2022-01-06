import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import './Main.css'

function Main({randomRecipes}) { 
    if (!randomRecipes) {
        return <p>Loading...</p>
    }
    return (
			<>
				<div className='random-recipe-card'>
					{randomRecipes.map((recipe) => {
						return (
							<Link to={`/${recipe.id}`} key={recipe.id}>
								<h2>{recipe.title}</h2>
								<img src={recipe.image} alt={recipe.title} />
							</Link>
						);
					})}
				</div>
					<Button />
			</>
		);
        }
        
        export default Main;