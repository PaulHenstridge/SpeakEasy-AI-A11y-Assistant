import { useContext, useRef } from 'react';
import styled from 'styled-components'
import { SpeechContext } from '../contexts/speechContext';
import { ThemeContext } from '../contexts/themeContext';

const MenuWrapper = styled.menu`
    width: 75%;
    display:flex;
    justify-content: space-around;
    margin-bottom:  ${props => (props.activeComponent === "chat" || props.activeComponent === "memo") ? "3rem" : "6rem"};

`
const StyledButton = styled.button`
    padding: 0.8rem 1.6rem;
    border-radius: 12%;
    border: none;
`

const Menu = ({ activeComponent, setActiveComponent }) => {

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
        <MenuWrapper activeComponent={activeComponent}>
            <StyledButton onClick={() => setActiveComponent("chat")} onFocus={() => handleFocus("chat")} onBlur={handleBlur} tabIndex="0">Chat</StyledButton>
            <StyledButton onClick={() => setActiveComponent("memo")} onFocus={() => handleFocus("memo")} onBlur={handleBlur} tabIndex="0">Memo</StyledButton>
            <StyledButton onClick={() => setActiveComponent("home")} onFocus={() => handleFocus("home")} onBlur={handleBlur} tabIndex="0">Home</StyledButton>
            <StyledButton onClick={toggleTheme} onFocus={() => handleFocus("toggle enhanced text")} onBlur={handleBlur} tabIndex="0">Toggle Enhanced Text</StyledButton>
        </MenuWrapper>
    );
}

export default Menu;