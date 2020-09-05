import React from 'react';
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'


const Details = (props) => {
    const {id} = useParams();
    const [comment, setComment] = useState([])
    // const {id} = props.pst;
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data =>{
      setComment(data)
    //   console.log(data)
    //   const comments = data.map(cmt => cmt.postId)
    //   console.log(comments)
    })

    

  }, [])
  console.log(comment);
    return (
        <div className="detailsBody">
            <h3>User Id: {comment.userId}</h3>
            <h3>{comment.Id}</h3>
            <h3>Title: {comment.title}</h3>
            <h5>Details: {comment.body}</h5>
        </div>
    );
};

export default Details;