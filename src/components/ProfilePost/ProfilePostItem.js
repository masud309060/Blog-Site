import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import "./ProfilePostItem.css";

const ProfilePostItem = ({ post, updatePostHandler, deletePostHandler }) => {
	const { myUserId } = useContext(MyContext);
	const history = useHistory();
	const { userId } = useParams();
	const { title, body, id } = post;
	return (
		<div className="profilePostItem m-3">
			<div className="content">
				<div className="post_id">{id}</div>
				<h3>
					{title}
				</h3>
				<p>{body}</p>
			</div>
			<div className="footer">
				<span
					onClick={() => history.push(`/post/${id}`)}
					className="comment_btn"
				>
					Comment
				</span>
				{+userId === myUserId && (
					<div className="ProfilePostItem_btn">
						<Button
							onClick={() => updatePostHandler(id, title, body)}
							variant="primary"
						>
							Update
						</Button>{" "}
						<Button
							onClick={() => deletePostHandler(id)}
							variant="danger"
						>
							Delete
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfilePostItem;
