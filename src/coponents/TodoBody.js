import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

const BodyContainer = styled.div`
    padding-top: 40px;
    background-color: #fff9db;
    height: 60vh;
`

function TodoBody() {
    const state = useSelector(state => state);
    return(
        <BodyContainer>
            {state && state.map(todo => (<TodoItem key={todo.id} todo={todo}></TodoItem>))}
        </BodyContainer>

    );
}

export default TodoBody;