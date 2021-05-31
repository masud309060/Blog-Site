import React, { useEffect, useState } from "react";
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
	return (
		<div className="postDetail">
			<div className="postDetail_content">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="postDetail_comments">
                <h5>Comments</h5>
                {comments.map(item =>
                    <div className="commentItem">
                        <strong>{item.email}</strong>
                        <p>{item.body}</p>
                    </div>
                )}
            </div>
		</div>
	);
};

export default PostDetail;
