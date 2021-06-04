import React from "react";
import "./TablePagination.css";

const TablePagination = ({
	handlePageChange,
	userList,
	itemPerPage,
	handlePageItemChange,
}) => {
	const totalPage = Math.ceil(userList.length / itemPerPage);
	let pageNumbers = [];
	for (let i = 1; i <= totalPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="table_pagination">
			<div className="table_page_item_change">
				<strong>Page Item </strong>
				<select onChange={handlePageItemChange} name="pageItem">
					<option value="3">3</option>
					<option value="5">5</option>
					<option value={userList.length}>All</option>
				</select>
			</div>

			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
							<span className="sr-only">Previous</span>
						</a>
					</li>

					{pageNumbers.map((num) => (
						<li key={num} className="page-item">
							<a
								onClick={() => handlePageChange(num)}
								className="page-link"
								href="#"
							>
								{num}
							</a>
						</li>
					))}

					<li className="page-item">
						<a className="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							<span className="sr-only">Next</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TablePagination;
