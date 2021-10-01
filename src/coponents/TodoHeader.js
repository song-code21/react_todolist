import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Title = styled.h1`
    font-family: "Indie flower";
    text-align: center;
`;

const DateBox = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 40px;
`

const LeftWork = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 40px;
    margin-bottom: 10px;
`

function TodoHeader() {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }); 
    const state = useSelector(state => state);
    let left = state.filter(el => el.done === false);

    return(
        <div>
            <Title>Todo List</Title>
            <DateBox>Today: {dateString}</DateBox>
            <LeftWork>할일 {left.length}개 남음</LeftWork>
        </div>
    );
}

export default TodoHeader;