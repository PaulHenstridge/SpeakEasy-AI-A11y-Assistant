import styled from 'styled-components';

const ChatWindow = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
overflow-y: auto;
padding: 20px;
`

const UserMessage = styled.div`
align-self: flex-start;
background-color: #e6e6e6;
color:${props => props.theme.colors.fg};
border: 1px solid ${props => props.theme.colors.fg};
margin: 5px;
padding: 0.6rem 1.2rem;
border-radius: 5px;
${props => props.theme.name === "highContrast" && `
    color:#000000;
    `}
`

const AssistantMessage = styled(UserMessage)`
align-self: flex-end;
background-color: ${props => props.theme.colors.ac};
color: ${props => props.theme.colors.fg};
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
