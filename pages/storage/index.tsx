import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Amplify, Storage } from 'aws-amplify';

const inter = Inter({ subsets: ['latin'] })

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
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link href="/about">
            <h2 className={inter.className}>
              Auth <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Auth features are here
            </p>
          </Link>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GraphQL API <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            GraphQL API Features are here
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Storage <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Storage features are here
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Analytics <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Analytics features are here
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
