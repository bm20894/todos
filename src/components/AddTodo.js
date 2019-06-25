import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		title: ""
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { title } = this.state;
		if(title.length > 0) {
			this.props.addTodo(title);
			this.setState({title: ""});
		}
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	render() {
		return (
			<form onSubmit={this.onSubmit} className="m-3" style={{display: "flex"}}>
				<input
					type="text"
					placeholder="Add Todo Item"
					name="title"
					style={{flex: "8", padding: "5px"}}
					value={this.state.title}
					onChange={this.onChange}
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
}

export default AddTodo
