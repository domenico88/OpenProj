import React from "react"
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl, faPlay, faStop, faEraser } from '@fortawesome/free-solid-svg-icons'


function RecordingButtons() {
    const dispatch = useDispatch();


    return <React.Fragment>
        <FontAwesomeIcon title="Record" icon={faRecordVinyl} color={'white'} onClick={() => sessionStorage.setItem('Recording', true)} cursor={'pointer'}>Record</FontAwesomeIcon>
        <FontAwesomeIcon title="Play" icon={faPlay} color={'white'} onClick={() => play_actions(dispatch)} cursor={'pointer'}>Play</FontAwesomeIcon>
        <FontAwesomeIcon title="Stop" icon={faStop} color={'white'} onClick={() => sessionStorage.setItem('Recording', false)} cursor={'pointer'}>Stop</FontAwesomeIcon>
        <FontAwesomeIcon title="Clear" icon={faEraser} color={'white'} onClick={() => sessionStorage.removeItem('action_list')} cursor={'pointer'}>Clear</FontAwesomeIcon>
    </React.Fragment>
}

async function play_actions(dispatch) {
    let actions = JSON.parse(sessionStorage.getItem('action_list'));
    if (actions && actions.length > 0) {
        dispatch({ type: types.CLEAR_TODOS })
        sessionStorage.setItem('Recording', false)
        for (let action of actions) {
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