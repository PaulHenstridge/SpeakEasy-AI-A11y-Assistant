import Memo from "./Memo";

const MemoBoard = ({ memos, handleDeleteMemo }) => {

    const mappedMemos = memos.map((memo, index) => <Memo memo={memo} key={(index)} handleDeleteMemo={handleDeleteMemo} />).reverse()

    return (<>
        <h5 tabIndex="0">Memo Board</h5>
        {mappedMemos}
    </>);
}

export default MemoBoard;



