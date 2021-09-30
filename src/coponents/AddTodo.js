import React from 'react';
import styled from 'styled-components';

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
    return(
        <AddContainer>
            <Input placeholder="할일을 입력하세요" />
            <Add>Add</Add>
        </AddContainer>
    );
}

export default AddTodo;