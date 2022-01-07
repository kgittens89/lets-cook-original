import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Main.css';

function Button(props) {
	const [randomRecipe, setRandomRecipe] = useState([]);

	useEffect(() => {
			fetch(
				`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.REACT_APP_API_KEY}`
			)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setRandomRecipe(res.recipes[0]);
				});
		}, []);

	return (
		<div className="random-btn">
			<Link to={`${randomRecipe.id}`}>Randomize</Link>
		</div>
	);
}

export default Button;