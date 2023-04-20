import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
   <nav>
    <div>
       {/* <a href="/">Coder Wikipedia</a>  */}
    </div>
    <div>
        <a href="/users">About</a>
        <a href="/coders">All Coders</a>
    </div>
   </nav>
  )
}