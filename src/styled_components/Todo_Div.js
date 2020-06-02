

import styled from 'styled-components';


const Todo_Div = styled.div`
    width: 81%;
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
        font-weight: 600;
        display: block;
        font-size: 13px;
        margin-left: 2px;
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