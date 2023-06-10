
// keywords - memo, email, word, chat, response

import { chatEmitter, memoEmitter, responseEmitter, conversationEmitter } from "./socketEmitters.js";

const dataHandler = (data) => {
    console.log('DATA to datahandler: ', data)
    if (typeof data[0] === Array) {
        // turn string into array
        const parsedData = JSON.parse(data)
        if (data[0]) {
            const type = parsedData[0][0]
            const message = parsedData[1]
            switch (type) {
                case 'response':
                    responseEmitter(message)
                    break;
                case 'chat':
                    chatEmitter(message)
                    break;
                case 'memo':
                    memoEmitter(message)
                    break;
                case 'email':
                    // send a check event, then launcg from receiver
                    // call launchEmail function
                    break;
                case 'word':
                // call launchWord function
            }
        }

    } else {
        // send via response response 
        // handle in some other way?
        conversationEmitter(data)
    }
}
export default dataHandler
