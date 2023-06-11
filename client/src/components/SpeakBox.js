import React, { useEffect, useState, useContext } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { debounce } from 'lodash';

import SocketContext from '../contexts/socketContext';
import { ConversationContext } from '../contexts/ConversationContext';




const SpeakBox = ({ activeComponent }) => {
    const [keysPressed, setKeysPressed] = useState({})
    const [finalTranscript, setFinalTranscript] = useState("")

    const { transcript, listening, resetTranscript } = useSpeechRecognition()

    const socket = useContext(SocketContext);
    const { conversationHistory, setConversationHistory } = useContext(ConversationContext);


    const handleKeyDown = (event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: true }))
    };

    const handleKeyUp = debounce((event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: false }))
    }, 500);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        };
    }, []);

    useEffect(() => {
        if (keysPressed['q'] && keysPressed['a']) {
            SpeechRecognition.startListening({ continuous: true });
        } else {
            SpeechRecognition.stopListening()
            // Save the current transcript when the user stops speaking
            setFinalTranscript(transcript)
        }
    }, [keysPressed]);

    useEffect(() => {
        if (keysPressed['z']) {
            resetTranscript();
            setFinalTranscript("")
        }
    }, [keysPressed]);

    useEffect(() => {
        // Send finalTranscript to the server here
        if (finalTranscript !== "") {
            console.log(finalTranscript)
            let newChatObj = { role: "user", content: finalTranscript }
            if (activeComponent === 'chat') {
                socket.emit('conversation', { chats: [...conversationHistory, newChatObj] })
            } else {
                socket.emit('prompt', { prompt: finalTranscript })
            }
            // TODO - add else to handle connection loss
            setFinalTranscript("")
        }
    }, [finalTranscript])
    // TODO - add clickable button below also
    return (<>
        {/* <button onClick={toggleSpeech}>Use Voice Commands</button> */}
        {listening && <h6>listening</h6>}
        <p>...   {transcript}   ...</p>
        <h4>{finalTranscript}</h4>
    </>);
}

export default SpeakBox