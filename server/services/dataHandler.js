
// keywords - memo, email, word, chat, response

import { chatEmitter, memoEmitter, responseEmitter, conversationEmitter } from "./socketEmitters.js";

const dataHandler = (data) => {
    if (typeof data === 'object') {
        conversationEmitter(data)
    } else {
        try {
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
                }
            }
        } catch (error) {
            console.log("Error @ JSON.parse of API RESPONSE", error)
            conversationEmitter({ role: "user", content: data })

        }

    }

}

export default dataHandler
