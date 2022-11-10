import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px;
`;

export const Switch = styled.div`
  position: relative;
  box-shadow: inset 2px 3px 3px #808080;
  border-radius: 50px;
  width: 4vw;
  height: 1.8vw;
  padding: 5.5%;
  background-color: #b3b3b3;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: 300ms all;
    box-shadow: 2px 3px 3px #808080;
    border-radius: 35px;
    width: 1.8vw;
    height: 1.8vw;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Switch}::before {
    transform: translate(120%, -50%);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
