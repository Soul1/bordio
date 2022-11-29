import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';
import { TaskStatus } from '../../pages/Main/modules/TasksPanel/constants';
import { COMPLETED_COLOR } from './constants';

const TaskContainer = styled.div<{ status: TaskStatus }>`
  padding: 15px 12px 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: ${p => p.status === TaskStatus.Completed ? COMPLETED_COLOR : '#D9E6A2'};
  border-radius: 8px;
`;

const TaskTime = styled.div`
  color: #435E52;
  font-size: 13px;
  line-height: 15px;
`;

export type Task = {
  id: string;
  title: string;
  status: TaskStatus
  time?: string;
}

export const Task: React.FC<Task & { index: number }> = ({ id, title, time, status, index }) => {
  return (
    <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
      {(draggableProvided, draggableSnapshot) => <TaskContainer
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        {...draggableProvided.dragHandleProps}
        status={status}>
        {title}
        {time && <TaskTime>{time}</TaskTime>}
      </TaskContainer>}
    </Draggable>
  )
}
