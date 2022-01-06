import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
    return (
			<nav>
				<Link to='/'>
					<h1>Let's Cook!</h1>
				</Link>

				<Link to='/about'>
					<p>About</p>
				</Link>
			</nav>
		);
}

export default Nav;