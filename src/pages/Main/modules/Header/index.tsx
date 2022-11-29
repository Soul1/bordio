import React from 'react';
import { ReactComponent as Plus } from './plus.svg';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import { Select } from '../../../../components/select';
import Search from '../../../../components/search';
import { NotificationInfo } from './NotificationInfo';
import { Avatar } from '../../../../components/avatar';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 4px #F0F1F2;
  padding: 20px;
  width: 100%;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchField = styled(Search)`
  background-color: #F5F8FA;
  border-radius: 50px;
  padding: 12px 16px;
`;

const HeaderAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderActions>
        <Button><Plus /> Add</Button>
        <Select options={[{title: 'Kanban'}, {title: 'Kanban 2'}, {title: 'Kanban 3'}, ]}/>
        <Select options={[{title: 'Filter'}, {title: 'Filter 2'}, {title: 'Filter 3'}, ]}/>
      </HeaderActions>
      <HeaderActions>
        <SearchField />
        <NotificationInfo badge={10} />
        <HeaderAvatar />
      </HeaderActions>
    </HeaderContainer>
  );
};
