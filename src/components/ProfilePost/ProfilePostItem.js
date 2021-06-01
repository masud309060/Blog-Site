import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProfilePostItem.css";

const ProfilePostItem = ({ post, updatePostHandler, deletePostHandler }) => {
	const { title, body, id } = post;
	return (
		<div className="profilePostItem m-3">
			<div className="content">
				<h3>
					{title} ### {id}
				</h3>
				<p>{body}</p>
			</div>
			<div className="footer">
				<Link to={`post/${id}`}>
					<span className="comment_btn">Comment</span>
				</Link>
				<div className="ProfilePostItem_btn">  
					<Button onClick={() => updatePostHandler(id, title, body)} variant="primary">Update</Button>{" "}
					<Button onClick={() => deletePostHandler(id)} variant="danger">Delete</Button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePostItem;
