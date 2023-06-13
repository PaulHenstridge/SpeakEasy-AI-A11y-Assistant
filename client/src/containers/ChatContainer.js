import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '../contexts/socketContext';
import { ConversationContext } from '../contexts/ConversationContext';
import ChatDisplay from '../components/ChatDisplay';

import { SpeechContext } from '../contexts/speechContext';



const ChatContainer = ({ activeComponent, setActiveComponent }) => {

    const [chats, setChats] = useState([])


    const socket = useContext(SocketContext)
    const { conversationHistory, setConversationHistory } = useContext(ConversationContext);
    const speak = useContext(SpeechContext);


    useEffect(() => {
        socket.on('chat', data => {
            console.log('NEW CHAT MSSG: ', data) // data returns a string
            console.log('type of data', typeof data);
            speak(data)
            setActiveComponent('chat')
            let dataObj = { role: "assistant", content: data }
            setConversationHistory(prevConversationHistory => [...prevConversationHistory, dataObj])
        })

        return () => {
            socket.off('chat');
        }
    }, [socket])

    useEffect(() => {
        socket.on('conversation', data => {
            console.log('NEW CONVERSATION MSSG: ', data)
            speak(data.content)
            setActiveComponent('chat')
            setConversationHistory(prevConversationHistory => [...prevConversationHistory, data])
        })
        return () => {
            socket.off('conversation');
        }
    }, [socket])

    return (<>

        {activeComponent === "chat" && <ChatDisplay conversationHistory={conversationHistory} />}
        {/* <h3>chatchat</h3>
        {(activeComponent === "chat") && <div>
            {conversationHistory.map((chat, index) => (
                <p key={index}>{chat.role}: {chat.content}</p>
            ))}
        </div>} */}
    </>);
}

export default ChatContainer;