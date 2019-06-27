import React from 'react';

export default ({ todo, toggleComplete, delTodo }) => {

	const getStyle = () => {
		const { completed } = todo;
		return {
			textDecoration: completed ? "line-through" : "none",
			backgroundColor: completed ? "grey" : "#f9f9f9",
			color: completed ? "white" : "black",
			margin: "1em"
		}
	}

	const { title, id } = todo;
	return (
		<div className="card" style={getStyle()}>
			<div className="card-body">
				<input type="checkbox" onChange={() => toggleComplete(id)} />
					{title}
					<button
						className="btn btn-danger"
						onClick={() => delTodo(id)}
						style={{ padding: "5px 10px", float: "right" }}>
						X
					</button>
			</div>
		</div>
	)
}
