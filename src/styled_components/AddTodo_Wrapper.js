

import styled from 'styled-components';


const AddTodo_Wrapper = styled.div`

margin-top: -35px;
position: absolute;
margin-left: 44%;
svg{
    display:block;
}
div{
    font-size: 12px;
    padding: 7px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.5);
    margin-bottom: 9px;
    margin-top: -6px;
}

@media screen and (max-width:700px){
    margin-left: 85%;
}
`;



export default AddTodo_Wrapper;