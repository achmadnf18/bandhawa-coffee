import Head from "next/head";
import Navbar from "../component/Navbar";

import styles from "./Layout.module.css";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>Bandhawa Coffee | {pageTitle}</title>
        <meta name="description" content="Bandhawa Coffee"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
