import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import firebase from './firebase';
import './App.css';

export default () => {
	const [todos, setTodos] = useState([]);

	// Toggle `this.complete` for TodoItem
	const toggleComplete = (id) => {
		const todoRef = firebase.database().ref(`todos/${id}`);
		todoRef.once("value", snapshot => {
			let item = snapshot.val();
			item.completed = !item.completed;
			todoRef.set(item);
		});
	}

	// Delete TodoItem
	const delTodo = (id) => {
		const todoRef = firebase.database().ref(`todos/${id}`);
		todoRef.remove();
	}

	// Add TodoItem
	const addTodo = (title) => {
		const todoRef = firebase.database().ref("todos");
		const todo = { title, completed: false };
		todoRef.push(todo);
		setTodos([...todos, todo]);
	}

	return (
		<React.Fragment>
			<Header />
			<div className="container">
				<Route exact path="/" render={props => (
					<React.Fragment>
							<AddTodo addTodo={addTodo} />
							<Todos
								toggleComplete={toggleComplete}
								delTodo={delTodo}
							/>
					</React.Fragment>
				)} />
				<Route path="/about" component={About} />
			</div>
		</React.Fragment>
	);
}
