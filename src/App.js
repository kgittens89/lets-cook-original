import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './Components/Nav/About';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';


function App() {
	return (
		<div>
			<Nav />
			<Routes>
        		<Route path='/' element={<Main />} />
				<Route path='/:id' element={<RecipeDetails />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}
  
  export default App;
  