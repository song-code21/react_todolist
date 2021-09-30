import React from 'react';
import { MdDelete } from 'react-icons/md';
import { GiCheckMark } from "react-icons/gi";
import styled, { css } from 'styled-components';

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
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({id, done, text}) {
    return(
        <TodoItemBlock>
            <CheckCircle done={true}>{true && <GiCheckMark />}</CheckCircle>
            <Text done={true}>{text}일단 아무거나 왜 없어!!</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;