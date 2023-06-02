import bodyParser from "body-parser"
import cors from "cors"
import { createServer } from 'http'
import { Server } from 'socket.io'

import express from "express"
const app = express()
const port = 8000   //   || process.env.PORT  for production?

// Create a HTTP server using Express
const server = createServer(app);

// Create a Socket.IO server using the HTTP server
const io = new Server(server);

// Use the socketHandlers function to handle the Socket.IO events
socketHandlers(io);

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})