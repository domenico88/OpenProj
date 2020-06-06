import { fireEvent, waitFor } from '@testing-library/react'
import render from './wrapper'
import React from 'react'
import '@testing-library/jest-dom'
import RecordingButtons from '../components/RecordingButtons'
import App from '../components/App'
import "babel-polyfill"

describe("Recording tests", () => {
    
    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: {
                getItem: jest.fn((key) =>{
                    switch (key){
                        case "Recording":
                            return "true"
                        case "action_list":
                            return JSON.stringify([{type:"ADD_TODO",todo:{id:0,name:"todo",description:"todo"}}])
                    }
                } ),
                setItem: jest.fn(() => null)
            },
            writable: true
        });
    });

    test("Should start recording", () => {
        const { getByTestId } = render(<RecordingButtons />)

        expect(getByTestId('recording')).toBeInTheDocument();
        fireEvent.click(getByTestId('recording'))

        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);

        expect(sessionStorage.setItem).toHaveBeenCalledWith("Recording", true);
    });

    test("Should stop recording", () => {
        const { getByTestId } = render(<RecordingButtons />)

        expect(getByTestId('stop')).toBeInTheDocument();
        fireEvent.click(getByTestId('stop'))

        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);

        expect(sessionStorage.setItem).toHaveBeenCalledWith("Recording", false);
    });

    test("Should record and play ", async () => {
        const { getByTestId } = render(<App />)
       
        //mouse hover Add button to show other buttons and click on recording
        fireEvent.mouseOver(getByTestId('Add'))
        expect(getByTestId('recording')).toBeInTheDocument();
        fireEvent.click(getByTestId('recording'))
        expect(sessionStorage.setItem).toHaveBeenCalledWith("Recording",true);
        
        //add new todo
        fireEvent.change(getByTestId('todo-name'), { target: { value: 'todo' } })
        fireEvent.click(getByTestId('Add'))

        expect(sessionStorage.getItem).toHaveBeenCalledWith("Recording");
        expect(sessionStorage.getItem).toHaveBeenCalledWith("action_list");
        expect(getByTestId('todo')).toBeInTheDocument();
        
        //stop recording and delete todo
        fireEvent.click(getByTestId('stop'))
        expect(sessionStorage.setItem).toHaveBeenCalledWith("Recording",false);
        fireEvent.click(getByTestId('trash'))
        
        //play and verify that todo exists 
        expect(getByTestId('play')).toBeInTheDocument();
        fireEvent.click(getByTestId('play'))
     
        
        await new Promise((r) => setTimeout(r, 1000));
       
        expect(getByTestId('todo')).toBeInTheDocument();
    });


});