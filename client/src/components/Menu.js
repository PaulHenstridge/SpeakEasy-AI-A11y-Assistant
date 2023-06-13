import { useContext, useRef } from 'react';
import styled from 'styled-components'
import { SpeechContext } from '../contexts/speechContext';
import { ThemeContext } from '../contexts/themeContext';

const MenuWrapper = styled.menu`
width: 50%;
    display:flex;
    justify-content: space-around;

`

const Menu = ({ setActiveComponent }) => {

    const speak = useContext(SpeechContext);
    const { toggleTheme } = useContext(ThemeContext);

    const timeoutRef = useRef();

    const handleFocus = (text) => {
        timeoutRef.current = setTimeout(() => speak(text), 200); // start timeout
    }

    const handleBlur = () => {
        clearTimeout(timeoutRef.current); // clear timeout if still waiting
    }



    return (
        <MenuWrapper>
            <button onClick={() => setActiveComponent("chat")} onFocus={() => handleFocus("chat")} onBlur={handleBlur} tabIndex="0">Chat</button>
            <button onClick={() => setActiveComponent("memo")} onFocus={() => handleFocus("memo")} onBlur={handleBlur} tabIndex="0">Memo</button>
            <button onClick={() => setActiveComponent("info")} onFocus={() => handleFocus("Info")} onBlur={handleBlur} tabIndex="0">Info</button>
            <button onClick={toggleTheme} onFocus={() => handleFocus("toggle enhanced text")} onBlur={handleBlur} tabIndex="0">Toggle Enhanced Text</button>
        </MenuWrapper>
    );
}

export default Menu;