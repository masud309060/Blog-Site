import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableFilter from "../TableFilter/TableFilter";
import TablePagination from "../TablePagination/TablePagination";
import "./UsersTable.css";

const UsersTable = () => {
	const [allUser, setAllUser] = useState([]);
	const [itemPerPage, setItemPerPage] = useState(3);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [userState, setUserState] = useState({
		userList: [],
		sort: "",
		order: "",
	});

	useEffect(() => {
		let url = "https://jsonplaceholder.typicode.com/users";
		fetchAllUsers(url).then((value) => {
			setAllUser(value);
			setUserState({ ...userState, userList: value });
		});
	}, []);

	const fetchAllUsers = async (url) => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	const handleSortUser = (e) => {
		let sort = e.target.value;
		setUserState({
			...userState,
			sort: sort,
			userList: userState.userList.slice().sort((a, b) => {
				if (sort === "name") {
					if (a.name > b.name) {
						return 1;
					} else {
						return -1;
					}
				} else if (sort === "email") {
					if (a.email > b.email) {
						return 1;
					} else {
						return -1;
					}
				} else {
					return a.id - b.id;
				}
			}),
		});
	};

	const handleOrderUser = (e) => {
		let order = e.target.value;
		setUserState({
			...userState,
			order: order,
			userList: userState.userList.slice().sort((a, b) => {
				if (userState.sort === "name" || userState.sort === "") {
					if (order === "asc") {
						if (a.name > b.name) {
							return 1;
						} else {
							return -1;
						}
					} else {
						if (a.name < b.name) {
							return 1;
						} else {
							return -1;
						}
					}
				} else if (userState.sort === "email") {
					if (order === "asc") {
						if (a.email > b.email) {
							return 1;
						} else {
							return -1;
						}
					} else {
						if (a.email < b.email) {
							return 1;
						} else {
							return -1;
						}
					}
				}
			}),
		});
	};

	const handleChangeSearch = (e) => {
		e.preventDefault();
		let search = e.target.value;
		let matchUser = allUser?.filter((val) => {
			if (search === "") {
				return val;
			} else if (
				val.name.toLowerCase().includes(search.toLowerCase()) ||
				val.email.toLowerCase().includes(search.toLowerCase()) ||
				val.website.toLowerCase().includes(search.toLowerCase())
			) {
				return val;
			}
		});
		setUserState({
			...userState,
			userList: matchUser,
		});
	};

	// change page view ;
	const handlePageChange = (page) => {
		setCurrentPage(page);
		setCurrentIndex(page * itemPerPage - itemPerPage);
	};
	const handlePageItemChange = (e) => {
		console.log(e.target.value);
		setItemPerPage(e.target.value);
	};

	return (
		<div className="usersTable_wrapper">
			<TableFilter
				handleSortUser={handleSortUser}
				handleOrderUser={handleOrderUser}
				handleChangeSearch={handleChangeSearch}
			/>
			<table className="usersTable">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{userState?.userList
						.slice(currentIndex, currentPage * itemPerPage)
						.map((item) => (
							<tr key={item.id}>
								<td>
									<Link to={`profile/${item.id}`}>{item.name}</Link>
								</td>
								<td>{item.email}</td>
								<td>{item.website}</td>
							</tr>
						))}
				</tbody>
			</table>
			<TablePagination
				handlePageItemChange={handlePageItemChange}
				userList={userState.userList}
				itemPerPage={itemPerPage}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
};

export default UsersTable;
