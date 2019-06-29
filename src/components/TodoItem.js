import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export default ({ todo }) => {
	const dispatch = useContext(TodoContext);

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
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => dispatch({ type: "toggle-complete", id, checked: e.target.checked })}
				/>
				{title}
				<button
					className="btn btn-danger"
					onClick={() => dispatch({ type: "delete", id })}
					style={{ padding: "5px 10px", float: "right" }}>
					X
				</button>
			</div>
		</div>
	)
}
