import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { Button, Divider, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { DrawerMenu } from '../components/compounds/DrawerMenu';
import { DrawerMenuItem } from '../components/molecules/DrawerMenuItem';

const Home: NextPage = () => {
  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-4 px-4 justify-start">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl">
            NPM
          </h1>
          <DrawerMenu>
            <DrawerMenuItem icon={ <LocalOfferOutlined /> } label="Pricing" />
            <DrawerMenuItem icon={ <MailOutlined /> } label="Contact us"/>
            <Divider variant="middle" />
            <DrawerMenuItem icon={ <AddBoxOutlined /> } label="Sign up"/>
            <DrawerMenuItem icon={ <ExitToAppOutlined /> } label="Log in"/>
          </DrawerMenu>
        </div>

        <p className="text-3xl py-20">
          Premium mushrooms at your doorstep, every month.
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

export default Home;
