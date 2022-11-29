import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { TaskStatus } from './constants';
import { Task } from '../../../../components/task';

const TasksPanelContainer = styled.div`
  width: 300px;
`;

export const TasksPanelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 25px 0 13px;
  font-weight: 500;
`;

const TasksPanelTitleBadge = styled.div`
  padding: 2px 9px;
  background-color: #E8EBEF;
  border-radius: 50px;
`;

export const TasksPanelContent = styled.div`
  border-top: 1px solid #F3F3F3;
  border-right: 1px solid #F3F3F3;
  padding: 39px 10px 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export type TasksPanelProps = {
  status: TaskStatus;
  tasks: Task[];
  panelId: string;
}

export const TasksPanel: React.FC<TasksPanelProps> = ({ status, tasks, panelId }) => {
  return (
    <TasksPanelContainer>
      <TasksPanelTitle>
        {TaskStatus[status]}
        <TasksPanelTitleBadge>{tasks.length}</TasksPanelTitleBadge>
      </TasksPanelTitle>
      <Droppable droppableId={panelId}>
        {(droppableProvided) => <TasksPanelContent
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}>
          {tasks?.map((task, index) => <Task key={task.id} id={task.id} index={index} title={task.title} time={task.time} status={task.status}/>)}
        </TasksPanelContent>}
      </Droppable>
    </TasksPanelContainer>
  );
};
