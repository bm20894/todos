import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import spinner from './spinner.gif';
import firebase from '../firebase';

const Spinner = () => (
	<div style={{margin: "auto", align:"center"}}>
		<img src={spinner} alt="" width="200px" />
	</div>
)

export default ({ toggleComplete, delTodo }) => {
	const [todos, setState] = useState([]);

	useEffect(() => {
		const todosRef = firebase.database().ref("todos");
		todosRef.on("value", (snapshot) => {
			let todos = snapshot.val();
			let newTodos = [];
			for (let todo in todos) {
				const { title, completed } = todos[todo];
				newTodos.push({ id: todo, title, completed });
			}
			setState(newTodos);
		});
	}, []);

	return (
		<React.Fragment>
			{todos.length ? todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleComplete={toggleComplete}
					delTodo={delTodo}
				/>
			)) : <Spinner />}
		</React.Fragment>
	)
}
