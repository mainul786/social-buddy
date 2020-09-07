import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:200,
    marginLeft:500
  },
});

const UserDetails = () => {
    const classes = useStyles();
   const {userId}= useParams()
   const[comments,setComments]=useState([])
   useEffect(()=>{
       const url=`https://jsonplaceholder.typicode.com/comments/${userId}`;
       fetch(url)
       .then(res =>res.json())
       .then(data=>{
       console.log(data)   
       setComments(data)
    });
   },[])
    return (
         <Card className={classes.root}>
         <CardActionArea>
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
                <p>userId:{userId}</p>
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
              <b>Name:</b>{comments.name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
            <b>User Email:</b>{comments.email}
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
    );
};

export default UserDetails;