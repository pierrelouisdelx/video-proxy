import Head from 'next/head'
import Image from 'next/image'

import React, { useState, useRef } from 'react'

export default function Home() {
  const url = useRef<HTMLInputElement>(null)
  const [video, setVideo] = useState('')

  const handleVideo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log(url.current?.value)

    if (url.current) 
      setVideo(encodeURIComponent(url.current.value))
  }

  return (
    <div>
      <Head>
        <title>Video Proxy</title>
        <meta name="description" content="Video proxy client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center justify-center w-screen h-screen bg-[#0f172a]'>
        <div className='flex items-center'>
          <input type="text" placeholder="Enter video URL" ref={url} className='my-5 p-2 bg-[#283447] text-white rounded-2xl grow-[3]' />
          <button onClick={handleVideo} className='bg-[#38bdf8] px-5 py-2 ml-2 text-white rounded-2xl grow-[1]'>Submit</button>
        </div>
        <div className='flex mx-[9px]'>
          <video controls autoPlay width='640px' height='480px' src={url.current && url.current.value !== '' ? `http://localhost:3001/video/${video}` : ''} />
        </div>
      </main>
    </div>
  )
}
