"use client"

import {useState, useEffect} from 'react';
import {useAccount, useConnect} from 'wagmi';
import { ethers } from 'ethers';
import { nftAddress, rpcUrl, nftPrice, NFTABI } from "../components/data";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

export default function Page(props) {

  const[price, setPrice] = useState(nftPrice);
  const[nos, setNos] = useState(0);
  const[totalPrice, setTotalPrice] = useState(0);
  const[totalSupply, setTotalSupply] = useState(0);

  const { address, isConnected } = useAccount();
  

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);   

  const getTotalSupply = async()=> {
    const ABI = ["function totalSupply() external view returns (uint256)"];
    const contract = new ethers.Contract(nftAddress, ABI, provider);
    let state = await contract.totalSupply();
    state = parseInt(state+"");
    setTotalSupply(state);
  }
  

  useEffect(()=> {  getTotalSupply(); }, []);



  const { config } = usePrepareContractWrite({
    address: nftAddress,
    abi: NFTABI,
    functionName: 'mintPublic'
  })  

  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  const mintNft = () => 
  {
     let amountInWei = ethers.utils.parseUnits(totalPrice.toString(), "ether");
     alert(amountInWei);
     write?.({nos, value: amountInWei});
  }


  const increase = () => {
    let no = nos+1;
    if(no<0) { no = 0; }
    setNos(no);  
    let total = no*price; 
    if(no==0) { total = 0; }
    setTotalPrice(total); 

  }

  const decrease = () => {
    let no = nos-1;
    if(no<0) { no = 0; }
    setNos(no);  
    let total = no*price; 
    if(no==0) { total = 0; }
    setTotalPrice(total);     
  }

  const stylee = { borderRadius:"5px", 
                  border:"solid 1px lightgray", 
                  color:"white", 
                  padding:"10px 15px", 
                  textAlign:"center",
                  margin:"10px 6px",
                  marginBottom:"20px", 
                  backgroundColor:"transparent"                  
                };

  return(
      <div className="text-center flex w-full items-center justify-center py-24">
      <div className="w-full relative">
        <h2 className="text-xl sm:text-5xl text-white mb-12">GALACTIC NFT MINTING</h2> 

          <p className='text-3xl text-stone-100'>{totalSupply} / 1500</p>
          <p className='text-stone-100'>Minted so far</p>
          <br></br>
         <div>
          <p className='text-stone-400'>Number of NFTs Minting</p>

          <button onClick={decrease} style={stylee}>-</button>
          
          <input 
                onChange={(e)=>{ 
                  let no = parseInt(e.target.value);
                  if(no<0) { no = 0; }
                  setNos(no);  
                  let total = no*price; 
                  if(no==0) { total = 0; }
                  setTotalPrice(total);  
                }}
                value={nos} 
                type="number" 
                style={stylee}/>
                <button onClick={increase} style={stylee}>+</button>
          <br />
          <p className='text-slate-400'>Price <span className='text-yellow-400'>{totalPrice}</span> Eth</p>
          <p className='text-red-500'>{error}</p>
          <button style={{minWidth:"200px", marginTop:"20px"}} disabled={!write} onClick={mintNft} className="btncto">MINT</button>
        </div>


      </div>
    </div>
  )
}

