import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
//import "../styles/globals.css";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* Header */}
        <Header/>
      {/* Navbar */}
      <Nav/>

      {/* Results */}


    </div>
    
  );
}
