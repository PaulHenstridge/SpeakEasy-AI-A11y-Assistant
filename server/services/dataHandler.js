
// keywords - memo, email, word, chat, response

import { responseEmitter } from "./socketEmitters.js";

const dataHandler = (d) => {
    // turn string into array
    const data = JSON.parse(d)
    if (data[0]) {
        console.log('data000', data[0])
        switch (data[0][0]) {
            case 'response':
                // call response emitter function
                responseEmitter()
                break;
            case 'chat':
                // call chat emitter
                break;
            case 'memo':
                // call memeo emitter
                break;
            case 'email':
                // call launchEmail function
                break;
            case 'word':
            // call launchWord function
        }
    } else {
        // send via response response 
        // handle in some other way?
    }

    // if yes, call switch statement , then call onward function

    // if no, ... send to chat?  always?   hmmm....
}

export default dataHandler

let string = '[["thing"],"more stuff"]'

// console.log(dataHandler(string))