import Memo from "./Memo";

const MemoBoard = ({ memos }) => {

    const mappedMemos = memos.map((memo, index) => <Memo memo={memo} key={(index)} />)

    return (<>
        <h5>memo board</h5>
        {mappedMemos}
    </>);
}

export default MemoBoard;