import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';
import styled from 'styled-components';

const SearchContainer = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 14px;

  &::placeholder {
    color: #8C939F;
  }
`;

const Search: React.FC = (props) => {
  return (
    <SearchContainer {...props}>
      <Input placeholder="Search..." type="text"/>
      <SearchIcon/>
    </SearchContainer>
  );
};

export default Search;
