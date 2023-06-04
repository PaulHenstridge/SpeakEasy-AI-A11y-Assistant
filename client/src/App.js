
import './App.css';

import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';
import HeaderContainer from './containers/HeaderContainer';

import socket from './utils/socket';
import SocketContext from './contexts/socketContext'

function App() {

    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <SocketContext.Provider value={socket}>
                <HeaderContainer />
                <MemoContainer />
                <ChatContainer />
            </SocketContext.Provider>

        </div>
    );
}

export default App;
