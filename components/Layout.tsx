import { useRouter } from "next/router";
import { useState, useEffect, FC } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer";


import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, bsc, goerli, bscTestnet, polygon, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from '@wagmi/core'
import { ethers } from 'ethers';

var ABI = [
  "function getState() public view returns(address, bool, uint256, uint256, uint256, uint256, address, uint256, uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function createStake(uint256 _stake, uint256 _stakingPackage) external"
]

const chains = [mainnet, goerli, bsc, bscTestnet, polygon, polygonMumbai];
const { provider, webSocketProvider } = configureChains(chains, [publicProvider()])

const injected = new InjectedConnector({ options: { name: "Connect Wallet" }, });

const client = createClient({
  autoConnect: true,
  provider, webSocketProvider,
  connectors: [injected]
})

type CallableFunction = (resp:string)=> string;


class Blockchain 
{
    constructor() 
    {
        // this.user = {name:"", uid:""};
        // this.winner = {uid:"", name:"", address:"", voteCount:0};
        // this.isLogin = false;
        // this.apiUrl = "https://uwi.baboo.pk";
        // this.uid = "";
        // this.name = "";
        // this.address = "";
        // this.contract = "0x51eb697912b4784140603da6b2367F036bAC0c45";  
        // this.stackingContract = "0x809422f71A6099e2Df317eF308de5B1A72c9b9ad";
        // this.abi = ABI;  
        // this.owner = "";
        // this.isPollingOpen = false;
        // this.totalCandidates = 0;
        // this.totalVotters = 0;
        // this.pollingStartTime = "";
        // this.pollingStopTime = "";
        // this.meRegistered = "";
        // this.stackers = 23243;
        // this.notVoted =  0;    
        // this.rpc = "https://goerli.infura.io/v3/aea301dbaa104a99abbaabc8db92a8d7";
        // this.provider = new ethers.providers.JsonRpcProvider(this.rpc);    
    }


    ajax = async(path:string, method:string, postData:string, callBack:CallableFunction)=> {
      const fetchOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData) 
      };
      const apiEndPoint = "https://uwi.baboo.pk/";
      const response = await fetch(apiEndPoint, fetchOptions);
    
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      if(data.status=='success')
      {
        callBack(data);
      }
      else
      {
        alert("failed");
      }

    }

    test =()=> {
      alert("Tested, It is working fine.");
    } 


 } //end of blockchain



const bc = new Blockchain();


const Layout: FC<{ children: any }> = ({ children }) => {
  const { asPath } = useRouter();
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <WagmiConfig client={client}>
    <div className="relative bg-background min-h-screen flex flex-col transition-all duration-200">
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </WagmiConfig>
  );
};

export default Layout;
