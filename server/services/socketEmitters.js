import io from "../server.js"

// TODO- add a guard here to check if server is initilised

export const responseEmitter = (data) => {
    io.emit('response', data)
}

export const chatEmitter = (data) => {
    io.emit('chat', data)
}

export const memoEmitter = (data) => {
    io.emit('memo', data)
}

