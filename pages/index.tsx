import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GFO-X User Panel Takehome</title>
        <meta name="gfo takehome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/user-panel">
          <button className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5">
            User Panel Access
          </button>
        </Link>
      </main>

      <footer className={styles.footer}>by jackywhlee</footer>
    </div>
  );
};

export default Home;
