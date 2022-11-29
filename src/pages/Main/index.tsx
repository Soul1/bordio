import React, { useState } from 'react';
import { ReactComponent as Plus } from './plus-grey.svg';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { SideBar } from '../../modules/SideBar';
import { Tools } from './modules/Tools';
import styled from 'styled-components';
import { Header } from './modules/Header';
import { TasksPanel, TasksPanelContent, TasksPanelProps } from './modules/TasksPanel';
import { TaskStatus } from './modules/TasksPanel/constants';

const MainContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  width: 100%;
`;

const TasksContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ActionTask = styled.div`
  flex: 1 1;
`;

const ActionTaskTitle = styled.div`
  display: flex;
  align-items:center;
  gap: 4px;
  color: #8C939F;
  padding: 29px 36px 13px;
  cursor: pointer;
  border-bottom: 1px solid #F3F3F3;
  border-left: 1px solid #F3F3F3;
`;

const reorderColumnList = (sourceCol: TasksPanelProps, startIndex: number, endIndex: number) => {
  const newTasks = Array.from(sourceCol?.tasks);
  const [removed] = newTasks.splice(startIndex, 1);
  newTasks.splice(endIndex, 0, removed);

  return {
    ...sourceCol,
    tasks: newTasks
  };
};

const initTasksPanel: TasksPanelProps[] = [
  { panelId: 'New_Task_1', status: TaskStatus.New_Task, tasks: [{ id: '1', title: 'New_Task', time: '0:30h', status: TaskStatus.New_Task }] },
  { panelId: 'In_Progress_2', status: TaskStatus.In_Progress, tasks: [{ id: '2', title: 'In_Progress', time: '2:30h', status: TaskStatus.In_Progress }] },
  { panelId: 'Scheduled_3', status: TaskStatus.Scheduled, tasks: [{ id: '3', title: 'Scheduled', time: '3:30h', status: TaskStatus.Scheduled }] },
  {
    panelId: 'Completed_4',
    status: TaskStatus.Completed,
    tasks: [{ id: '4', title: 'Completed 1', time: '4:00h', status: TaskStatus.Completed }, { id: '5', title: 'Completed 2', time: '8:00h', status: TaskStatus.Completed }]
  }
];

export const Main = () => {
  const [tasksPanel, setTasksPanel] = useState(initTasksPanel);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination || !tasksPanel) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const sourceCol = tasksPanel.find((panel) => panel.panelId === source.droppableId);
    const destinationCol = tasksPanel.find((panel) => panel.panelId === destination.droppableId);
    if (!sourceCol || !destinationCol) return;

    // dnd в своей панели
    if (sourceCol?.panelId === destinationCol?.panelId) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      setTasksPanel((prev) => prev.map((panel) => panel.panelId === newColumn.panelId ? newColumn : panel));
      return;
    }

    // dnd панелях между
    const startTasks = Array.from(sourceCol?.tasks ?? []);
    const [task] = startTasks.splice(source.index, 1);
    const endTasks = Array.from(destinationCol?.tasks ?? []);
    endTasks.splice(destination.index, 0, { ...task, status: destinationCol.status });

    setTasksPanel((prev) => prev.map((panel) => {
      if (panel.panelId === sourceCol?.panelId) return { ...panel, tasks: startTasks };
      if (panel.panelId === destinationCol?.panelId) return { ...panel, tasks: endTasks };
      return panel;
    }));
  };

  return (
    <MainContainer>
      <SideBar/>
      <Tools/>
      <MainContent>
        <Header/>
        <TasksContainer>
          <DragDropContext onDragEnd={onDragEnd}>
            <TasksContainer>
              {
                tasksPanel.map(({ panelId, status, tasks }) => <TasksPanel key={panelId} panelId={panelId} status={status} tasks={tasks}/>)
              }
            </TasksContainer>
          </DragDropContext>
          <ActionTask>
            <ActionTaskTitle>
             <Plus /> Create status
            </ActionTaskTitle>
          </ActionTask>
        </TasksContainer>
      </MainContent>
    </MainContainer>
  );
};
