
import styled from 'styled-components';


const Label = styled.label`
display: block;
font-family: ${props => props.theme.label.fontFamily};
margin-bottom: 10px;
font-weight: ${props => props.theme.label.fontWeight};
`;



export default Label;