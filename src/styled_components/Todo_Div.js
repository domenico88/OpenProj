

import styled from 'styled-components';


const Todo_Div = styled.div`
    width: calc(80% + 11px);
    font-size: 15px;
    padding: 7px;
    background-color: ${props => props.theme.todo_div.backgroundColor};
    color: ${props => props.theme.todo_div.color};
    margin-bottom: 5px;
    svg{
        float: right;
        margin-top: -28px;
        font-size: 10px;
        cursor:pointer;
        }
    }
    #creationDate{
        font-size: 9px;
        float: right;
        font-family: sans-serif;
        margin-left: 2px;
    }
    label{
       
        font-size: 12px;
        margin-left:2px;
       margin-bottom:0;
        margin-top:6px;
    }
    input {
        color: white;
        background-color: transparent;
        border: 0;
        font-size: 11px;
        outline:none;
        width:80%;
    }

`;



export default Todo_Div;