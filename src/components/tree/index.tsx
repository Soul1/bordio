import React, { useState } from 'react';
import { ReactComponent as Arrow } from './arrow.svg';
import styled from 'styled-components';

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  color: #fff;
  cursor: pointer;
`;
const ArrowField = styled(Arrow)``;
const TreeChild = styled.div`
  color: #8C939F;
`;

export const Tree: React.FC<{ renderList: string[], title: string }> = ({ renderList, title }) => {
  const [showTreeChildren, setShowTreeChildren] = useState(false);
  const toggleTreeChildren = () => setShowTreeChildren(p => !p);
  return (
    <TreeContainer>
      <TitleContainer onClick={toggleTreeChildren}>
        <ArrowField/>
        {title}
      </TitleContainer>
      {showTreeChildren && renderList.map((child) => <TreeChild>{child}</TreeChild>)}
    </TreeContainer>
  );
};
