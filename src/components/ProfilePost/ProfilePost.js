import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { MyContext } from "../../App";
import ProfilePostPagination from "../ProfilePostPagination/ProfilePostPagination";
import PostForm from "./PostForm";
import "./ProfilePost.css";
import ProfilePostItem from "./ProfilePostItem";

const ProfilePost = () => {
	const { userPost, myUserId } = useContext(MyContext);
	const [userPosts, setUserPosts] = userPost;
	const [showForm, setShowForm] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [postDetails, setPostDetails] = useState({});
	const [itemPerPage] = useState(6);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const { userId } = useParams();

	useEffect(() => {
		fetchPost();
		window.scrollTo(0, 0);
	}, [userId]);

	const fetchPost = async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		);
		const data = await res.json();
		setUserPosts(data);
	};

	const handleChange = (e) => {
		setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isUpdate && postDetails.title && postDetails.body) {
			fetch(
				`https://jsonplaceholder.typicode.com/posts/${postDetails.id}`,
				{
					method: "PUT",
					body: JSON.stringify({ ...postDetails }),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						alert("Your post updated successfully");
						setShowForm(false);
						setIsUpdate(false);
						setPostDetails({});
					}
				});
		}
		if (postDetails.title && postDetails.body && !isUpdate) {
			let url = "https://jsonplaceholder.typicode.com/posts";
			fetch(url, {
				method: "Post",
				body: JSON.stringify({ ...postDetails }),
				headers: { "Content-type": "application/json" },
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						alert(
							`Your post create successfully. \n Post id: ${data.id}`
						);
						setPostDetails({});
						setShowForm(false);
					}
				})
				.catch((err) => alert(err.message));
		}
	};

	const updatePostHandler = (id, title, body) => {
		setPostDetails({ ...postDetails, id, title, body });
		setShowForm(true);
		setIsUpdate(true);
		window.scrollTo(0, 0);
	};
	const deletePostHandler = (id) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.length) {
					fetchPost();
					alert("Your post delete succesfully");
				}
			})
			.catch((err) => alert(err.message));
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		setCurrentIndex(page * itemPerPage - itemPerPage);
	};

	return (
		<div className="container py-3 profilePost">
			{+userId === myUserId && (
				<Button
					onClick={() => setShowForm(!showForm)}
					className="d-block ml-auto"
					size="lg"
				>
					{showForm ? "Discard" : "Upload a new post"}
				</Button>
			)}
			{showForm && (
				<PostForm
					postDetails={postDetails}
					isUpdate={isUpdate}
					showForm={showForm}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			)}

			<div>
				{userPosts
					.slice(currentIndex, currentPage * itemPerPage)
					.map((item) => (
						<ProfilePostItem
							post={item}
							key={item.id}
							updatePostHandler={updatePostHandler}
							deletePostHandler={deletePostHandler}
						/>
					))}
			</div>
			<div className="profile_post_pagination">
				<ProfilePostPagination
					userPosts={userPosts}
					itemPerPage={itemPerPage}
					handlePageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default ProfilePost;
