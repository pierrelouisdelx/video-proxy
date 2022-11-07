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

      <main>
        <div className='flex'>
          <input type="text" placeholder="Enter video URL" ref={url}/>
          <button onClick={handleVideo}>Submit</button>
        </div>
        <div className='flex'>
          <video controls autoPlay>
            <source src={`http://localhost:3001/video/${video}`} type="video/mp4" />
          </video>
        </div>
      </main>
    </div>
  )
}
