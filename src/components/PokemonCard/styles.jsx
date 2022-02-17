import styled from "styled-components";

const getMainColor = ({ theme, type }) => theme.colors.pokemonTypes[type]


const StyledPokemonCard = styled.div`
  height: 150px;
  width: 150px;
  background-color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  color: ${({ theme }) => theme.colors.greyscale.white};
  display: flex;
  flex-direction: column;
  border-radius: 10.5px;
  overflow: hidden;
  .img-container {
      position: relative;
    transition: 300ms all;
    background: ${({ theme, dark }) =>
      dark
        ? theme.colors.greyscale.darkGray
        : theme.colors.greyscale.background};
    width: 100%;
    height: 80%;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: solid 1px ${getMainColor};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 80%;
      object-fit: cover;
    }
  }
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .id-container {
    position: absolute;
    right: 5px;
    top: 5px;
    color: ${getMainColor};
    font-size: 12px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.midSmall}){
    width: 104px;
    height: 112px;
    font-size: 0.8em;
  }
`;

export { StyledPokemonCard }