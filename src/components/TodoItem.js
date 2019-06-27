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

	const { title, completed, id } = todo;
	return (
		<div className="card" style={getStyle()}>
			<div className="card-body">
				{ completed ?
					<input type="checkbox" checked onChange={(e) => toggleComplete({id, checked: e.target.checked})}/>
						:
					<input type="checkbox" onChange={(e) => toggleComplete({id, checked: e.target.checked})}/>
				}

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
