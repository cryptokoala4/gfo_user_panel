import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GFO-X User Panel Takehome</title>
        <meta name="gfo takehome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/user-panel">User Panel Access</Link>
      </main>

      <footer className={styles.footer}>by jackywhlee</footer>
    </div>
  );
};

export default Home;
