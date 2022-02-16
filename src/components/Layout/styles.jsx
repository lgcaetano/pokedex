import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  transition: 300ms all;
  border-top: 20px solid
    ${({ theme, curColor }) =>
      curColor
        ? theme.colors.pokemonTypes[curColor]
        : theme.colors.ioasys.secondary};
        
  background: ${({ dark, theme }) =>
    dark 
      ? theme.colors.greyscale.darkGray 
      : theme.colors.greyscale.background};

  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-grow: 1;
  }
`;

export { StyledLayout }     