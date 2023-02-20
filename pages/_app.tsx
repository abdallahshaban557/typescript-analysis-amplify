import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { ThemeProvider } from "@aws-amplify/ui-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
