import { Button, TextField } from '@mui/material';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { supportedLocales } from '../../../supportedLocales';

const Login: NextPage = (props) => {
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

        <pre>
          { JSON.stringify({ locale: props.locale }) }
        </pre>

        <p className="text-3xl py-20">
          Log in to buy even more mushrooms!
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

export const getStaticPaths: GetStaticPaths = () => {
  // in the filepath, we have [locale].
  // in nextJS, file names with [KEY] means that we expect
  // to fill that data in at compile time.
  // the "get static methods" are run at compile time.
  // To fill in the [KEy], we must return an array of objects.
  // each object must have the following:
  // params: { KEY: path_to_show_in_address_bar}
  // i.e., because we use [locale]
  // each returned path in the array should have a
  // locale key with a value of what we want the path to be
  return {
    // note: params seem like the params that are checked during site access ("query params")
    paths: supportedLocales.map(localeString => ({ params: { locale: localeString } })),
    // render 404. Rendering anything else is not supported on static sites
    fallback: false
  };
};

// pass the params from the path (mainly, the value of [locale]) to the component
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { ...params },
  };
};

export default Login;
