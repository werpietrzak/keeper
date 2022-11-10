import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.fonts.pacifico};
  text-align: center;
  text-shadow: 3px 2px #ff7588;
  color: #ffa98c;
`;

export const Subtitle = styled.h2`
  margin: 10px 0;
  font-size: 1.15rem;
  text-align: center;
`;

export const StyledMenu = styled.nav`
  margin: 0;
  padding: 0;
`;
