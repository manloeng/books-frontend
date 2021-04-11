import NavigationBar from "../src/Components/shared/navigationBar/NavigationBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar></NavigationBar>
      <main className="main">
        <h1>Dashboard</h1>
        <Dashboard></Dashboard>
      </main>
    </div>
  );
}
