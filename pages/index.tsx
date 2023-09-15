import Head from "next/head";
import About from "../components/front-page/About";
import Faq from "../components/front-page/Faq";
import Hero from "../components/front-page/Hero";
import Sneakpeeks from "../components/front-page/Sneakpeeks";
import Story from "../components/front-page/Story";
import Team from '../components/front-page/Team';
import Roadmaps from '../components/front-page/Roadmap';
import Claim from '../components/front-page/Claim'
import Mint from '../components/front-page/Mint'
export default function Home() {
  return (
    <>
      <Head>
        <title>Galactic Inmates</title>
        <meta
          name="description"
          content="Galactic Inmates is an exclusive animated collection of 1,500
          utility-driven art pieces living in the Ethereum blockchain."/>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta property="og:title" content="Galactic Inmates" />
        <meta
          property="og:description"
          content="Galactic Inmates is an exclusive animated collection of 1,500
          utility-driven art pieces living in the Ethereum blockchain."
        />
        <meta
          property="og:image"
          content="https://galactic-inmates-dev.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://galactic-inmates-dev.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Galactic Inmates is an exclusive animated collection of 1,500
          utility-driven art pieces living in the Ethereum blockchain."
        />
        <meta name="twitter:title" content="Galactic Inmates" />
      </Head>
      <Hero />
      <About />
  
      <Story />
      <Roadmaps/>
      <Sneakpeeks />
      
      <Faq />
      <Team />
    </>
  );
}
