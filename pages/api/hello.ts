// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  openAIresponse?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("TEST");
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "give me a React Component that looks like a contact card?",
      temperature: 0.6,
      max_tokens: 500,
      // top_p: 1,
      // frequency_penalty: 0.5,
      // presence_penalty: 0,
      // stop: ["You:"],
    });
    console.log(response.data.choices[0].text);
    res.status(200).json({ openAIresponse: response.data.choices[0].text });
  }
}
