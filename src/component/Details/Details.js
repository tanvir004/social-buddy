import React from 'react';
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';


const Details = (props) => {
    const {id} = useParams();
    const [comment, setComment] = useState([])
    const [details, setDetails] = useState([])
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
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data =>{
      setDetails(data)
    })


  }, [])
  console.log(comment);
  
    return (
        
        <div className="detailsBody">
           {
             details.map(details=> <div className="post">
               <div>
         
        </div>
                
            <h5><span className="highlight">Name: </span>{details.name}</h5>
            <h5><span className="highlight">Emails: </span>{details.email}</h5>
            <div>
            <Grid container spacing={1}>
            <Grid container item xs={2} spacing={1}>
            <img className ="commentImage" src="https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg" alt=""/>
               <FormRow />
            </Grid>
              <Grid container item xs={10} spacing={1}>
              <h5><span className="highlight">Comment: </span>{details.body}</h5>
               <FormRow />
               </Grid>
              
                </Grid>
            
            </div>
             </div>)
           }
            
        </div>
    );
};

export default Details;