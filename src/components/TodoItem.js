import React, { Component } from 'react';

class TodoItem extends Component {

	getStyle = () => {
		const { completed } = this.props.todo;
		return {
			textDecoration: completed ? "line-through" : "none",
			backgroundColor: completed ? "grey" : "#f9f9f9",
			color: completed ? "white" : "black",
			margin: "1em"
		}
	}

	render() {
		const { todo, toggleComplete, delTodo } = this.props;
		return (
			<div className="card" style={this.getStyle()}>
				<div className="card-body">
					<input type="checkbox" onChange={toggleComplete.bind(this, todo.id)} />
						{todo.title}
					<button className="btn btn-danger" onClick={delTodo.bind(this, todo.id)} style={btnStyle}>X</button>
				</div>
			</div>
		)
	}
}

const btnStyle = {
	padding: "5px 10px",
	float: "right"
}

export default TodoItem
