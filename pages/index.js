import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(props) {
  
  return (
    <div >
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu build using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results requests={props.results.results}/>
    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.type;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
                        .then(res=>res.json());

  return {
    props:{
      results:request,
    }
  }
}