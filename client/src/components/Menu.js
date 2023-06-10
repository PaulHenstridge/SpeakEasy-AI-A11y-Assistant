import styled from 'styled-components'
const MenuWrapper = styled.menu`
    display:flex;
    justify-content: space-around;

`

const Menu = ({ setActiveComponent }) => {


    return (
        <MenuWrapper>
            <button onClick={() => setActiveComponent("chat")}>Chat</button>
            <button onClick={() => setActiveComponent("memo")}>Memo</button>
            <button onClick={() => setActiveComponent("info")}>Info</button>
        </MenuWrapper>
    );
}

export default Menu;