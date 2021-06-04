import React from 'react';

const ProfilePostPagination = ({userPosts, itemPerPage, handlePageChange}) => {
    const totalPage = Math.ceil(userPosts.length / itemPerPage);
	let pageNumbers = [];
	for (let i = 1; i <= totalPage; i++) {
		pageNumbers.push(i);
	}
    return (
        <nav aria-label="Page navigation example">
				<ul className="pagination">
					{pageNumbers.map((page) => (
						<li key={page} className="page-item">
							<a
								onClick={() => handlePageChange(page)}
								className="page-link mr-1"
								href="#"
							>
								{page}
							</a>
						</li>
					))}
				</ul>
			</nav>
    );
};

export default ProfilePostPagination;