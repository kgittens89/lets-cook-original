import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
			<div>
				<Link to='/'>
					<h1>Let's Cook!</h1>
				</Link>

				<Link to='/about'>
					<p>About</p>
				</Link>
			</div>
		);
}

export default Nav;