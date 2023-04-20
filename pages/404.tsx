import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {}

export default function NotFound({}: Props) {
    const router = useRouter();

    useEffect(()=>{
setTimeout(()=>{
    router.push('/')
},3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div className='not-found'>
        <h1>Oopss...</h1>
        <h2>That page cannot be found =((</h2> 
        <p>Go bak to the 
            <Link href={"/"}>Home Page</Link> in 3 seconds...
        </p>
    </div>
  )
}