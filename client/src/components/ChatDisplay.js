import styled from 'styled-components';

const ChatWindow = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
overflow-y: auto;
padding: 20px;
border: 1px solid #ddd;
`

const UserMessage = styled.div`
align-self: flex-start;
background-color: #e6e6e6;
margin: 5px;
padding: 10px;
border-radius: 5px;
`

const AssistantMessage = styled(UserMessage)`
align-self: flex-end;
background-color: #0084ff;
color: white;
`


const ChatDisplay = ({ conversationHistory }) => {


    return (<>
        <ChatWindow>
            {conversationHistory.map((chat, index) => (
                chat.role === "assistant"
                    ? <AssistantMessage key={index}>{chat.content}</AssistantMessage>
                    : <UserMessage key={index}>{chat.content}</UserMessage>
            ))}
        </ChatWindow>

    </>);
}

export default ChatDisplay
