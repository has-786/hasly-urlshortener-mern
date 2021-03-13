import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
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
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import ShowImage from './showImage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export  function Home(props){
  const useStyles = makeStyles(theme=>({
  
    rootDialog: {
      maxWidth: '500px',
      marginTop:'15px',
      boxShadow: "0px 0px 3px 3px #20b2aa"
    },
  
    root1: {
      width: '300px',
      boxShadow: "0px 0px 5px 5px green",
    },
    root2: {
      width: '120px',
      height:'120px',
      boxShadow: "0px 0px 2px 2px #4cc1bb",
    },
    rootIcons: {
      backgroundColor:'white',
      margin:'5px',
      boxShadow: "0px 0px 3px 3px green",
    },
    footercard: {
      backgroundColor:'aqua',
      boxShadow: "0px 0px 3px 3px green",
    },
    media: {
      height: 200,
      width:  300
    },
    mediaDialog: {
      height: 300,
      width:  300
    },
    media2: {
      height: 120,
      width:  120
    },
    iconContainer:{
      margin:"100px 0 100px 0px"
    },
    loaders:{
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    }
  }));

  const token=localStorage.getItem('token')
  
  const icons=[['Salah','#','fas fa-pray'],['Fasting','#','fas fa-star-and-crescent'],['Zakah','#','fas fa-hand-holding-heart'],['Hajj','#','fas fa-kaaba']]
    
  const services=[{name:'Azadari',details:'fa',src:'azadari.jpg'},{name:'Charity',details:'sf',src:'charity.jpg'},{name:'Education',details:'',src:'education.png'}]
  const work=[{name:'Helped families with food',value:60},{name:'Helped in Education',value:80},{name:'Events done',value:20}]
  const gallery=[{name:'Ali day 2021',src:'mm1.jpg'},{name:'Ali day 2021',src:'mm2.jpg'},{name:'Ali day 2021',src:'mm3.jpg'},
                 {name:'Ayyame Fatimiya 2021',src:'mm4.jpg'},{name:'Ayyame Fatimiya 2021',src:'mm5.jpg'},{name:'Ayyame Fatimiya 2021',src:'mm6.jpg'}
               ]
  
  const [imgName,setImgName]=useState("")
  const [imgLink,setImgLink]=useState("")
  const [openImg,setOpenImg]=useState("")

  const handleCloseImg = () => {  setOpenImg(false); };
  const handleOpenImg  = () => {  setOpenImg(true); };
  const classes = useStyles();

    return <div>
            <div style={{backgroundColour:'white',position:'fixed',width:'100%',zIndex:10}}>
                <Header {...props} />
             </div>

             <ShowImage {...{openImg,handleCloseImg,imgName,imgLink,rootDialog:classes.rootDialog,mediaDialog:classes.mediaDialog,token}}/>
       
            
    <div class='body' style={{paddingTop:'65px'}}>
       
     <div class='mainImage' style={{width:"100%"}}>
        <p id='mainImage-text'> Home is where the heart is, <br /> always keep it beautiful</p>
        <Button variant='contained' class='visit-us' id='mainImage-button'>Buy Product</Button>
     </div>
  
   
 
  {/*<section class="features-icons bg-light text-center">
    <div id='contain' class="container" >*/}
        
        <div class="showicons">
        {
          icons.map(item=>{
            return  <div class="icons-parent">
                        <center>
                          <Paper class='icons'>
                              <center><i class={`icon ${item[2]}`} ></i></center>
                          </Paper>
                          <br />
                          <h3 style={{color:'#000064',fontWeight:'bold'}}>{item[0]}</h3>
                        </center>
                    </div>
          })
        }
        </div>
       

	  
	 {/* </div>
    <br />
  </section>*/}

  <div id='about-our-center'>
      <div id='about-our-center-details'>
              <h4 id='heading1'> About </h4>
              <p id='heading2'>Our Company</p >
              <hr />
              <p id='content'></p>
              <Button variant='contained' id='learn-more' >Learn More</Button>
       </div>
  </div>


  <div id='about-our-services'>
    <div>
    <center>
       <div id='about-our-services-details'>
              <h4 id='heading1'> Serving Humanity </h4>
              <p id='heading2'>Our Services</p >
              <hr />
       </div>
      </center>

       <div class='showicons' >
         <div class='col-lg-4'>
              <p id='content'>
                <span id='uppercase'>WE'RE ON A <span id='mission'>MISSION</span> TO </span>
                 solve the problems and gain resources for a new generation.
              </p>
         </div>
         <div class='col-lg-4'>
            <div class='row'>
              <div class='col-lg-12 icons-services' >
                <i class='fas fa-quran icon' ></i>&nbsp;&nbsp;
                <span class='icon-text'>Quran Learning</span>
              </div>
              <div class='col-lg-12 icons-services' >
                <i class='fas fa-mosque icon' ></i>&nbsp;&nbsp;
                <span class='icon-text'>Mosque Development</span>
              </div>
            </div>
          </div>
         <div class='col-lg-4'>
           <div class='row'>
              <div class='col-lg-12 icons-services' >
                <i class='fas fa-hand-holding-heart icon'></i>&nbsp;&nbsp;
                <span class='icon-text' >Charity Service</span>
              </div>
              <div class='col-lg-12 icons-services' >
                <i class='fas fa-hands-helping icon'></i>&nbsp;&nbsp;
                <span class='icon-text'>Help Poor</span>
              </div>
            </div>
         </div>
       </div>
      </div>
   </div>



        <div id='about-our-work'>
          <center>
            <div id='about-our-work-details'>
                    <h4 id='heading1'> Support us, </h4>
                    <p id='heading2'>We need your help</p >
                    <hr />
            </div>
            </center>
            <div class='showicons'>
              {
                work.map(w=>{
                  return  <div style={{padding:'20px 20px 20px 0'}}>
                              <center>
                                <CircularProgress variant="determinate" value="100" style={{position:'absolute',color:'white',marginLeft:'0px',width:'120px',height:'120px'}} />
                                <CircularProgress variant="determinate" value="100" value={w.value} style={{color:'#20b2aa',width:'120px',height:'120px'}} />
                                <p style={{fontSize:'35px',marginTop:'-90px',marginLeft:'15px',color:'white'}}>{w.value}<sup class="small" style={{fontSize:'25px'}}>%</sup></p>
                                <p style={{color:'white',marginTop:'35px'}}>{w.name}</p>
                              </center>
                                <br /><br />
                           </div>
 
                 })
                }
              </div>
            <br />
            <center><Button variant='contained' color='#20b2aa' id='learn-more'>Donate Now</Button></center>
            < br /> < br /> < br /> < br />

        </div>
       
        
  <div id='about-gallery'>     
      <center>
      <div id='about-our-services-details'>
              <p id='heading2' style={{fontSize:'30px',color:'grey'}}>Memorable Moments</p >
              <hr /> 
       </div> 
       <br />
       </center>

        <div class="showicons" >
              {
                gallery.map(g=>{
                    return <Card className={classes.root2}>
                    <CardActionArea>
                    <CardMedia  
                      className={classes.media2}
                      image={g.src}
                      title={g.name}
                      onClick={()=>{setImgName(g.name); setImgLink(g.src); handleOpenImg();}}
                      />
                    </CardActionArea>
                  </Card>
                })
                  
              }
              <Button align='right' color='primary' style={{marginTop:'20px'}}>See More</Button> 
        </div>
  </div>
  


  <section  style={{background:'black',padding:'10px'}}>
  <Divider />

      <div >
        <div class="row">
          <div class="col-md-4 animated" data-animate="fadeInLeft" style={{marginTop:'30px'}} >
            <center>
            <form action="#">
              <div class="row" style={{width:'300px'}}>
                 <div class="col-md-12">
                    <h4 style={{color:'aqua',fontWeight:'bold'}}>Write to us</h4>
                 </div>             
                 <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Your Name" style={{marginBottom:'5px'}}/>
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Your Email"  style={{marginBottom:'5px'}}/>
                </div>
                <div class="col-md-12">
                  <textarea class="form-control" rows="3" placeholder="Tell Us Everything"  style={{marginBottom:'5px'}}></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-sm btn-primary submit">Send</button>
                </div>
              </div>
            </form>
            </center>
          </div>

          <div class="col-md-4 animated" style={{marginTop:'30px'}} >
            <center>
              <h4 style={{color:'aqua',fontWeight:'bold'}} >Contact us</h4>
              <address>
                  <span  class='footericons'><i class="footericons fa fa-map-marker fa-lg"></i>&nbsp; 84 State Road 123 City, State 24813</span><br /><br />
                  <span  class='footericons'><i class="footericons fa fa-phone fa-lg"></i>&nbsp; (123) xxx - xxx</span><br /><br />
                  <span  class='footericons'><i class="footericons fa fa-envelope-o fa-lg"></i>&nbsp; <a href="mailto:contact@example.com">contact&#64;example.com</a></span><br /><br />
                  <span  class='footericons'><i class="footericons fa fa-globe fa-lg"></i>&nbsp; <a href="http://support.example.com">support.example.com</a></span>
              </address>
            </center>
          </div>
          
          <div class="col-md-4 animated" style={{marginTop:'30px'}} data-animate="fadeInRight">
            <center>
                  <h4 style={{color:'aqua',fontWeight:'bold'}}>Follow us at</h4>
                  <address>
                      <span class='footericons'><i class="footericons fa fa-facebook fa-lg"></i>&nbsp; <a href='http://www.facebook.com/alqayemorg' target='_blank'>facebook.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-instagram fa-lg"></i>&nbsp; <a href='http://www.instagram.com/alqayemorg' target='_blank'>instagram.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-youtube fa-lg"></i>&nbsp; <a href='http://www.youtube.com/alqayemorg' target='_blank'>youtube.com/alqayemorg</a></span><br /><br />
                      <span class='footericons'><i class="footericons fa fa-twitter fa-lg"></i>&nbsp; <a href='http://www.twitter.com/alqayemorg' target='_blank'>twiitter.com/alqayemorg</a></span>
                  </address>
            </center>
          </div>
		  
        </div>
        <Copyright />
      </div>
    </section>

   
    </div>
  </div>

}




export default Home;