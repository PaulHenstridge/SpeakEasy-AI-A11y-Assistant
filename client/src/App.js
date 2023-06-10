
import './App.css';
import React, { useState } from 'react';

import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

import socket from './utils/socket';
import SocketContext from './contexts/socketContext'

import { SpeechProvider } from './components/SpeechProvider';

function App() {
    const [activeComponent, setActiveComponent] = useState(null);


    // state held in App is changed down in menu, triggering re-renders and the right component displayed.
    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <SocketContext.Provider value={socket}>
                <SpeechProvider>
                    <HeaderContainer setActiveComponent={setActiveComponent} />
                    <MemoContainer activeComponent={activeComponent} />
                    <ChatContainer setIsNewChat={activeComponent} />
                </SpeechProvider>
            </SocketContext.Provider>
        </div>
    );
}

export default App;
