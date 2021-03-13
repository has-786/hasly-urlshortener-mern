
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width:'400px',
      maxWidth:'90%',
      height:'100%',
      boxShadow: "0px 0px 8px 8px purple",
      margin:'15px'
    },
    value:{
        color:'purple',
        fontSize:'17px',
        wordBreak: 'break-all'
    },
    title:{
      fontSize:'17px',
      paddingRight:'50px'
    },
    a:{
      textDecoration:'none'
    }
  
  });
  

export default function Showurl({urlobj,email})
{
    const classes = useStyles();

    return <Card className={classes.root} >
    <CardContent>
      <table className={classes.table}>
        <tr>
          <td><p className={classes.title}>Name</p></td> <td><p className={classes.value}>{urlobj?.name}</p></td>
        </tr>
        <tr>
          <td><p className={classes.title}>Long Url</p></td> <td><a className={classes.a} href={urlobj?.longUrl}><p className={classes.value}>{urlobj?.longUrl}</p></a></td>
        </tr>
        <tr>
          <td><p className={classes.title}>Short Url</p></td> <td><a className={classes.a} href={urlobj?.shortUrl}><p className={classes.value}>{urlobj?.shortUrl}</p></a></td>
        </tr>
        <tr>
          <td><p className={classes.title}>Urlcode</p></td> <td><p className={classes.value}>{urlobj?.urlCode}</p></td>
        </tr>   
      </table>
    </CardContent>
  {
    (email==='syedhasnain9163@gmail.com')?
      <Typography variant="body2" color="textSecondary" component="p" paragraph={true}>
        {urlobj?._id}
      </Typography>
      :
      null
   }
</Card>
}