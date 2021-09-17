import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <div className="h-screen min-h-screen	px-2 flex flex-col justify-center items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col py-20 h-full">
        <h1 className="text-5xl mb-auto">
          NPM
        </h1>

        <p className="text-3xl pt-20">
          Premium mushrooms at your doorstep, every month.
        </p>


        <div className="flex items-center">
          <TextField label="Email address" variant="outlined" margin="normal" className="mr-4 flex-grow"/>
          <Button variant="contained" className="flex w-40">Start now</Button>
        </div>
      </main>

      <footer className="flex">
        Risa and Rob
      </footer>
    </div>
  )
}

export default Home
