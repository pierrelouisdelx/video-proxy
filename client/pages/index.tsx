import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {
    const url = useRef<HTMLInputElement>(null);
    const [video, setVideo] = useState('');
    const [baseUrl, setBaseUrl] = useState('');

    useEffect(() => {
        setBaseUrl(process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3001');
    }, []);

    const handleVideo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (url.current) setVideo(encodeURIComponent(url.current.value));
    };

    return (
        <div>
            <Head>
                <title>Video Proxy</title>
                <meta name='description' content='Video proxy client' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='flex flex-col items-center justify-center h-screen bg-[#0b1120] font-mono'>
                <h1 className='text-white text-3xl font-bold mt-10'>Node Video Proxy</h1>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='flex items-center'>
                        <input type='text' placeholder='Enter video URL' ref={url} className='my-5 p-2 bg-[#1e293b] rounded-2xl grow-[3] outline-none text-[#CBD5E1]' />
                        <button onClick={handleVideo} className='bg-[#0ea5e9] px-5 py-2 ml-2 text-white rounded-2xl grow-[1] hover:bg-sky-400'>
                            Submit
                        </button>
                    </div>
                    <div className='flex mx-[9px]'>
                        <video className='rounded-3xl' controls autoPlay width='640px' height='480px' src={url.current && url.current.value !== '' ? `${baseUrl}/video/${video}` : ''} />
                    </div>
                </div>
            </main>
        </div>
    );
}
