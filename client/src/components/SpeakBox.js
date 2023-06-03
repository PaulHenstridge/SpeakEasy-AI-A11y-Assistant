import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeakBox = ({ socket }) => {
    const [keysPressed, setKeysPressed] = useState({})
    const [finalTranscript, setFinalTranscript] = useState("")

    const { transcript, listening, resetTranscript } = useSpeechRecognition()

    const handleKeyDown = (event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: true }))
    };

    const handleKeyUp = (event) => {
        setKeysPressed(keys => ({ ...keys, [event.key]: false }))
    };

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
            // console.log(socket.emit)
            if (socket) socket.emit('prompt', { finalTranscript })
            // Reset final transcript after sending
            setFinalTranscript("")
        }
    }, [finalTranscript])

    return (<>
        {/* <button onClick={toggleSpeech}>Use Voice Commands</button> */}
        {listening && <h6>listening</h6>}
        <p>...{transcript}...</p>
        <h4>{finalTranscript}</h4>
    </>);
}

export default SpeakBox