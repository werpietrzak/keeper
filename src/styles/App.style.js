import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2.5% 0;
  background-image: linear-gradient(
    to bottom right,
    #ffc0cb,
    ${(props) => props.theme.colors.peach}
  );
`;

export const AppContent = styled.div`
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 30px;
  width: 75vw;
  padding: 2% 5%;
  background-color: #fcfcfc;
`;

export const StyledPage = styled.main`
  display: flex;
  justify-content: center;
  margin: 3% 0;
`;
