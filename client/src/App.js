
import './App.css';
import ChatContainer from './containers/ChatContainer';
import MemoContainer from './containers/MemoContainer';

function App() {
    return (
        <div className="App">
            <h1>SpeakEasy</h1>
            <ChatContainer />
            <MemoContainer />
        </div>
    );
}

export default App;
