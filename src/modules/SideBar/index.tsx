import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styled from 'styled-components';
import Search from '../../components/search';
import { Avatar } from '../../components/avatar';
import { Tree } from '../../components/tree';

const SideBarContainer = styled.div`
  height: 100vh;
  width: 220px;
  background-color: #0F1D40;
`;

const HeaderSideBarContainer = styled.div`
  padding: 26px 16px 18px;
`;

const TreeContainer = styled.div`
  padding: 12px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const LogoInner = styled(Logo)`
  margin-bottom: 26px;
`;

const SearchField = styled(Search)`
  background-color: #2D4071;
  border-radius: 4px;
  padding: 9px 10px;
  input {
    color: #fff;
  }
`;

const Workspace = styled.div`
  padding: 6px 16px;
  background-color: #2D4071;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
`;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <HeaderSideBarContainer>
        <LogoInner/>
        <SearchField/>
      </HeaderSideBarContainer>
      <Workspace>
        <Avatar/> My workspace
      </Workspace>
      <TreeContainer>
        <Tree title="Favorites" renderList={["Marketing", "Mobile App"]} />
        <Tree title="My Projects" renderList={["Marketing", "Landing Pages", "Wedding",  "Mobile App",  "House Construction"]} />
      </TreeContainer>
    </SideBarContainer>
  );
};
