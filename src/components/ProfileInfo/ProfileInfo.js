import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProfileInfo.css";

const ProfileInfo = () => {
	const [user, setUser] = useState({})
	const { userId } = useParams();

	useEffect(() => {
		const fetchUser = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			const data = await res.json();
			setUser(data);
		};
		fetchUser();
	}, []);

	return (
		<div className="profileInfo container">
			{/* <div className="profile_photo">{user && user.name.slice(0,1)}</div> */}
			<div>
				<strong>{user.name}</strong> <br />
				<small>{user.email}</small>
			</div>
		</div>
	);
};

export default ProfileInfo;
