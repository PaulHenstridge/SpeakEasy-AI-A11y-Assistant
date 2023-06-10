import Memo from "./Memo";

const MemoBoard = ({ memos, handleDeleteMemo }) => {

    const mappedMemos = memos.map((memo, index) => <Memo memo={memo} key={(index)} handleDeleteMemo={handleDeleteMemo} />)

    return (<>
        <h5>memo board</h5>
        {mappedMemos}
    </>);
}

export default MemoBoard;