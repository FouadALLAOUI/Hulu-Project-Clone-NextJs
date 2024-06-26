import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import  requests from "../utils/requests";
//import "../styles/globals.css";


export default function Home({results}) { //this Problem should be resolved in a time manner
  console.log(results)
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
      <Results results={results} />



    </div>
    
  );
}

export async function getServerSideProps(context: any) {

  const genre= context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url 
    }`
    ).then((res) => res.json());
  return{
    props:{
      results: request.results,
    }
  }
  
}
