
import styled from 'styled-components';

const StyledResponseBox = styled.div`
    font-size: ${props => props.theme.fontSize.medium};
    background-color:${props => props.theme.backgroundColor};
    width: 80%;
    margin:auto;
`
const StyledSpan = styled.h4`
font-size: ${props => props.theme.fontSize.medium};
color: ${props => props.theme.colors.fg};
padding-bottom: 2rem;
`

const ResponseBox = ({ response }) => {
    return (<StyledResponseBox>
        <StyledSpan>{response}</StyledSpan>
    </StyledResponseBox>);
}

export default ResponseBox;

