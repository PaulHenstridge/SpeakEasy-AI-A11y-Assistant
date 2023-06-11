import io from "../server.js"

// TODO- add a guard here to check if server is initilised

export const responseEmitter = (data) => {
    io.emit('response', data)
}

export const chatEmitter = (data) => {
    io.emit('chat', data)
}

export const memoEmitter = (data) => {
    console.log("sending from socketemittrrs")
    console.log("Data to emit: ", data)
    io.emit('memo', data)
}

export const conversationEmitter = (data) => {
    console.log("sending from convo Emitter", data)

    io.emit('conversation', data)
}
