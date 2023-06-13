import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';

import SocketContext from '../contexts/socketContext';
import { ConversationContext } from '../contexts/ConversationContext';

const HiddenLabel = styled.label`
    display:none;
`
const StyledInput = styled.input`
    width: 40%;
    text-align:center;
    border: 2px solid black;
    font-size: 2rem;
`

const TextInput = ({ activeComponent, speak }) => {
    const [inputText, setInputText] = useState("")

    const socket = useContext(SocketContext);
    const { conversationHistory, setConversationHistory } = useContext(ConversationContext);


    const handleTextInput = (e) => {
        setInputText(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submitData();
        }
    }

    const submitData = () => {
        let newChatObj = { role: "user", content: inputText }
        if (activeComponent === 'chat') {
            setConversationHistory(prevConvHistory => [...prevConvHistory, newChatObj])
            socket.emit('conversation', { chats: conversationHistory })
        } else {
            socket.emit('prompt', { prompt: inputText })
        }
        // TODO - add else to handle connection loss
        setInputText("")
    }

    const timeoutRef = useRef();

    const handleFocus = (text) => {
        timeoutRef.current = setTimeout(() => speak(text), 200); // start timeout
    }

    const handleBlur = () => {
        clearTimeout(timeoutRef.current); // clear timeout if still waiting
    }


    return (<>

        <HiddenLabel htmlFor="text-input" > Type input here</HiddenLabel>

        <StyledInput type="text"
            id="text-input"
            value={inputText}
            onChange={handleTextInput}
            onKeyDown={handleKeyDown}
            placeholder='Type here'
            tabindex="0"
            onFocus={() => handleFocus("Keyboard input")}
            onBlur={handleBlur}
        />
    </>);
}

export default TextInput;