
import './App.css';
import React, { useState } from 'react';

import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

import socket from './utils/socket';
import SocketContext from './contexts/socketContext'

import { SpeechProvider } from './components/SpeechProvider';
import { ConversationProvider } from './components/ConversationProvider';


function App() {
    const [activeComponent, setActiveComponent] = useState(null);


    // state held in App is changed down in menu, triggering re-renders and the right component displayed.
    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <SocketContext.Provider value={socket}>
                <SpeechProvider>
                    <ConversationProvider>
                        <HeaderContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                        <ChatContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                    </ConversationProvider>
                    <MemoContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                </SpeechProvider>
            </SocketContext.Provider>
        </div>
    );
}

export default App;
