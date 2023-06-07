import React, { useContext, useEffect, useState } from 'react';

import SocketContext from '../contexts/socketContext';
import { SpeechContext } from '../contexts/speechContext';

import SpeakBox from "../components/SpeakBox";
import ResponseBox from '../components/ResponseBox';

const HeaderContainer = () => {


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
        console.log('SPEAK FUNC: ', speak)
        speak(response)
    }, [response])

    return (<>
        <SpeakBox />
        <ResponseBox response={response} />
        {/* <Menu /> */}
    </>);
}

export default HeaderContainer;