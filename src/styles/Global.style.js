import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.lato};
}

.white {
  border-color: ${(props) => props.theme.colors.darkerWhite};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkerWhite};
  accent-color: ${(props) => props.theme.colors.white};
}

.light-olive {
  border-color: ${(props) => props.theme.colors.darkerLightOlive};
  background-color: ${(props) => props.theme.colors.lightOlive};
  color: ${(props) => props.theme.colors.darkerLightOlive};
  accent-color: ${(props) => props.theme.colors.lightOlive};
}

.blush {
  border-color: ${(props) => props.theme.colors.darkerBlush};
  background-color: ${(props) => props.theme.colors.blush};
  color: ${(props) => props.theme.colors.darkerBlush};
  accent-color: ${(props) => props.theme.colors.blush};
}

.light-pink {
  border-color: ${(props) => props.theme.colors.darkerLightPink};
  background-color: ${(props) => props.theme.colors.lightPink};
  color: ${(props) => props.theme.colors.darkerLightPink};
  accent-color: ${(props) => props.theme.colors.lightPink};
}

.peach {
  border-color: ${(props) => props.theme.colors.darkerPeach};
  background-color: ${(props) => props.theme.colors.peach};
  color: ${(props) => props.theme.colors.darkerPeach};
  accent-color: ${(props) => props.theme.colors.peach};
}

.cream {
  border-color: ${(props) => props.theme.colors.darkerCream};
  background-color: ${(props) => props.theme.colors.cream};
  color: ${(props) => props.theme.colors.darkerCream};
  accent-color: ${(props) => props.theme.colors.cream};
}

.hidden {
  display: none;
}`;
