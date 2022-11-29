import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  border: none;
  border-radius: 50px;
  appearance: none;
  vertical-align: center;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0094FF;
  color: #fff;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
};
