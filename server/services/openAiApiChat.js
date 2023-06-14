import "dotenv/config.js"
import { Configuration, OpenAIApi } from "openai"

const openAiConfig = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(openAiConfig);

const callOpenAiApiChat = async messages => {
    console.log("CHAT API CALLED")
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    `Respond as a cheerful, slightly eccentric, helpful assistant, who often slips a dad joke into replies.
                    `,
            },
            ...messages,
        ]
    })
    return result.data.choices[0].message
}

export default callOpenAiApiChat