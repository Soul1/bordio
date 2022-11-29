import React from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #F5F8FA;
  }
`;

export type OptionProps = {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Option: React.FC<OptionProps> = ({ title, icon, className , ...props}) => {
  return (
    <OptionContainer className={className} {...props}>
      {title} {icon}
    </OptionContainer>
  );
};
