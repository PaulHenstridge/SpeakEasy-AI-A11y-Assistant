import dataHandler from "./dataHandler.js";
import callOpenAiApi from "./openAiApi.js";

const socketHandlers = (io) => {
    console.log('sockethandlers runs')

    io.on('connection', (socket) => {
        console.log('a user connected')

        //AI events
        socket.on('prompt', async (data) => {
            let aiResponse = await callOpenAiApi({ role: 'user', content: data.prompt })
            console.log(aiResponse)
            dataHandler(aiResponse)
            // call 'main' function, pass in the prompt
        });


        // memo events


        // chat events
        socket.on('conversation', async (data) => {
            console.log('message: ' + data)
            let aiResponse = await callOpenAiApi({ role: 'user', content: data.msg })
            console.log(aiResponse)
            dataHandler([['conversation'], aiResponse])

        });


        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });
};

export default socketHandlers