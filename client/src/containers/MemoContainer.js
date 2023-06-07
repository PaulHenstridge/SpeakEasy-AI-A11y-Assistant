import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import SocketContext from '../contexts/socketContext';
import MemoBoard from "../components/MemoBoard";

const MemoContainer = () => {

    const [memos, setMemos] = useState([])

    const socket = useContext(SocketContext);

    // get initial memos from DB
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/memos');
                console.log(response.data)
                setMemos(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [])

    // save new memo
    useEffect(() => {
        const saveMemo = async (data) => {
            console.log(data)

            setMemos(prevMemos => [...prevMemos, data]);
            let memoObj = { "date": "21 July", "memo_text": data } // TODO - add real date in right format for Java/Postgres
            try {
                await axios.post('http://localhost:8080/memos', memoObj);
            } catch (error) {
                console.error(error);
            }
        };

        socket.on('memo', saveMemo);

        return () => {
            socket.off('memo', saveMemo);
        };
    }, [socket]);

    // delete a memo
    const deleteMemo = id => {
        // TODO - 
    }

    return (<>

        <MemoBoard memos={memos} />

    </>);
}

export default MemoContainer;