import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './post.css'
import Details from '../Details/Details';
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';

const Post = () => {
    // console.log(props.title)
    // const posts = props.post;
    // console.log(posts)
    const [post, setPost] = useState([])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPost(data))

  }, [])
  console.log(post);
    // const {userId, title, body, id} = props.post;
    const imgStyle = {height: '50px'}
    const postStyle = { border: '3px solid grey', margin: '30px', padding: '40px'}
   
    return (
        <div className="all-post">
            {
                post.map(post => <div className="posts">
                    
                    
                    <div style={{ margin:"2px" }}>
                    <Grid container spacing={1}>
                    <Grid container item xs={4} spacing={3}>
                    <img className="image" src="https://simpleicon.com/wp-content/uploads/user1.png" alt=""/>
                         <FormRow />
                    </Grid>
                    <Grid container item xs={8} spacing={3}>
                    <h2 className="post-title highlight">Title: {post.title}</h2>
                    <h4 className="post-body">{post.body}</h4>
                    <Button variant="contained" color="primary"><Link to={"/detail/"+post.id}>See Detail</Link></Button>
                      <FormRow />
                    </Grid>
                     
                    </Grid>

                    </div>
                    {/* <Details></Details> */}
                    
                </div>)

                
            }
        </div>
    );
};

export default Post;