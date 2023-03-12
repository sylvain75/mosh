import Head from 'next/head';
import styles from './index.module.css';
import { NextPage } from 'next';
import HeroPanel from '@/components/heroPanel/heroPanel';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mosh code interview</title>
        <meta name="description" content="Mosh products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-mosh.ico" />
      </Head>
      <div className={styles.content}>
        <HeroPanel />
      </div>
    </>
  );
};
export default Home;
