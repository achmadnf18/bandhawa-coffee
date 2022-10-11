import { useEffect } from "react";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { QueryClientProvider } from "@tanstack/react-query";
import getQueryClient from "@/config/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [queryClient] = useState(getQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
