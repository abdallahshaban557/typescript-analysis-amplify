import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Amplify, Storage } from "aws-amplify";

const inter = Inter({ subsets: ["latin"] });

// let upload = Storage.put("test.txt", "File content", {
//     // progressCallback(progress) {
//     //   console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
//     // },
//     progressCallback(progress) {
//         console.log('upl')
//     },
//     //resumable: true,
//     useAccelerateEndpoint: true,
//     completeCallback(event) {
//         event.key
//     },
//     resumable:true
//   });

//   upload.pause();

export default function Auth() {
  return (
    <>
      <Head>
        <title>Auth use cases</title>
        <meta name="description" content="Auth use cases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
