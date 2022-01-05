import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './Components/Nav/About';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';

function App() {
	const [randomRecipes, setRandomRecipes] = useState([]);

	// useEffect(() => {
	//     fetchRandomRecipes(3);
	// }, [])

	const fetchRandomRecipes = (num) => {
		let url = `https://api.spoonacular.com/recipes/random?number=${num}&apiKey=${process.env.REACT_APP_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.recipes);
				setRandomRecipes(res.recipes);
			});
	};

	return (
		<div>
			<Nav />

			<Routes>
        <Route path='/' element={<Main randomRecipes={randomRecipes} />} />
				<Route path='/:id' element={<RecipeDetails />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}
  
  export default App;
  