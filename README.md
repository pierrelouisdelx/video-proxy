# Node Video Proxy

A simple proxy server that allows you to bypass cross-origin video limitations and stream video from a remote server to a local client.

## Motivation

Some servers can be configured to refuse cross-origin requests. This is a problem when you want to stream video from a remote server to a local client. This proxy server allows you to bypass this limitation.

To get around this, we can create a server that makes a direct request on our behalf, and then sends back the video stream as a response. This proxy sends the video stream by chunking it into smaller pieces, and then sending each piece back to the client as a response. This allows us to stream the video to the client without having to wait for the entire video to be downloaded.

The chunks are set to be 1MB in size, but this can be changed by modifying the `CHUNK_SIZE` variable in `ProxyRouter.ts`.

## Architecture

This project is divided into two parts: the proxy server and the client.

### Server

The proxy server is built using Node.js and Express. The server is configured to listen on port 3001. The server has a single endpoint, `/video`, which accepts a `url` query parameter. The `url` parameter is the URL of the video that you want to stream.

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Client

The client is built using NextJS, React, TailwindCSS and Typescript. The client is configured to listen on port 3000. The client has a single page, `/`, which accepts a URL in the input field. When the user clicks the "Submit" button, the client will make a request to the proxy server, and then stream the video to the client.

![NextJS](https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Installation
```bash
yarn
```

## Usage
```bash
yarn dev
```

## License
This project is licensed under the MIT License.