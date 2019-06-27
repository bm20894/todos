import React, { useState } from 'react';

export default ({ addTodo }) => {
	const [title, setTitle] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if(title.length > 0) {
			addTodo(title);
			setTitle("");
		}
	}

	const onChange = (e) => setTitle(e.target.value)

	return (
		<form onSubmit={onSubmit} className="m-3" style={{display: "flex"}}>
			<input
				type="text"
				placeholder="Add Todo Item"
				name="title"
				style={{flex: "8", padding: "5px"}}
				value={title}
				onChange={onChange}
			/>
			<input
				type="submit"
				value="Submit"
				className="btn btn-success ml-3"
				style={{flex: "1"}}
			/>
		</form>
	);
}
