
import './App.css';

import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

import socket from './utils/socket';
import SocketContext from './contexts/socketContext'

import { SpeechProvider } from './components/SpeechProvider';

function App() {

    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <SocketContext.Provider value={socket}>
                <SpeechProvider>
                    <HeaderContainer />
                    <MemoContainer />
                    <ChatContainer />
                </SpeechProvider>
            </SocketContext.Provider>



        </div>
    );
}

export default App;
