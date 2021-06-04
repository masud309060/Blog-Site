import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [tab, setTab] = useState("");
	let userId = 2;
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
					<Nav.Item>
						<Nav.Link
							onClick={() => setTab("")}
							active={tab === ""}
							as={Link}
							to="/"
						>
							Blogs
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onClick={() => setTab("users")}
							active={tab === "users"}
							as={Link}
							to="/users"
						>
							Users
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onClick={() => setTab("profile")}
							active={tab === "profile"}
							as={Link}
							to={`/profile/${userId}`}
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
