import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
// import recipe1 from '../../data.json'
import Instructions from './Instructions';

function RecipeDetails(props) {
    const [recipe, setRecipe] = useState(null)
    const [recipeSteps, setRecipeSteps] = useState([])
    const [ingredients, setIngredients] = useState([])
    const { id } = useParams()

    console.log(recipeSteps)
    useEffect(() => {
        getRecipeDetails()
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
				<h1>{recipe.title}</h1>
				<img src={recipe.image} alt='' />

				{/* Link used to take html tags out of string.
            https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/ */}

				<p>{recipe.summary.replace(/(<([^>]+)>)/gi, '')}</p>

				<h4>Instructions</h4>
				<ol>
					{!recipeSteps ? (
						<p>Loadin...</p>
					) : (
						<Instructions recipeSteps={recipeSteps} />
					)}
				</ol>
				<ul>
					{!ingredients ? (
						<p>Loading...</p>
					) : (
						<Ingredients ingredient={ingredients} />
					)}
				</ul>
			</div>
		);
}

export default RecipeDetails;