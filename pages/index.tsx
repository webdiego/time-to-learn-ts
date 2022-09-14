import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Time to learn TS</title>
        <meta name="description" content="Time to learn TS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col max-w-7xl mx-auto h-full py-28 item-center justify-center ">
          <Image src="/ts-logo.svg" alt="ts" width={200} height={200} />
          <p className="text-center mt-5">Is time to learn</p>
          <h1 className="text-black text-5xl font-bold text-center dark:text-blue-500">
            Typescript
          </h1>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
