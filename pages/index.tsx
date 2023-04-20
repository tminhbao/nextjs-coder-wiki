import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
    <div>
      <Navbar/>
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, omnis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit, velit nostrum iste saepe esse consectetur deleniti pariatur possimus. Vero?</p>
      <Footer/>
    </div>
    </React.Fragment>
  )
}
