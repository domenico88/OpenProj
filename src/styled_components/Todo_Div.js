

import styled from 'styled-components';


const Todo_Div = styled.div`
    width: calc(80% + 11px);
    font-size: 15px;
    padding: 7px;
    background-color: rgba(1,1,1,0.4);
    color: white;
    margin-bottom: 5px;
    svg{
        float: right;
        margin-top: -46px;
        font-size: 10px;
        cursor:pointer;
        }
    }
    label{
       
        font-size: 12px;
        margin-left:2px;
       margin-bottom:0;
        margin-top:10px;
    }
    input {
        color: white;
        background-color: transparent;
        border: 0;
        font-size: 11px;
        outline:none;
        width:100%;
    }

`;



export default Todo_Div;