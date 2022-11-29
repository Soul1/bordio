import React, { useState } from 'react';
import styled from 'styled-components';
import { tools } from './constants';
import { Tool } from './Tool';

const ToolsContainer = styled.div`
  padding-top: 24px;
  padding-right: 16px;
  background-color: #F5F8FA;
  height: 100vh;
`;

const ToolsTitle = styled.div`
  margin-bottom: 32px;
  padding-left: 16px;
  font-size: 18px;
  line-height: 21px;
`;

export const Tools = () => {
  const [selectTool, setSelectTool] = useState(tools[0].title);

  return (
    <ToolsContainer>
      <ToolsTitle>Tools</ToolsTitle>
      {tools.map((tool) => <Tool key={tool.id} title={tool.title} icon={tool.icon} active={selectTool === tool.title} onChange={(id) => setSelectTool(id)} />)}
    </ToolsContainer>
  );
};
