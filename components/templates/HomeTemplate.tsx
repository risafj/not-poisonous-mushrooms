import { Button, TextField } from '@mui/material';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { TopLevelTemplate } from '../../@types';

export const HomeTemplate: TopLevelTemplate = (props) => {
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-10 px-4 justify-start">
        <h1 className="text-5xl mb-auto">
          NPM
        </h1>

        <p className="text-3xl py-20">
          Premium { props.locale === 'en' ? 'mushrooms' : '椎茸' } at your doorstep, every month.
        </p>

        <div className="flex flex-col md:flex-row">
          <TextField label="Email address" variant="outlined" className="flex-grow mb-4 md:mr-4 md:mb-0"/>
          <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
        </div>
      </main>

      <footer className="pt-10">
        Risa and Rob
      </footer>
    </div>
  );
};
