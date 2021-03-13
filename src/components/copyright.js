import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="h6" style={{color:'white',marginTop:'10px'}} align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Alqayem Organisation Kolkata
        </Link>{' '}
        {2021}
        {'.'}
      </Typography>
    );
  }