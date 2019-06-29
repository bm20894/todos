import React from 'react';
import { Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { TodoContext } from './TodoContext';
import { dispatch } from './components/Dispatch';

import About from './pages/About';
import Markdown from './pages/Markdown';

import './App.css';

export default () => {
	return (
		<React.Fragment>
			<Header />
			<div className="container">
				<TodoContext.Provider value={dispatch}>
					<Route exact path="/" render={props => (
						<React.Fragment>
							<AddTodo />
							<Todos />
						</React.Fragment>
					)} />
			</TodoContext.Provider>
			<Route path="/about" component={About} />
			<Route path="/markdown" component={Markdown} />
		</div>
	</React.Fragment>
	);
}
