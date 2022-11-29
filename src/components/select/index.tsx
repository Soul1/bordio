import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from './arrow-down.svg';
import { OptionProps, Option } from './Option';
import styled from 'styled-components';

const SelectContainer = styled.label<{ isListOpen: boolean }>`
  position: relative;
  ${p => p.isListOpen && `
    svg {
      transform: rotate(180deg);
    }
  `}
`;

const SelectOption = styled(Option)`
  background-color: #F5F8FA;
  border-radius: 50px;
  padding: 12px 14px 12px 20px;
`;

const Options = styled.div`
  position: absolute;
  top: 48px;
  width: calc(100% + 10px);
  background: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
`;

export const Select: React.FC<{ options: OptionProps[] }> = ({ options }) => {
  const [selectOption, setSelectOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => setShowOptions(p => !p);

  return (
    <SelectContainer onClick={toggleShowOptions} isListOpen={showOptions}>
      <SelectOption title={selectOption.title} icon={<ArrowDown />} />
      {showOptions && <Options>
        {options.map((option) => <Option title={option.title} onClick={() => setSelectOption(option)} />)}
      </Options>}
    </SelectContainer>
  );
};
