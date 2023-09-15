"use client"

import {useState, useEffect} from 'react';
import {useAccount, useConnect, useDisconnect} from 'wagmi';
import { ethers } from 'ethers';
import { useSigner } from 'wagmi'
import { tokenAddress, rpcUrl } from "../components/data";

export default function Page(props) {

  const { data: signer } = useSigner();
  const[error, setError] = useState("  ");
  const[balance, setBalance] = useState(0);

  const { address, isConnected } = useAccount();
  

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);   

  const getBalance = async()=> {
    const ABI = ["function balanceOf(address owner) public view returns (uint256)"];
    const contract = new ethers.Contract(tokenAddress, ABI, provider);
    let balance = (await contract.balanceOf(address)).toString();
    balance = ethers.utils.formatEther(balance);
    setBalance(balance);
  }
  

  useEffect(()=> {  if(isConnected) { getBalance(); }}, []);


  const claimAirdrops = async() => 
  {
      if(isConnected)
      {
        const ABI = ["function claimAirdrop() external  returns (bool)"];
        const writeContract = new ethers.Contract(tokenAddress, ABI, signer);
        try
        {
          const txResponse = await writeContract.claimAirdrop();
          const receipt = await txResponse.wait();
        }
        catch(error)
        {
          let err = error.reason;
          err = err.replace("execution reverted:", "");
          setError(err);
        }
     }
     else
     {
       setError("Connect to Wallet");
     }
  }

  if(!isConnected)
  {
    return(
      <div className="text-center flex w-full items-center justify-center py-24">
      <div className="w-full relative">
        <h2 className="text-xl sm:text-5xl text-white mb-12">CLAIM AIRDROPS</h2>
        <h3 className="text-xl sm:text-xl text-red-500 mb-12">Please connect your wallet</h3> 
      </div>
      </div>
    );
  }  

  return(
      <div className="text-center flex w-full items-center justify-center py-24">
      <div className="w-full relative">
          
          <h2 className="text-xl sm:text-5xl text-white mb-12">CLAIM AIRDROPS</h2> 

          <p className='text-stone-300'>Your Balance: <span className='text-amber-200'>{balance}</span> GALACTIC</p>

          <p className='text-red-500'>{error}</p>
          <button style={{minWidth:"200px", marginTop:"20px"}} onClick={claimAirdrops} className="btncto">Claim Airdrops</button>
      </div>
    </div>
  )
}
  