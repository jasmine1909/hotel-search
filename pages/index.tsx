import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

const Home: NextPage = (exploreData) => {
  return (
    <div className="">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      {/* Header */}
      <Header />
    
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 ">
        <section  className="pt-6">
          <h2 className="font-semibold pb-5"> Explore NearBy</h2>
           <div >
           <SmallCard />
           <h2 className="font-semibold pb-5"> Explore Destination</h2>
           <MediumCard />
           <LargeCard />
            </div>
        </section>
      </main>
      <Footer />

 

     
    </div>
  )
}

export default Home


