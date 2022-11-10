import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3% 0;
`;

export const StyledSearchbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 2px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 20vw;
  height: 3vw;
  padding: 0 6%;
  background-color: #f5f5f5;
`;

export const StyledInput = styled.input`
  border: none;
  width: 18vw;
  background: none;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.lato};
`;
