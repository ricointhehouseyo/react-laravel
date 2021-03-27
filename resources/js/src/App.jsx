import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Read from './components/Read';

import Navbar from './components/Navbar';

import Api from './Api';

const App = () => {


	return (
		<Router>
			<div className="jumbotron mb-0">
				<h1>Smartlolo Blog</h1>
				<h2>My example Blog</h2>
			</div>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about" >
					<About />
				</Route>
				<Route path="/post/:id">
					<Read />
				</Route>
			</Switch>
		</Router>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));
