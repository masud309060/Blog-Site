import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Post.css";
import PostItem from "./PostItem";

const Post = () => {
	const [posts, setPosts] = useState([]);
	const [endIndex, setEndIndex] = useState(10);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts";
		if (!posts.length) {
			fetch(url)
				.then((res) => res.json())
				.then((data) => setPosts(data));
		}
	}, []);

	return (
		<div>
			<div className="container py-3 posts">
				<div className="d-flex flex-column">
					{posts.slice(0, endIndex).map((item) => (
						<PostItem post={item} key={item.id} />
					))}
					<Button
						disabled={endIndex >= posts.length}
						className="ml-auto mr-3 px-3"
						size="sm"
						onClick={() => setEndIndex(endIndex + 10)}
					>
						Load more post &rarr;
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Post;
