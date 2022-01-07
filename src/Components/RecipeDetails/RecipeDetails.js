import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import recipe1 from '../../data.json'
import Ingredients from './ExtraData/Ingredients';
import Instructions from './ExtraData/Instructions';
import './RecipeDetails.css';

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null)
    const [recipeSteps, setRecipeSteps] = useState([])
    const [ingredients, setIngredients] = useState([])
    const { id } = useParams()

    useEffect(() => {
		getRecipeDetails()
		//eslint-disable-next-line
    }, [])

    const getRecipeDetails = () => {
        fetch(
					`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.REACT_APP_API_KEY}`
				)
					.then((res) => res.json())
					.then((res) => {
                        console.log(res);
                        setRecipe(res)
                        setRecipeSteps(res.analyzedInstructions[0].steps);
                        setIngredients(res.extendedIngredients)
					});
    }

    if (!recipe) {
        return <p>Loading...</p>
    }
    return (
		<div>
			{/* change this to h2 later */}
				<h2>{recipe.title}</h2> 
				<img src={recipe.image} alt={recipe.title} />

				{/* Link used to take html tags out of string.
            https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/ */}

				<p>{recipe.summary.replace(/(<([^>]+)>)/gi, '')}</p>

				<h4>Instructions</h4>
					{!recipeSteps ? (
						<p>Loading...</p>
					) : (
						<Instructions recipeSteps={recipeSteps} />
					)}
					{!ingredients ? (
						<p>Loading...</p>
					) : (
						<Ingredients ingredients={ingredients} />
					)}
			</div>
		);
}

export default RecipeDetails;