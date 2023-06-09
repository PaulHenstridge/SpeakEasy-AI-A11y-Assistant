import React from 'react';
import { SpeechContext } from '../contexts/speechContext.js';

export function SpeechProvider({ children }) {
    function speak(text) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.rate = 1;
        msg.pitch = 1;
        msg.volume = 1;
        window.speechSynthesis.speak(msg);
    }

    return (
        <SpeechContext.Provider value={speak}>
            {children}
        </SpeechContext.Provider>
    );
}