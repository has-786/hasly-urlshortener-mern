import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import url from './url'

import Copyright from './copyright'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Header from '../containers/header'
import '../css/home.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Button  from '@material-ui/core/Button';
import { AccountBalanceOutlined } from '@material-ui/icons';
import { DialogContent,Dialog,DialogTitle, Divider } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function ShowMultipleImages({openImg,handleCloseImg,imgName,imgLink,rootDialog,mediaDialog,index,setIndex,token})
{
    const matches = useMediaQuery('(min-width:600px)');

    return <Dialog
    open={openImg}
    onClose={handleCloseImg}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
      <DialogTitle id="alert-dialog-title">{imgName}
        <CloseIcon style={{color:'red',float:'right'}} onClick={handleCloseImg}/>
      </DialogTitle>

      <DialogContent>
        <Card className={rootDialog} style={{height: (matches)?500:350}} >
            <CardActionArea>
                <CardMedia className={mediaDialog}
                style={{height: (matches)?430:330}} 
                    image={url+`/uploads/${imgLink[index]}/${token}`}
                    title={imgName}
                />
                    {(index>0)?<ArrowBackIosIcon style={{width:'30px',height:'30px',color:'#8b5a2b'}} onClick={()=>setIndex(index-1)}/>:null}
                    {(index<imgLink.length-1)?<ArrowForwardIosIcon style={{float:'right',width:'30px',height:'30px',color:'#8b5a2b'}} onClick={()=>setIndex(index+1)}/>:null}
            </CardActionArea>
        </Card>
    </DialogContent>
   
  </Dialog>







}