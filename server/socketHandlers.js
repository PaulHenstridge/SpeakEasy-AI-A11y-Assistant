
const socketHandlers = (io) => {
    console.log('sockethandlers runs')

    io.on('connection', (socket) => {
        console.log('a user connected')
        socket.emit('boom', { boom: 'booooom' })

        socket.on('chat message', (msg) => {
            console.log('message: ' + msg)
            io.emit('chat message', msg)
        });

        socket.on('my event', (data) => {
            console.log('Received data: ', data);
        });
        socket.on('prompt', (data) => {
            console.log('Received data: ', data);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });
};

export default socketHandlers