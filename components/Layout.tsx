import { useRouter } from "next/router";
import { useState, useEffect, FC } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer";


import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, bsc, goerli, bscTestnet, polygon, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from '@wagmi/core'
import { ethers } from 'ethers';

var ABI = [
  "function getState() public view returns(address, bool, uint256, uint256, uint256, uint256, address, uint256, uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function createStake(uint256 _stake, uint256 _stakingPackage) external"
]

const _chains = [mainnet, goerli, bsc, bscTestnet, polygon, polygonMumbai];
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)


const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})


const injected = new InjectedConnector({ options: { name: "Connect Wallet" }, });



type CallableFunction = (resp:string)=> string;


class Blockchain 
{
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
    <WagmiConfig config={config}>
    <div className="relative bg-background min-h-screen flex flex-col transition-all duration-200">
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </WagmiConfig>
  );
};

export default Layout;
