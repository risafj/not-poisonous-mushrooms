import { AddBoxOutlined, ExitToAppOutlined, LocalOfferOutlined, MailOutlined } from '@mui/icons-material';
import { Button, Divider, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { DrawerMenu } from '../../components/compounds/DrawerMenu';
import { DrawerMenuItem } from '../../components/molecules/DrawerMenuItem';
import { TopLevelTemplate } from '../../@types';

export const HomeTemplate: TopLevelTemplate = (props) => {
  const menu = () => {
    return (
      <>
        <div className="hidden md:flex flex-row justify-between w-96">
          <Button variant="text" color="secondary">
            Pricing
          </Button>
          <Button variant="text" color="secondary">
            Contact us
          </Button>
          <Button variant="contained" color="secondary">
            Login
          </Button>
        </div>
        <DrawerMenu className="md:hidden">
          <DrawerMenuItem icon={ <LocalOfferOutlined /> } label="Pricing" />
          <DrawerMenuItem icon={ <MailOutlined /> } label="Contact us" />
          <Divider variant="middle" />
          <DrawerMenuItem icon={ <AddBoxOutlined /> } label="Sign up" />
          <DrawerMenuItem icon={ <ExitToAppOutlined /> } label="Log in" />
        </DrawerMenu>
      </>
    );
  };

  return (
    <div className="h-screen min-h-screen px-2 flex flex-col items-center">
      <Head>
        <title>NPM</title>
        <meta name="description" content="Mushroom subscription service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-4 px-4 justify-start">
        <div className="flex flex-row justify-between items-center">
          <Typography variant="h3" component="h1">
            NPM
          </Typography>
          { menu() }
        </div>

        <Typography variant="h4" component="h2" className="py-20">
          Premium { props.locale === 'en' ? 'mushrooms' : '椎茸' } at your doorstep, every month.
        </Typography>

        <div className="flex flex-col md:flex-row">
          <TextField label="Email address" variant="outlined" className="flex-grow mb-4 md:mr-4 md:mb-0"/>
          <Button variant="contained" className="flex w-40 self-center md:self-auto">Start now</Button>
        </div>
      </main>

      <Typography className="pt-10">
        Risa and Rob
      </Typography>
    </div>
  );
};
