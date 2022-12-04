import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../pages/components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>송해현</title>
        <meta name="description" content="송해현 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>메인 페이지</h1>
    </Layout>
  )
}
