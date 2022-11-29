import React from 'react';
import { ReactComponent as NotificationIcon } from './notification.svg';
import styled from 'styled-components';

const NotificationInfoContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Badge = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 10px;
  line-height: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  background: #F21247;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 5px 4px;
`;

export const NotificationInfo: React.FC<{ badge: number }> = ({ badge = 0 }) => {
  return (
    <NotificationInfoContainer>
      <NotificationIcon />
      {!!badge && <Badge>{badge}</Badge>}
    </NotificationInfoContainer>
  );
};
