import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>TodoList</h1>
			<div className="head-text">
				<Link
					className="head-link"
					to="/"
				>
					Home
				</Link>
				<span>|</span>
				<Link
					className="head-link"
					to="/about"
				>
					About
				</Link>
			</div>
				<br />
				{" "}
		</header>
	);
}

export default Header
