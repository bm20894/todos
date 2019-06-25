import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import './App.css';
import uuid from 'uuid';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: "Take out the trash",
				completed: false
			},
			{
				id: uuid.v4(),
				title: "Make dinner",
				completed: false
			},
			{
				id: uuid.v4(),
				title: "Work on website",
				completed: false
			},
		]
	}

	// Toggle `this.complete` for TodoItem
	toggleComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		}) });
	}

	// Delete TodoItem
	delTodo = (id) => {
		this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
	}

	// Add TodoItem
	addTodo = (title) => {
		const newTodo = { id: uuid.v4(), title, completed: false }
		this.setState({todos: [...this.state.todos, newTodo]});
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container">
					<Route exact path="/" render={props => (
						<React.Fragment>
								<AddTodo addTodo={this.addTodo} />
								<Todos
									todos={this.state.todos}
									toggleComplete={this.toggleComplete}
									delTodo={this.delTodo}
								/>
						</React.Fragment>
					)} />
					<Route path="/about" component={About} />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
