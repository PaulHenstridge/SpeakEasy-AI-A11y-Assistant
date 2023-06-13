import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: relative;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  transition: left 6s linear;
`;

const Game = () => {

    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [score, setScore] = useState(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === 'Space') {
                setIsActive(!isActive);
                if (!isActive) {
                    setScore(Math.abs(50 - position));
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isActive, position]);

    useEffect(() => {
        if (!isActive) return;

        // useCallback here?? so interval can be cancelled when space is hit.  then need to reset
        const intervalId = setInterval(() => {
            setPosition((prevPosition) => {
                if (prevPosition >= 100) {
                    setDirection(-1);
                } else if (prevPosition <= 0) {
                    setDirection(1);
                }
                return prevPosition + direction;
            });
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, direction]);

    return (
        <>
            <Box>
                <Ball style={{ left: `${position}%` }} />
                <p>Score: {score}</p>
            </Box>
        </>

    );
};

export default Game;
