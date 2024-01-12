import Head from "next/head";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bandhawa Coffee </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="linguana-site-verification"
          content="DP8ItGjtlG3ZjwN4ROOJ"
        />
        <meta name="author" content="bandhawa-team"></meta>
        <meta name="publisher" content="Bandha Team"></meta>
        <meta property="og:url" content="https://bandhawacoffeebeans.com/" />
        <meta property="og:title" content="Bandhawa Coffee" />
        <meta
          property="og:description"
          content="Selamat datang di Bandhawa Coffee - destinasi kopi lokal yang memukau dengan cita rasa khas dan pengalaman kopi yang tak terlupakan. Temukan ragam biji kopi berkualitas tinggi, nikmati proses sangrai yang teliti, dan eksplorasi aroma serta kelezatan kopi kami. Dari ladang ke cangkir, kami hadir untuk memanjakan lidah Anda dengan keunikan kopi lokal yang autentik. Jelajahi koleksi kami sekarang!"
        />
        <meta property="og:image" content="/assets/logo-after.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bandhawacofeebeans.com" />
        <meta property="twitter:url" content="bandhawacofeebeans.com" />
        <meta name="twitter:title" content="Bandhawa Coffee" />
        <meta
          name="twitter:description"
          content="Selamat datang di Bandhawa Coffee - destinasi kopi lokal yang memukau dengan cita rasa khas dan pengalaman kopi yang tak terlupakan. Temukan ragam biji kopi berkualitas tinggi, nikmati proses sangrai yang teliti, dan eksplorasi aroma serta kelezatan kopi kami. Dari ladang ke cangkir, kami hadir untuk memanjakan lidah Anda dengan keunikan kopi lokal yang autentik. Jelajahi koleksi kami sekarang!"
        />
        <meta name="twitter:image" content="/assets/logo-after.png" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <meta
          name="description"
          content="Selamat datang di Bandhawa Coffee - destinasi kopi lokal yang memukau dengan cita rasa khas dan pengalaman kopi yang tak terlupakan. Temukan ragam biji kopi berkualitas tinggi, nikmati proses sangrai yang teliti, dan eksplorasi aroma serta kelezatan kopi kami. Dari ladang ke cangkir, kami hadir untuk memanjakan lidah Anda dengan keunikan kopi lokal yang autentik. Jelajahi koleksi kami sekarang!"
        ></meta>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
