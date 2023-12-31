"use client"

import {useState, useEffect} from 'react';
import {useAccount, useConnect, useDisconnect} from 'wagmi';
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { tokenAddress, rpcUrl, CONTRACTABI } from "../components/data";

export default function Page(props) 
{

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


  const { config } = usePrepareContractWrite({ 
                                                address:tokenAddress, 
                                                abi:CONTRACTABI, 
                                                functionName:'claimAirdrop'
                                              });

  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  return(
      <div className="text-center flex w-full items-center justify-center py-24">
        <div className="w-full relative">
            <h2 className="text-xl sm:text-5xl text-white mb-12">CLAIM AIRDROPS</h2> 
            <p className='text-stone-300'>Your Balance: <span className='text-amber-200'>{balance}</span> GALACTIC</p>
            <button style={{minWidth:"200px", marginTop:"20px"}} 
            disabled={!write} onClick={() => write?.()} className="btncto">Claim Airdrops</button>
        </div>
    </div>
  )
}
  