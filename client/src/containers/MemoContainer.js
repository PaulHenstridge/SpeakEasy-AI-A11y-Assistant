import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

import { debounce } from 'lodash'

import SocketContext from '../contexts/socketContext';
import MemoBoard from "../components/MemoBoard";

const MemoContainer = ({ activeComponent }) => {

    const [memos, setMemos] = useState([])
    const [isNewMemo, setIsNewMemo] = useState(false)


    const socket = useContext(SocketContext);

    //memoized save memo function
    const saveMemo = useCallback(
        debounce(async data => {
            console.log(data)
            setIsNewMemo(true)

            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;

            let memoObj = { "date": currentDate, "memo_text": data }
            try {
                const response = await axios.post('http://localhost:8080/memos', memoObj);
                setMemos(prevMemos => [...prevMemos, response.data]);
            } catch (error) {
                console.error(error);
            }
        }, 1000), [])


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

        socket.on('memo', saveMemo);

        return () => {
            socket.off('memo', saveMemo);
            saveMemo.cancel()
        };
    }, [socket, saveMemo]);

    // delete a memo
    const deleteMemo = async id => {
        try {
            await axios.delete(`http://localhost:8080/memos/${id}`);
            setMemos(prevMemos => prevMemos.filter(memo => memo.id !== id));
        } catch (error) {
            console.error('Error deleting memo: ', error);
        }
    }


    return (<>

        {(activeComponent === "memo" || isNewMemo) && <MemoBoard memos={memos} handleDeleteMemo={deleteMemo} />}

    </>);
}

export default MemoContainer;