import io from "../server.js"

// TODO- add a guard here to check if server is initilised

export const responseEmitter = (data) => {
    //emit response event to front end
    console.log("responemitterrrrrrr!!!!!")
    // this is firing now, so get the datya a nd pass it back to client
    io.emit('response', data)
}

export const chatEmitter = () => {
    // emit chat events
}
export const memoEmitter = () => {
    // emit memo events
}

