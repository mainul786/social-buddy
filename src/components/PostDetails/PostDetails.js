import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 345,
    height:300,
    marginRight:10,
    paddingRight:10,
    marginTop:20,
    float:'left'
  },
});


const PostDetails = (props) => {
    const classes = useStyles();
    const { title, body,id} = props.post;
    const history=useHistory();
    const handleClick=(userId)=>{
        history.push(`/user/${userId}`)
    }
    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={()=>handleClick(id)}>click me</Button>
      </CardActions>
    </Card> 
    );
};

export default PostDetails;