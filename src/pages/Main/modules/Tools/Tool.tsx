import React from 'react';
import styled from 'styled-components';

const ToolContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 15px 10px;
  cursor: pointer; 
  
  ${p => p.active && `
    color: #0094FF;
    background: #fff;
    border-radius: 0 8px 8px 0;
    path {
      fill: #0094FF;
    };
    &:before {
      content: '';
      height: 100%;
      width: 4px;
      background-color: #0094FF;
      border-radius: 0 10px 10px 0;
      position: absolute;
      left: 0;
    }
  `}
`;

export const Tool: React.FC<{ active: boolean, onChange?: (id: string) => void, title: string, icon: React.ReactNode }> = ({ active, onChange, title, icon }) => {
  return (
    <ToolContainer active={active} onClick={() => onChange?.(title)}>
      {icon} {title}
    </ToolContainer>
  );
};
