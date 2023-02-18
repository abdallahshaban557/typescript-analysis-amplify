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
      <div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/building.jpg"
                width="100"
                height="100"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
