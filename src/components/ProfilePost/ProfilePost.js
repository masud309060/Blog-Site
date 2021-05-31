import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import "./ProfilePost.css";
import ProfilePostItem from "./ProfilePostItem";

const ProfilePost = () => {
	const { userPost } = useContext(MyContext);
	const [userPosts, setUserPosts] = userPost;
	const userId = 2;
	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
			);
			const data = await res.json();
			setUserPosts(data);
		};
		fetchPost();
	}, []);

	console.log(userPost);

	return (
		<div className="container py-3 profilePost">
			{userPosts?.map((item) => (
				<ProfilePostItem post={item} key={item.id} />
			))}

		</div>
	);
};

export default ProfilePost;
