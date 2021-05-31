import React from "react";
import { Button } from "react-bootstrap";
import './ProfilePostItem.css';

const ProfilePostItem = ({post}) => {
    const { title, body, id} = post;
	return (
		<div className="profilePostItem m-3">
			<div className="content">
				<h3>
					{title} ### {id}
				</h3>
				<p>{body}</p>
			</div>
            <div className="footer">
                <span className="comment_btn">Comment</span>
                <div className="ProfilePostItem_btn">
                    <Button variant="primary">Update</Button> {' '}
                    <Button variant="danger">Delete</Button>
                </div>
            </div>
		</div>
	);
};

export default ProfilePostItem;
