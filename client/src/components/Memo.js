import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components'

import { SpeechContext } from '../contexts/speechContext';


const MemoWrapper = styled.div`
    border: 2px solid ${props => props.theme.colors.fg};
    width:50%;
    margin: auto;
    margin-bottom:1rem;
    background-color: ${props => props.theme.colors.ac}

`
const MemoText = styled.p`
    color: ${props => props.theme.colors.fg};
    font-size: ${props => props.theme.fontSize.medium};
    font-weight:bold;
`
const Date = styled.h5`
    color: ${props => props.theme.colors.bg};
    font-size: ${props => props.theme.fontSize.small};
`


const Memo = ({ memo, handleDeleteMemo }) => {
    const memoRef = useRef(null);
    const speak = useContext(SpeechContext);


    const handleKeyDown = (e) => {
        if (e.key === 's') {
            // speak the memo.memo_text
            speak(memo.memo_text)
            console.log("s key pressed");

        } else if (e.key === 'd') {
            // delete the memo
            handleDeleteMemo(memo.id)
            console.log("d key pressed");
        }
    };

    const handleFocus = () => {
        memoRef.current.addEventListener('keydown', handleKeyDown);
        return () => {
            memoRef.current.removeEventListener('keydown', handleKeyDown);
        }
    }


    return (<MemoWrapper ref={memoRef} onFocus={handleFocus} onBlur={handleFocus} tabIndex="0">
        <MemoText> {memo.memo_text} </MemoText>
        <Date>{memo.date}</Date>
        {/* <button onClick={() => handleDeleteMemo(memo.id)}   >Clear Memo!</button> */}
    </MemoWrapper>);
}

export default Memo;