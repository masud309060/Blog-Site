import React from "react";
import { Button, Form } from "react-bootstrap";

const PostForm = ({
	postDetails,
	handleSubmit,
	handleChange,
	showForm,
	isUpdate,
}) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Post Title</Form.Label>
				<Form.Control
					onChange={handleChange}
					name="title"
					defaultValue={postDetails.title}
					type="type"
					placeholder="Post title "
					required
				/>
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Description Body</Form.Label>
				<Form.Control
					onChange={handleChange}
					name="body"
					defaultValue={postDetails.body}
					as="textarea"
					rows={5}
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				{showForm && isUpdate ? "Update" : "Post"}
			</Button>
		</Form>
	);
};

export default PostForm;
