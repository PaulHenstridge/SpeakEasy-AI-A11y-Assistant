
import styled from 'styled-components'

const MemoWrapper = styled.div`
    border: 2px solid black;
    margin-bottom:1rem;
    
`

const Memo = ({ memo, handleDeleteMemo }) => {
    return (<MemoWrapper>
        <p> {memo.memo_text} </p>
        <h6>{memo.date}</h6>
        <button onClick={() => handleDeleteMemo(memo.id)}>Clear Memo!</button>
    </MemoWrapper>);
}

export default Memo;