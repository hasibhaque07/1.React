import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const {posts, isLoading, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts && posts.map(post => {
                return <article key={post.id }>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            })}
        </div>
    )
}

export default PostsView
