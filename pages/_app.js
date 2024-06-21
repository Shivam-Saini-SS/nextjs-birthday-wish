import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHistory((h) => [...h, router.pathname]);
    }
  }, [router]);

  return <Component history={history} {...pageProps} />;
}

export default MyApp;
