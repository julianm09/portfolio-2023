import AppProvider from "@/utils/provider";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
