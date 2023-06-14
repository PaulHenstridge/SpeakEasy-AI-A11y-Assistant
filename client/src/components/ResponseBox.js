
import styled from 'styled-components';

const StyledResponseBox = styled.div`
    font-size: ${props => props.theme.fontSize.medium};
    background-color:${props => props.theme.backgroundColor};
    width: 80%;
    margin:auto;
`
const styledSpan = styled.span`
font-size: ${props => props.theme.fontSize.medium};
color: ${props => props.theme.colors.fg};
`

const ResponseBox = ({ response }) => {
    return (<StyledResponseBox>
        <styledSpan>{response}</styledSpan>
    </StyledResponseBox>);
}

export default ResponseBox;

