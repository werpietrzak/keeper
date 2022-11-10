import { StyledHeader, StyledMenu, Logo, Subtitle } from './Header.style';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { ToggleSwitch } from '../../components/ToggleSwitch/ToggleSwitch';

export const Header = ({ handleSearchNote }) => {
  return (
    <StyledHeader>
      <div>
        <Logo>Keeper</Logo>
        <Subtitle>a note app</Subtitle>
      </div>
      <Searchbar handleSearchNote={handleSearchNote} />
      <StyledMenu>
        <ToggleSwitch />
      </StyledMenu>
    </StyledHeader>
  );
};
