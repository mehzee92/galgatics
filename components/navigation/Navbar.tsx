import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Drawer from "./Drawer";
import {useAccount, useConnect, useDisconnect} from 'wagmi'


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);
  const router = useRouter();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();  
  const {connectors, connect} = useConnect()
  const[connectWallet, setConnectWallet] = useState("Connect Wallet");

  const connectToWallet=()=> {
    const connector = connectors[0];
    connect({connector}) 
  }

  useEffect(()=> { if(!isConnected) { connectToWallet(); } }, [isConnected]);

  useEffect(() => 
  {
      if(isConnected)
      {
          let addr = address?.substring(address?.length-4, address?.length);
          setConnectWallet("Connected: 0x.."+addr);
      }
  }, [isConnected]);

  
  useEffect(() => {
    setDrawerOpen(false);
  }, [router.asPath]);

  function logit() {
    if (window.pageYOffset > 40 && window.pageYOffset > previousPosition) {
      setPreviousPosition(window.pageYOffset);
      setScrolled(true);
    } else if (window.pageYOffset < previousPosition - 40) {
      setPreviousPosition(window.pageYOffset);
      if (window.pageYOffset > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [drawerOpen]);

  const navLinks = [
    {
      text: "Home",
      href: "./",
      color: "#fff",
    },
    {
      text: "Team",
      href: "./#team",
      color: "#fff",
    },
    {
      text: "Galactic map",
      href: "./#galactic-map",
      color: "#D48A40",
    },
    {
      text: "Mint NFT",
      href: "./shop",
      color: "#fff",
    },
    {
      text: "Claim Airdrop",
      href: "./the-rock",
      color: "#5D839B",
    },
  ];

  return (
    <>
      <div
        className={`z-40 bg-background/100 backdrop-blur-lg fixed top-0 left-0 right-0 transition-all border-b border-white/0 ${
          scrolled ? "py-1 shadow-lg" : "py-1"
        }`}
      >
        <div
          className={`max-w-screen-2xl mx-auto flex justify-between items-center px-4 md:px-8 transition-all`}
        >
          <div className="flex-1 flex items-center">
            <Link href="/">
              <a className="mr-8">
                <p className="font-gang text-white text-3xl pt-1">
                  <img src="/logo.png" className="h-14 sm:h-15"  alt="Galactic inmates logo"/>
                </p>
              </a>
            </Link>

            <div className="hidden lg:flex gap-8 text-sm tracking-wide items-center text-white font-gang pt-1">
              {navLinks.map((link, i) => {
                return (
                  <Link href={link.href} key={i}>
                    <a
                      className={`transition-all duration-350 hover:opacity-60 px-3 pt-2 pb-1 rounded ${
                        router.asPath == link.href && "bg-white/5"
                      }`}
                      style={{ color: link.color }}
                    >
                      {link.text}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end text-white">
            <div onClick={connectToWallet} 
             className="rounded-full bg-darkOrange text-white text-sm px-8 pt-3 pb-2 cursor-pointer">
             {connectWallet}
            </div>
          </div>
          <div
            className={`flex gap-x-4 items-center z-40 text-white ${
              drawerOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {!drawerOpen ? (
              <button
                aria-label="Open mobile menu"
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            ) : (
              <button
                aria-label="Close mobile menu"
                onClick={() => setDrawerOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <Drawer
          links={navLinks}
          drawerOpen={drawerOpen}
          path={router.asPath.split("?")[0]}
        />
      </div>
    </>
  );
};

export default Navbar;
