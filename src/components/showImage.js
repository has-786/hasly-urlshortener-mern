import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';

import Copyright from './copyright'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Header from '../containers/header'
import '../css/home.css'

import Button  from '@material-ui/core/Button';
import { AccountBalanceOutlined } from '@material-ui/icons';
import { DialogContent,Dialog,DialogTitle, Divider } from '@material-ui/core';




export default function ShowImage({openImg,handleCloseImg,imgName,imgLink,rootDialog,mediaDialog,token})
{

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
        <Card className={rootDialog}>
        <CardActionArea>
          <CardMedia  
            className={mediaDialog}
            image={imgLink}
            title={imgName}
           />
          </CardActionArea>
      </Card>
    </DialogContent>
  </Dialog>







}