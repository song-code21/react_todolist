import React from 'react';
import TodoHeader from './TodoHeader';
import styled from 'styled-components';
import TodoBody from './TodoBody';
import AddTodo from './AddTodo';

const Container = styled.div`
    width: 36vw;
    height: auto;
    background-color: #ffe066;
`


function TodoContainer() {
    return(
        <Container>
            <TodoHeader />
            <TodoBody />
            <AddTodo />
        </Container>
    );
}

export default TodoContainer;