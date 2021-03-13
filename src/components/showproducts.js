import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import ShowMultipleImages from './ShowMultipleImages';
import url from './url'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height:500,
    boxShadow: "0px 0px 8px 8px #8b5a2b"
  },
  rootDialog: {
    width:'500px',
    maxWidth:'100%',
    marginTop:'15px',
    boxShadow: "0px 0px 3px 3px #20b2aa",
    display:'flex',
    flexFlow:'row wrap'
  },
  mediaDialog: {
    height:300,
    width:'100%',
  },

  media: {
    height: 320,
    width:'100%'
  },

});

export default function Showproduct(props) {
  const matches = useMediaQuery('(min-width:600px)');

  const classes = useStyles();
  const email=localStorage.getItem('email')
  const token=localStorage.getItem('token')

  const [imgName,setImgName]=useState("")
  const [index,setIndex]=useState(0)

  const [imgLink,setImgLink]=useState([])
  const [openImg,setOpenImg]=useState("")

  const handleCloseImg = () => {  setIndex(0); setOpenImg(false); };
  const handleOpenImg  = () => {  setOpenImg(true); };

  return (
    <div style={{width:(matches)?'500px':'100%',padding:(matches)?'40px':'10px'}}>
     <ShowMultipleImages {...{openImg,handleCloseImg,imgName,imgLink,rootDialog:classes.rootDialog,mediaDialog:classes.mediaDialog,index,setIndex,token}}/>
      <Card className={classes.root} >
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={url+`/uploads/${imgLink[index]}/${props.token}`}
            title={props.name}
            onClick={()=>{setImgName(props.name); setImgLink(props.imgs); handleOpenImg();}}
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
        <Button style={{float:'right'}} color='primary'>See Video</Button>

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
