const Memo = ({ memo }) => {
    return (<>
        <h6> {memo.memo_text} </h6>
        <p>{memo.date}</p>
        <button>Clear Memo!</button>
    </>);
}

export default Memo;