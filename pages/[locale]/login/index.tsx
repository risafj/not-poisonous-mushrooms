import { Button, TextField } from '@mui/material';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { supportedLocales } from '../../../supportedLocales';

const Login: NextPage<{locale: string}> = (props) => {
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
  // In the filepath, we have [locale].
  // In NextJS, file names with [KEY] means that we expect
  // to fill that data in at compile time.
  // The "getStatic" methods are run at compile time.
  // To fill in the [KEY], we must return an array of objects.
  // In this case the array would look like this:
  // [{ params: { locale: 'en' } }, { params: { locale: 'ja' } }]
  return {
    paths: supportedLocales.map(localeString => ({ params: { locale: localeString } })),
    // Render 404. Rendering anything else is not supported on static sites.
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
