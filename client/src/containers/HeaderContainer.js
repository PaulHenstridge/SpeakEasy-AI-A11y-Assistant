import React, { useContext, useEffect, useState } from 'react';

import SocketContext from '../contexts/socketContext';
import { SpeechContext } from '../contexts/speechContext';

import SpeakBox from "../components/SpeakBox";
import ResponseBox from '../components/ResponseBox';
import Menu from "../components/Menu"

import styled from 'styled-components'
import { ConversationProvider } from '../components/ConversationProvider';

const HeaderWrapper = styled.header`
    background-color: skyblue;
    display:flex;
    justify-content: space-around;
`


const HeaderContainer = ({ activeComponent, setActiveComponent }) => {

    const [response, setResponse] = useState('')

    const socket = useContext(SocketContext);
    const speak = useContext(SpeechContext)

    useEffect(() => {
        socket.on('response', data => {
            console.log(data)
            setResponse(data)
            // send data to new component to be printed and spoken!
            // ie... set as state and pass state to ResponseBox
        })
    }, [socket])

    useEffect(() => {
        speak(response)
    }, [response])



    return (<HeaderWrapper>
        <SpeakBox activeComponent={activeComponent} />
        <ResponseBox response={response} />
        <Menu setActiveComponent={setActiveComponent} />
    </HeaderWrapper>);
}

export default HeaderContainer;