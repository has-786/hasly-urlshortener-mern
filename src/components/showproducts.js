import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    boxShadow: "0px 0px 3px 3px green"
  },
  media: {
    height: 300,
    width:'100%'
  },
});

export default function Showproduct(props) {
  const classes = useStyles();
  const email=localStorage.getItem('email')

  return (
    <div style={{width:'300px',padding:'20px'}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imgs[0]}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Rs. {props.price}
            </Typography>

          </CardContent>
        </CardActionArea>
        {
          (email==='syedhasnain9163@gmail.com')?
            <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
              {props._id}
            </Typography>
            :
            null
         }
        <CardActions>
            In cart: &nbsp; &nbsp;
              <IndeterminateCheckBoxRoundedIcon color='secondary' onClick={()=>props.deccartproduct(props._id,props.count,props.history.push)} /> &nbsp;&nbsp;
              <b>{props.count}</b> &nbsp;&nbsp;
              <AddBoxIcon  color='primary' onClick={()=>props.inccartproduct(props._id,props.name,props.desc,props.price,props.imgs,props.count,props.history.push)} />
              &nbsp; &nbsp;
              <DeleteIcon color='secondary' style={{height:'25px',width:'25px'}} onClick={()=>props.removecartproduct(props._id,props.history.push)} />
        </CardActions>
      </Card>
    </div>
  );
}
