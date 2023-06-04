import { Configuration, OpenAIApi } from "openai"

const openAiConfig = new Configuration({
    organization: process.env.OPEN_AI_ORG_KEY,
    apiKey: 
});
const openai = new OpenAIApi(openAiConfig);

const callOpenAiApi = async message => {
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    `
                   You are an AI accessablity assistant called SpeakEasy.  if the user says your name, followed 
                   by one of these 3 keywords:[email, word, memo], respond exactly in this way: [[keyword], summary of prompt].
                   e.g. prompt: speakeasy open emil, response:[[email], sounds like you want to open email];
                   e.g. prompt: ok then, speak easy save a memo about shopping, response: [[memo], you want to save a memo about shopping]
                    `,
            },
            message,
        ]
    })
    return result.data.choices[0].message.content
}

export default callOpenAiApi