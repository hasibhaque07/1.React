import React, { useEffect, useState } from 'react'

import {useParams, useLocation} from 'react-router-dom'
import { blogsData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState('');

    const location = useLocation();
    

    // useEffect(() =>{
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    //     console.log(blogData);
    // }, []);

    return (
        <div>
            {/* <h1>{title}</h1>
            <p>{bodyData}</p> */}

            <h1>{location.state.title}</h1>
            <p>{location.state.body}</p>
        </div>
    )
}

export default Blog
