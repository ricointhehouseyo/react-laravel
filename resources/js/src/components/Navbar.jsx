import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="mb-5">
			<nav className=" mt-0 navbar navbar-expand-lg navbar-dark bg-primary">
				<Link to="/" className="navbar-brand">My Blog</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to="/" className="nav-item nav-link active">Home</Link>
						<Link to="/about" className="nav-item nav-link active">About</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;