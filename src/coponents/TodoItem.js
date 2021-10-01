import React from 'react';
import { MdDelete } from 'react-icons/md';
import { GiCheckMark } from "react-icons/gi";
import styled, { css } from 'styled-components';
import {useDispatch}  from 'react-redux';
import {checkDone, removeFromList} from '../actions/index';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ffd43b;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      color: #ffd43b;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: black;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({key, todo}) {
    // const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      console.log(id);
      dispatch(removeFromList(id))
    }

    const handleCheckClick = (id, done) => {
      console.log(done)
      dispatch(checkDone(id, !done))
    }
    return(
        <TodoItemBlock key={key}>
            <CheckCircle done={todo.done} onClick={() => handleCheckClick(todo.id, todo.done)}>{todo.done && <GiCheckMark />}</CheckCircle>
            <Text done={false}>{todo.text}</Text>
            <Remove >
                <MdDelete onClick={() => handleDelete(todo.id)} />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;