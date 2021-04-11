import NavigationBar from "../src/Components/shared/navigationBar/NavigationBar";
import Dashboard from "../src/Components/dashboard/Dashboard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar></NavigationBar>
      <main className="main">
        <h1>Dashboard</h1>
        <Dashboard></Dashboard>
      </main>
    </>
  );
}
