import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { MyContext } from "../../App";
import "./ProfilePost.css";
import ProfilePostItem from "./ProfilePostItem";

const ProfilePost = () => {
	const { userPost } = useContext(MyContext);
	const [userPosts, setUserPosts] = userPost;
	const [showForm, setShowForm] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [postDetails, setPostDetails] = useState({});
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

	return (
		<div className="container py-3 profilePost">
			{+userId === 2 && (
				<Button
					onClick={() => setShowForm(!showForm)}
					className="d-block ml-auto"
					size="lg"
				>
					{showForm ? "Discard" : "Upload a new post"}
				</Button>
			)}
			{showForm && (
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
			)}

			<div>
				{" "}
				{/* list of user post */}
				{userPosts?.map((item) => (
					<ProfilePostItem
						post={item}
						key={item.id}
						updatePostHandler={updatePostHandler}
						deletePostHandler={deletePostHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default ProfilePost;
