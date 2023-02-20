import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ContactCardComponent from "@/components/contact-card";
import PricingComponent from "@/components/pricing";
import { Button } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function openAI() {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt:
        "create a React component that has a name contact card with an email as a subheading.\n+\n+//create a React component that has a name contact card with an email as a subheading.\n+//create a React component that has a name contact card with an email as a subheading.\n+//create a React component that has a name contact card with an",
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ["You:"],
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <Link href="/auth">
            <h2 className={inter.className}>
              Auth <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Auth features are here</p>
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
            <p className={inter.className}>GraphQL API Features are here</p>
          </a>
          <Link href="/storage">
            <h2 className={inter.className}>
              Storage <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Storage features are here</p>
          </Link>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Analytics <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Analytics features are here</p>
          </a>
        </div>
        <div>
          <ContactCardComponent
            name="John Doe"
            email="johndoe@example.com"
            image="/vercel.svg"
          />
        </div>
        <div>
          <PricingComponent />
          <Button onClick={openAI}>testing ChatGPT</Button>
        </div>
      </main>
    </>
  );
}
