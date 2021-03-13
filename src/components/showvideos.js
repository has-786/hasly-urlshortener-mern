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
    boxShadow: "0px 0px 3px 3px #8b5a2b"
  },
  media: {
    height: 400,
    width:'100%'
  },
});

export default function Showvideo(props){
  const classes = useStyles();

 return  <div style={{width:'500px',maxWidth:'100%',padding:'40px'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia  className={classes.media}>
          <iframe width="100%"  height="400" src={props.link} allowfullscreen="allowfullscreen"></iframe>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.tags}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
}
