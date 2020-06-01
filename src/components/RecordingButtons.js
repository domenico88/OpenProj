import React from "react"
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'

function RecordingButtons() {
    const dispatch = useDispatch();


    return <div>
        <button onClick={() => sessionStorage.setItem('Recording', true)}>Record</button>
        <button onClick={() => play_actions(dispatch)}>Play</button>
        <button onClick={() => sessionStorage.setItem('Recording', false)}>Stop</button>
        <button onClick={()=> sessionStorage.removeItem('action_list')}>Clear</button>
    </div>
}

async function play_actions(dispatch) {
    let actions = JSON.parse(sessionStorage.getItem('action_list'));
    if (actions && actions.length > 0) {
        dispatch({ type: types.CLEAR_TODOS })
        sessionStorage.setItem('Recording', false)
        for(let action of actions){
            await delay(1000);
            dispatch(action);
        }
       
        sessionStorage.setItem('Recording', true)
    }

}

function delay(t) {
    return new Promise((resolve) => setTimeout(resolve, t))
}




export default RecordingButtons