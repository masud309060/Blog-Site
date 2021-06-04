import React, { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const NavBar = () => {
	const [tab, setTab] = useState("");
	const { myUserId } = useContext(MyContext);

	return (
		<>
			<Navbar
				bg="dark"
				variant="dark"
				className="position-fixed fixed-top d-block"
			>
				<Nav
					className="justify-content-end container"
					activeKey="/home"
				>
					<Nav.Item onClick={() => setTab("")}>
						<Nav.Link active={tab === ""} as={Link} to="/">
							Blogs
						</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => setTab("users")}>
						<Nav.Link
							active={tab === "users"}
							as={Link}
							to="/users"
						>
							Users
						</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => setTab("profile")}>
						<Nav.Link
							active={tab === "profile"}
							as={Link}
							to={`/profile/${myUserId}`}
						>
							Profile
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			<div style={{ height: "50px", width: "100%" }}></div>
		</>
	);
};

export default NavBar;
