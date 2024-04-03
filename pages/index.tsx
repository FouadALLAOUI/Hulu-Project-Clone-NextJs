import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
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
      <Results />



    </div>
    
  );
}

export async function getServerSideProps(context: any) {

  const genre= context.query.genre
  
}
