import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '../contexts/socketContext';
import { ConversationContext } from '../contexts/ConversationContext';


const ChatContainer = ({ activeComponent, setActiveComponent }) => {

    const [chats, setChats] = useState([])
    const [isNewChat, setIsNewChat] = useState(false)


    const socket = useContext(SocketContext)
    const { conversationHistory, setConversationHistory } = useContext(ConversationContext);


    useEffect(() => {
        socket.on('chat', data => {
            console.log('NEW CHAT MSSG: ', data)
            setIsNewChat(true)
            setActiveComponent('chat')
            setConversationHistory(prevConversationHistory => [...prevConversationHistory, data])
        })

        return () => {
            socket.off('chat');
        }
    }, [socket, setIsNewChat])

    useEffect(() => {
        socket.on('conversation', data => {
            console.log('NEW CONVERSATION MSSG: ', data)
            setActiveComponent('chat')
            let newChatObj = { role: "assistant", content: data }
            setConversationHistory(prevConversationHistory => [...prevConversationHistory, newChatObj])
        })
        return () => {
            socket.off('conversation');
        }
    }, [socket])

    return (<>
        <h3>chatchat</h3>
        {(activeComponent === "Chat" || isNewChat) && <div>
            {conversationHistory.map((chat, index) => (
                <p key={index}>{chat.role}: {chat.content}</p>
            ))}
        </div>}
    </>);
}

export default ChatContainer;