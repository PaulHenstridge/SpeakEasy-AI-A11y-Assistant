import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components'

import { SpeechContext } from '../contexts/speechContext';


const MemoWrapper = styled.div`
    border: 2px solid black;
    width:50%;
    margin: auto;
    margin-bottom:1rem;
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
        <p> {memo.memo_text} </p>
        <h6>{memo.date}</h6>
        {/* <button onClick={() => handleDeleteMemo(memo.id)}   >Clear Memo!</button> */}
    </MemoWrapper>);
}

export default Memo;