import { useState } from 'react';
import {
  StyledContainer,
  Switch,
  Input,
  StyledLink,
} from './ToggleSwitch.style';

export const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <StyledContainer>
      <span>My Notes</span>
      <StyledLink to={isChecked ? '/' : 'archive'}>
        <Input checked={isChecked} type='checkbox' readOnly />
        <Switch onClick={handleClick} />
      </StyledLink>
      <span>Archive</span>
    </StyledContainer>
  );
};
