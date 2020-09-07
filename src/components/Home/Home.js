import React, { useState, useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';


const Home = () => {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setPost(data)); 
    },[])
    return (
        <div>
            <h5>post list:{post.length}</h5>
            {
                post.map((post)=><PostDetails post={post}></PostDetails>)
            }
        </div>
    );
};

export default Home;