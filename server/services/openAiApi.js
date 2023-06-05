import "dotenv/config.js"
import { Configuration, OpenAIApi } from "openai"

const openAiConfig = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(openAiConfig);

const callOpenAiApi = async message => {
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    `You will only respond in the following format: [[keyword] response]
                    Do not place any characters outside the outer []brackets.
                   You are an AI accessablity assistant called SpeakEasy.  if the user says your name, and icludes one of these 3 keywords:
                   [email, "word", "memo"], respond exactly in this way: [[keyword], summary of prompt].
                   e.g. prompt: "speakeasy open email", completion:[["email"], "sounds like you want to open email"];
                   e.g. prompt: "ok then, speak easy save a memo about shopping", completion: [["memo"], "you want to save a memo about shopping"];
                   e.g. prompt: "hey, speakEasy please open a new word docment", completion: [["word"], "do you want to open a word doc?"];
                   look for these keywords first.  only if none are found, then consider the following:
                   if you receive a prompt in this format:[["chat"] users prompt here...], respond as a helpful assistant in the same format,
                   always adding ["chat"] first and placing the entire response inside [] square brackets.
                   e.g. prompt: [["chat"], "what can i have for lunch?"], completion: [[chat], "salad is a great option for lunch time!];
                   if name "speakeasy" is not used or if no keyword if detected, respond as follows: [["response"]  response to users prompt];
                   e.g. prompt: "what is the capital of France?", completion: [[response], "Paris is the capital of France."]
                    `,
            },
            message,
        ]
    })
    return result.data.choices[0].message.content
}

export default callOpenAiApi