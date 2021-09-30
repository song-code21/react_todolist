import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const BodyContainer = styled.div`
    padding-top: 40px;
    background-color: #fff9db;
    height: 60vh;
`

function TodoBody() {
    return(
        <BodyContainer>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </BodyContainer>

    );
}

export default TodoBody;