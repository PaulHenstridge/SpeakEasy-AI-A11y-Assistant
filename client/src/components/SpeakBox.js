import React, { useEffect, useState, useContext, useRef } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { debounce } from 'lodash';
import styled from 'styled-components';

import SocketContext from '../contexts/socketContext';
import { ConversationContext } from '../contexts/ConversationContext';
import { SpeechContext } from '../contexts/speechContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

const openMic = <FontAwesomeIcon icon={faMicrophone} />
const closedMic = <FontAwesomeIcon icon={faMicrophoneSlash} />

const SpeakBoxWrapper = styled.div`
width: 40%;
border: 2px solid black;
display:flex;
flex-direction: column;
background-color: ${props => props.theme.colors.fg};
color: ${props => props.theme.colors.ac};
font-size: ${props => props.theme.fontSize.large}
`

const StyledDiv = styled.div`
    padding: 1rem;
    border: none;
    background-color: transparent;
`


const SpeakBox = ({ activeComponent }) => {
    const [keysPressed, setKeysPressed] = useState({})
    const [finalTranscript, setFinalTranscript] = useState("")

    const { transcript, listening, resetTranscript } = useSpeechRecognition()

    const socket = useContext(SocketContext);
    const { conversationHistory, setConversationHistory } = useContext(ConversationContext);
    const speak = useContext(SpeechContext);


    const spkBox = useRef()

    const handleKeyDown = (event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: true }))
    };

    const handleKeyUp = debounce((event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: false }))
    }, 500);

    // set focus to speakbox on render
    useEffect(() => {
        spkBox.current.focus()
    }, [])

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
                setConversationHistory(prevConvHistory => [...prevConvHistory, newChatObj])
                socket.emit('conversation', { chats: conversationHistory })
            } else {
                socket.emit('prompt', { prompt: finalTranscript })
            }
            // TODO - add else to handle connection loss
            // setFinalTranscript("")
        }
    }, [finalTranscript])

    useEffect(() => {
        if (finalTranscript !== "") {
            const timer = setTimeout(() => {
                resetTranscript();
                setFinalTranscript("");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [finalTranscript]);

    const timeoutRef = useRef();

    const handleFocus = (text) => {
        timeoutRef.current = setTimeout(e => speak(text), 300); // start timeout
    }

    const handleBlur = () => {
        clearTimeout(timeoutRef.current); // clear timeout if still waiting
    }


    return (<SpeakBoxWrapper ref={spkBox} onFocus={() => handleFocus("Press Q and A to Speak at any time")} onBlur={handleBlur} tabIndex="0">

        {!listening && <StyledDiv>Press Q and A to Speak</StyledDiv>}
        {listening && <h4>listening</h4>}
        <div>
            {!listening && closedMic}
            {listening && openMic}
            {listening && <p> {transcript} </p>}
        </div>
        <div>
            <h4>{finalTranscript}</h4>
        </div>
    </SpeakBoxWrapper>);
}

export default SpeakBox