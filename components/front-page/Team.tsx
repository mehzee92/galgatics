import Marquee from "react-fast-marquee";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsDiscord } from 'react-icons/bs';
import { Twitter } from '@mui/icons-material';
import { Grid } from '@mui/material';
export default function About() {
    return (
      <div className=" justify-center items-center backcolorofteam" id='team'>
        <div className="md:w-1/2">
           <img src='/assets/img/teamtop.png' style={{width:"100%"}} />

          <Marquee className='backofmarquee'>
          <img src="/logo.png"className="h-9 sm:h-10"alt="Galactic inmates logo"/> &nbsp;     <h1 style={{fontSize:"26px" , color:"#fff"}}>GALACTIC TEAM</h1>   
          
  </Marquee>
        </div>
       <br/>
       <div className="max-w-screen-2xl px-4 sm:px-3 mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center py-4">
      <div className= "container   md:w-1/2">
                <Grid container spacing={2} >

                                     <Grid item md={3} lg={3} xs={12} sm={12} className='centerallteam'>
                                     <Card sx={{ maxWidth: 345 }} className='card_of_team'>
      <img
        src='/assets/img/charly.gif'
        style={{borderRadius:"20px"}}

      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{color:"#fff" , fontSize:"20px" , fontWeight:"400" }}>
      Charlyhush (Founder/Operations)
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
        Charly is one of the co-founders of Galactic Inmates and in charge of Operations. With extensive experience on Web3 being part 
        </Typography>
      </CardContent>
      <CardActions className='centerallteam'>
       
        <Button size="small" style={{color:"#fff"}}>
        <a href='https://twitter.com/charlyhush'>    <Twitter/> </a>
          </Button>
      

      </CardActions>
      <CardActions className='centerallteam'>

          <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
          charlyhush
        </Typography>

      </CardActions>
    </Card>



                                     </Grid>
                                   

                                     <Grid item md={3} lg={3} xs={12} sm={12} className='centerallteam'>
                                     <Card sx={{ maxWidth: 345 }} className='card_of_team'>
      <img
        src='/assets/img/ali.gif'
        style={{borderRadius:"20px"}}

      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{color:"#fff" , fontSize:"20px" , fontWeight:"400" }}>
      Ali Lanbert (Founder/Art)
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
        Ali is the mastermind behind the art and co-founder of Galactic Inmates. With several years of experience in design & animation
        </Typography>
      </CardContent>
      <CardActions className='centerallteam'>
       
        <Button size="small" style={{color:"#fff"}}>
        <a href='https://twitter.com/aligreyart'>    <Twitter/> </a>
          </Button>
      

      </CardActions>
      <CardActions className='centerallteam'>

          <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
          alilanbert
        </Typography>

      </CardActions>
    </Card>



                                     </Grid>
                                   

                                     <Grid item md={3} lg={3} xs={12} sm={12} className='centerallteam'>
                                     <Card sx={{ maxWidth: 345 }} className='card_of_team'>
      <img
        src='/assets/img/jos.gif'
        style={{borderRadius:"20px"}}

      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{color:"#fff" , fontSize:"20px" , fontWeight:"400" }}>
      Josue Munoz (Head Moderator)
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
        Josue is in charge of keeping the Inmates in line at The Rock. He has moderated several projects in the past making sure everyone has a great.
        </Typography>
      </CardContent>
      <CardActions className='centerallteam'>
      <Button size="small" style={{color:"#fff"}}>
        <a href='https://twitter.com/NFTJosue'>    <Twitter/> </a>
          </Button>

      </CardActions>
      <CardActions className='centerallteam'>

          <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
          josuemunoz
        </Typography>

      </CardActions>
    </Card>



                                     </Grid>
                                   
                                
                                     <Grid item md={3} lg={3} xs={12} sm={12} className='centerallteam'>
                                     <Card sx={{ maxWidth: 345 }} className='card_of_team'>
      <img
        src='/assets/img/chard.gif'
        style={{borderRadius:"20px"}}

      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{color:"#fff" , fontWeight:"400"   }}>
        Chard (Moderator)
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#fff" , fontWeight:"300"}}>
        Chard is the official guard at The Rock. Taking care of the Inmates and making sure they stick to the rules.
        </Typography>
      </CardContent>
      <CardActions className='centerallteam'>
      <Button size="small" style={{color:"#fff"}}>
      <a href='https://twitter.com/th3chard'>    <Twitter/> </a>
          </Button>

      </CardActions>
      <CardActions className='centerallteam'>

          <Typography variant="body2" color="text.secondary" style={{color:"#fff"}}>
          josuemunoz
        </Typography>

      </CardActions>
    </Card>



                                     </Grid>




                                   
                                 




                                   
                                 
                                   
                                     

                </Grid>
      </div>

    </div>


      </div>
    );
  }
  