import React, { useEffect, useState } from "react";
import "./ProfilePost.css";
import ProfilePostItem from "./ProfilePostItem";

const ProfilePost = () => {
	const [userPost, setUserPost] = useState([]);
	const userId = 2;
	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
			);
			const data = await res.json();
			setUserPost(data);
		};
		fetchPost();
	}, [userId]);

	console.log(userPost);

	return (
		<div className="container py-3 profilePost">
			{userPost?.map((item) => (
				<ProfilePostItem post={item} key={item.id} />
			))}
		</div>
	);
};

export default ProfilePost;
