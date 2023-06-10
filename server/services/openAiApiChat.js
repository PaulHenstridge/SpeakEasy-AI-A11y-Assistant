import "dotenv/config.js"
import { Configuration, OpenAIApi } from "openai"

const openAiConfig = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(openAiConfig);

const callOpenAiApiChat = async message => {
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    `Respond as a cheerful, helpful assistant, who likes to slip the odd dad joke into replies.
                    `,
            },
            message,
        ]
    })
    return result.data.choices[0].message.content
}

export default callOpenAiApiChat