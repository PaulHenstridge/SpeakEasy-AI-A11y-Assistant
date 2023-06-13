
import styled from 'styled-components';

const StyledResponseBox = styled.div`

    color: ${props => props.theme.textColor};
    font-size: ${props => props.theme.fontSize};
    background-color:${props => props.theme.fontSize};
    width: 80%;
    margin:auto;
`


const ResponseBox = ({ response }) => {
    return (<StyledResponseBox>
        <h5>{response}</h5>
    </StyledResponseBox>);
}

export default ResponseBox;

