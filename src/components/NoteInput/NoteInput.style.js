import styled from 'styled-components';

export const StyledInput = styled.input`
  margin-bottom: 5%;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  font-family: ${(props) => props.theme.fonts.lato};
`;

export const StyledTextArea = styled.textarea`
  border: none;
  background: transparent;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.lato};
  resize: vertical;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
