
import './App.css';
import React, { useState } from 'react';

import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

import socket from './utils/socket';
import SocketContext from './contexts/socketContext'

import { SpeechProvider } from './components/SpeechProvider';
import { ConversationProvider } from './components/ConversationProvider';
import GameContainer from './containers/GameContainer';
import ThemeProvider from './components/ThemeProvider';

import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';

const TitleHeader = styled.h1`
   color: ${props => props.theme.colors.fg};
   font-size: ${props => (props.activeComponent === "chat" || props.activeComponent === "memo") ? "3rem" : "6rem"};
`


function App() {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <div className="App">
            <SocketContext.Provider value={socket}>
                <SpeechProvider>
                    <ThemeProvider>
                        <TitleHeader activeComponent={activeComponent}>SpeakEasy</TitleHeader>
                        <GlobalStyle />
                        <ConversationProvider>
                            <HeaderContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                            <ChatContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                        </ConversationProvider>
                        <MemoContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                    </ThemeProvider>
                </SpeechProvider>
            </SocketContext.Provider>
        </div>
    );
}

export default App;
