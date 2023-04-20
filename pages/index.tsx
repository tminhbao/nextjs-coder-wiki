import { Inter } from 'next/font/google'
import Head from 'next/head'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Coder Wiki | Home</title>
        <meta name='keywords' content='home' />
      </Head>
    <div>
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, omnis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit, velit nostrum iste saepe esse consectetur deleniti pariatur possimus. Vero?</p>
    </div>
    </React.Fragment>
  )
}
