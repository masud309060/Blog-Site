import React from "react";

const TableFilter = ({handleSortUser, handleOrderUser, handleChangeSearch}) => {
	return (
		<div className="filter_table">
			<div>
				<strong>Sort by </strong>
				<select
					onChange={handleSortUser}
					className="filter_table_select"
				>
					<option value="">None</option>
					<option value="name">Name</option>
					<option value="email">Email</option>
				</select>
			</div>
			<div>
				<strong>Order </strong>
				<select
					onChange={handleOrderUser}
					className="filter_table_select"
				>
					<option value="asc">ASC</option>
					<option value="dsc">DSC</option>
				</select>
			</div>
			<input
				className="form-control w-50"
				type="text"
				placeholder="Search by name, email or website . . ."
				onChange={handleChangeSearch}
			/>
		</div>
	);
};

export default TableFilter;
