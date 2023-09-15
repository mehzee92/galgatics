import {useAccount, useConnect} from 'wagmi'
import {useEffect } from 'react';


export default function Connectors() 
{
    const {connectors, connect} = useConnect()
    const { isConnected } = useAccount()
  
  
    function connectAndGoBack(connector)
    {
      setTimeout(()=> { connect({connector}) }, 1000); 
    }

    console.log(connectors[0]);

    return (
        <>
        <main

           className="container">

                   <h1 className="b fs-9 cen gradient-text" data-wow-delay="0s">
                     Connect Wallet
                   </h1>

                   <p className='fs-5 cen' style={{lineHeight:"50px"}}>To connect your crypto wallet to this Dapp, please click on the "Connect Wallet" button given below.</p>
                  <div className='cen'>
                   {connectors.map((connector) => (
                           <button id={connector.id} className='btn'
                           key={connector.id}  onClick={()=>{connectAndGoBack(connector)}}>
                            {" "+connector.name+" "}
                           </button>
                    ))}
                    </div>

           </main>
     
         </>
    );
  }
  