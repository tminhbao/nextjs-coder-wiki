import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
   <nav>
    <div>
       <Link href={"/"}>
            <span>Home Page</span>
       </Link>
    </div>
    <div>
        <Link href="/users">Users</Link>
        <Link href="/coders">Coders</Link>
    </div>
   </nav>
  )
}