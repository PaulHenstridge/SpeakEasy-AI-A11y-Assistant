import dataHandler from "./dataHandler.js";
import callOpenAiApi from "./openAiApi.js";

const socketHandlers = (io) => {
    console.log('sockethandlers runs')

    io.on('connection', (socket) => {
        console.log('a user connected')

        //AI events
        socket.on('prompt', async (data) => {
            console.log('Received data: ', data);
            // pass data to a function where it will be sent to API

            let aiResponse = await callOpenAiApi({ role: 'user', content: data.prompt })
            console.log(aiResponse)
            dataHandler(aiResponse)
            // call 'main' function, pass in the prompt
        });


        // memo events


        // chat events
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg)
            io.emit('chat message', msg)
        });


        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });
};

export default socketHandlers