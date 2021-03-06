import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = ({ post }) => {
    const { title, body, id } = post;
    return (
        <Link to={`/post/${id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <div className="postItem m-3">
                <div className="postItem_content">
                    <div className="post_id">{id}</div>
                    <h3>
                        {title}
                    </h3>
                    <p>{body}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostItem;
