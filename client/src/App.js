
import './App.css';
import { useEffect, useState } from 'react';
import io from "socket.io-client";
import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Create a websocket connection to your server
        const socketIO = io("http://localhost:8000");
        socketIO.emit('my event', { hello: 'world' });
        setSocket(socketIO);

        // On unmount, disconnect the socket
        return () => {
            if (socketIO) {
                socketIO.disconnect();
            }
        };
    }, []);

    // import clientSocketHandlers here

    // Add a check here to make sure the socket is not null before rendering the rest of the component
    if (!socket) return null;


    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <HeaderContainer socket={socket} />
            <MemoContainer socket={socket} />
            <ChatContainer socket={socket} />
        </div>
    );
}

export default App;
