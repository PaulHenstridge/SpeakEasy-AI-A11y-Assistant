import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '../contexts/socketContext';


const ChatContainer = ({ activeComponent }) => {

    const [chats, setChats] = useState([])
    const [isNewChat, setIsNewChat] = useState(false)


    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.on('chat', data => {
            console.log('NEW CHAT MSSG: ', data)
            setIsNewChat(true)
            setChats(prevChats => [...prevChats, data])
        })

        return () => {
            socket.off('chat');
        }
    }, [socket, setIsNewChat])


    return (<>
        <h3>chatchat</h3>
        {(activeComponent === "Chat" || isNewChat) && <p>{chats}</p>}
    </>);
}

export default ChatContainer;