
// keywords - memo, email, word, chat, response

import { chatEmitter, memoEmitter, responseEmitter } from "./socketEmitters.js";

const dataHandler = (d) => {
    // turn string into array
    const data = JSON.parse(d)
    if (data[0]) {
        const type = data[0][0]
        const message = data[1]
        switch (type) {
            case 'response':
                responseEmitter(message)
                break;
            case 'chat':
                chatEmitter(message)
                break;
            case 'memo':
                console.log('MEMO EMITTER FIRED')
                memoEmitter(message)
                break;
            case 'email':
                // send a check event, then launcg from receiver
                // call launchEmail function
                break;
            case 'word':
            // call launchWord function
        }
    } else {
        // send via response response 
        // handle in some other way?
    }
}
export default dataHandler
