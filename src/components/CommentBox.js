import React, { Component } from 'react';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (event) => {
		this.setState({comment: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		// TODO - Call and action creator
		// And Save the Comment

		this.setState({ comment: ''});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4> Add a Comment</h4>
				<textarea onChange={this.handleChange} value={this.state.comment}/>
				<div>
					<button>Submit a Comment</button>
				</div>
			</form>
		)
	}
};

export default CommentBox;