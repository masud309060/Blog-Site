import React, { useEffect } from "react";
import { MyContext } from "../../App";
import "./ProfileInfo.css";

const ProfileInfo = () => {
	const { userInfo } = React.useContext(MyContext);
	const [user, setUser] = userInfo;
	useEffect(() => {
		let userId = 2;
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
			<div className="profile_photo">{user.name && user.name[0]}</div>
			<div>
				<strong>{user.name}</strong> <br />
				<small>{user.email}</small>
			</div>
		</div>
	);
};

export default ProfileInfo;
