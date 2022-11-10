import {
  StyledContainer,
  StyledSearchbar,
  StyledInput,
} from './Searchbar.style';
import { MdSearch } from 'react-icons/md';

export const Searchbar = ({ handleSearchNote }) => {
  return (
    <StyledContainer>
      <StyledSearchbar>
        <MdSearch />
        <StyledInput
          onChange={({ target }) => handleSearchNote(target.value)}
          type='text'
          placeholder='Type to search in notes'
        />
      </StyledSearchbar>
    </StyledContainer>
  );
};
