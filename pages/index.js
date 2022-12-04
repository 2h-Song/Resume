import Head from 'next/head'
import Image from 'next/image'
import Layout from '../pages/components/layout'
import Hero from '../pages/components/home/hero'
import Animation from '../pages/components/home/animation'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Song</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"> 
          <Hero/>
        </div>
      </section>
    
    
    </Layout>
  )
}
