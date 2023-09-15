import { Grid } from "@mui/material";
export default function Sneakpeeks() {

    const videos = [1,4,7,5,10,8,2,3,9]
  
    return (
      <div className="relative min-h-screen text-center  w-full  tokenbacb">
  
        <Grid container spacing={2}>

        <Grid item md={6} lg={6} xs={6} sm={6}><br/> <br/> <br/> <br/> <br/> 
        <h2 className="text-orange text-4xl sm:text-5xl mb-6 font-bold head_of_mint">
        GALACTIC INMATES <br/> <span className="headsmini">NFT MINT</span>
        </h2>
        <p className="text-lg sm:text-2xl text-white">
        <div className="descr centerall" style={{color:"#fff"}}>
        <button className="btn">Connect Wallet </button>

        </div>
        </p>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/>  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
          
</Grid>
<Grid item md={6} lg={6} xs={6} sm={6}><br/> <br/> <br/> <br/> <br/> 
        <h2 className="text-orange text-4xl sm:text-5xl mb-6 font-bold head_of_mints">
       Total Mint : 0 / 1500 <br/>
        </h2>
        <h2 className="text-orange text-4xl sm:text-5xl mb-6 font-bold head_of_mints">
      Mint Price : 0.05 <br/>
        </h2>
        <p className="text-lg sm:text-2xl text-white">
        <div className="descr centerall" style={{color:"#fff"}}>
      

        </div>
        </p>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/>  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
          
</Grid>
        </Grid>
       
      </div>
    );
  }
  