import React from 'react';
import './PostItem.css';

const PostItem = ({ post }) => {
    const { title, body, id } = post;
    return (
        <div className="postItem m-3">
            <div className="postItem_content">
                <h3>
                    {title} --- {id}
                </h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostItem;
