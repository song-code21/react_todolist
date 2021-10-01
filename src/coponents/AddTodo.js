import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { addToList } from '../actions';

const AddContainer = styled.div`
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Input = styled.input`
    width: 400px;
    height: 50px;
    box-sizing: border-box;
    ::placeholder{
        text-align: center;
        font-family: "Hi Melody";
        font-size: 1.25rem;
    }
`
const Add = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-family: "Indie Flower";
    /* font-weight: bold; */
    font-size: 1.25rem;
    background-color: #fcc419;
    :hover {
        background-color: #fff9db;
        cursor: pointer;
    }
`

function AddTodo() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    let nextId = useRef(1);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleAddClick = (e) => {
        console.log(state)
        dispatch(addToList(value, nextId.current))
        setValue('')
        console.log(state)
        nextId.current++
    }
    const handleKeyPress = (e) => {
        if(value.length !== 0 && e.key === 'Enter') {
            console.log('enterClick')
            dispatch(addToList(value, nextId.current))
            setValue('')
            nextId.current++
        }
    }
    


    return(
        <AddContainer>
            <Input placeholder="할일을 입력하세요" onChange={handleChange} value={value} onKeyPress={handleKeyPress}/>
            <Add onClick={handleAddClick}>Add</Add>
        </AddContainer>
    );
}

export default AddTodo;