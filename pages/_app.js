import AppProvider from "@/utils/provider";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Julian Mayes | Frontend Developer + Designer | Vancouver, BC
        </title>
        <meta
          name="title"
          content="Julian Mayes | Frontend Developer + Designer | Vancouver, BC"
        />
        <meta
          name="description"
          content="My name is Julian, I am a frontend developer providing custom design and development services out of Vancouver, BC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.julianmayes.com/" />
        <meta
          property="og:title"
          content="Julian Mayes | Frontend Developer + Designer | Vancouver, BC"
        />
        <meta
          property="og:description"
          content="My name is Julian, I am a frontend developer providing custom design and development services out of Vancouver, BC."
        />
        <meta
          property="og:image"
          content="https://reshare-app.s3.us-east-2.amazonaws.com/pfp.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.julianmayes.com/" />
        <meta
          property="twitter:title"
          content="Julian Mayes | Frontend Developer + Designer | Vancouver, BC"
        />
        <meta
          property="twitter:description"
          content="My name is Julian, I am a frontend developer providing custom design and development services out of Vancouver, BC."
        />
        <meta
          property="twitter:image"
          content="https://reshare-app.s3.us-east-2.amazonaws.com/pfp.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../styles/globals.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <AppProvider>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default MyApp;
