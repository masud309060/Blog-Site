import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Post.css';
import PostItem from './PostItem';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const reqPost = data.slice(offset, offset + 10);
                setPosts(reqPost);
            });
    });
    return (
        <div>
            <div className="container py-3 posts">
                <div className="d-flex flex-column">
                    {posts.map((item) => (
                        <PostItem post={item} key={item.id} />
                    ))}
                    <Button
                        disabled={offset >= 90}
                        className="ml-auto mr-3"
                        onClick={() => setOffset(offset + 10)}
                    >
                        load more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Post;
