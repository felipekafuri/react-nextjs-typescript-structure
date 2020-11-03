import React from 'react'
import Head from 'next/head'

import LogoImg from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogoImg />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Felipe Kafuri</p>

    </Container>
  )
}
export default Home
