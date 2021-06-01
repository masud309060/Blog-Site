import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import './PostDetail.css';

const PostDetail = () => {
	const { postId } = useParams();
	const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

	useEffect(() => {
		let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, []);

	useEffect(() => {
		let url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((cm) => setComments(cm));
	}, []);
	const goBack = () => {
		window.history.back();
	  }
	return (
		<div className="postDetail">
			<Button onClick={goBack} variant="info" size="sm"> &larr; Go Back</Button>
			<div className="postDetail_content">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="postDetail_comments">
                <h5>Comments</h5>
                {comments.map(item =>
                    <div className="commentItem" key={item.id}>
                        <strong>{item.email}</strong>
                        <p>{item.body}</p>
                    </div>
                )}
            </div>
		</div>
	);
};

export default PostDetail;
