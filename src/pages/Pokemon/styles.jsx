import styled from "styled-components";

const Pokemon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-right: 30px;
  flex-grow: 1;
  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-info-container {
    flex-grow: 1;
    color: ${({ theme }) => theme.colors.greyscale.background};
    display: none;
  }

  .pokeball {
    width: 300px;
    max-width: 100%;
    position: absolute;
    top: 70px;
    left: -50px;
  }
  .pokemon-photo {
    position: absolute;
    width: 340px;
    max-height: 340px;
    max-width: 150%;
    right: -100px;
    top: 66px;
    z-index: 10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 650px;
    height: max-content;
    background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
    .go-back-container {
      display: none;
    }
    .main-info-container {
      display: initial;
    }
    .buttons-container {
      align-self: flex-start;
      padding: 0 30px;
    }

    .pokemon-photo {
      width: 200px;
      max-height: 200px;
      left: calc(50% - 100px);
      top: calc(30vh - 150px);
    }
    .pokeball {
      width: 208px;
      top: 0;
      left: 40%;
    }
  }
`;

const StyledPanel = styled.div`
  position: relative;
  align-self: stretch;
  width: 400px;
  background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    width: 100%;
  }
`;

export { Pokemon, StyledPanel };
