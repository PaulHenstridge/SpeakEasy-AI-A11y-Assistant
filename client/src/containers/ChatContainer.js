import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '../contexts/socketContext';


const ChatContainer = () => {

    const [chats, setChats] = useState([])

    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.on('chat', data => {
            console.log('NEW CHAT MSSG: ', data)
            setChats([...chats, data])

        })
    }, [socket])


    return (<>
        <h3>chatchat</h3>
        <p>{chats}</p>
    </>);
}

export default ChatContainer;