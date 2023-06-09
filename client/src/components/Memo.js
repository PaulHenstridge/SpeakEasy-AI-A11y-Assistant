const Memo = ({ memo }) => {
    return (<>
        <p> {memo.memo_text} </p>
        <h6>{memo.date}</h6>
        <button>Clear Memo!</button>
    </>);
}

export default Memo;