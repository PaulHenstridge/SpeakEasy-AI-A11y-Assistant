import dataHandler from "./dataHandler.js";
import callOpenAiApi from "./openAiApi.js";
import callOpenAiApiChat from "./openAiApiChat.js";

const socketHandlers = (io) => {
    console.log('sockethandlers runs')

    io.on('connection', (socket) => {
        console.log('a user connected')

        //AI events
        socket.on('prompt', async (data) => {
            let aiResponse = await callOpenAiApi({ role: 'user', content: data.prompt })
            console.log('Response form AI to prompt event ', aiResponse)
            dataHandler(aiResponse)
            // call 'main' function, pass in the prompt
        });


        // memo events


        // chat events
        socket.on('conversation', async (data) => {
            console.log('dir of data in conv socket handler...')
            console.dir(data)
            let aiResponse = await callOpenAiApiChat(data.chats)
            console.log('AI RESPONSE', aiResponse)
            dataHandler(aiResponse)
        });


        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });
};

export default socketHandlers