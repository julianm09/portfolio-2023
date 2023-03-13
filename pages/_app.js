import AppProvider from "@/utils/provider";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AppProvider>
      <AnimatePresence>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
