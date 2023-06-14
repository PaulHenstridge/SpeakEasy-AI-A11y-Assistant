import React, { useContext, useEffect, useState } from 'react';

import SocketContext from '../contexts/socketContext';
import { SpeechContext } from '../contexts/speechContext';

import SpeakBox from "../components/SpeakBox";
import ResponseBox from '../components/ResponseBox';
import Menu from "../components/Menu"

import styled from 'styled-components'
import { ConversationProvider } from '../components/ConversationProvider';
import TextInput from '../components/TextInput';

const HeaderWrapper = styled.header`
    /* background-color: skyblue; */
    display:flex;
    flex-direction: column;
    justify-content: space-around;

`
const FlexContainer = styled.div`
    display: flex;
    justify-content:space-around;
    /* border: 1px solid black; */
`



const HeaderContainer = ({ activeComponent, setActiveComponent }) => {

    const [response, setResponse] = useState('')

    const socket = useContext(SocketContext);
    const speak = useContext(SpeechContext)

    useEffect(() => {
        socket.on('response', data => {
            console.log(data)
            setResponse(data)
        })
    }, [socket])

    useEffect(() => {
        speak(response)
    }, [response, speak])



    return (<HeaderWrapper>
        <FlexContainer>
            <Menu setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        </FlexContainer>
        <ResponseBox response={response} />
        <FlexContainer>
            <SpeakBox activeComponent={activeComponent} />
            <TextInput activeComponent={activeComponent} speak={speak} />
        </FlexContainer>
    </HeaderWrapper>);
}

export default HeaderContainer;