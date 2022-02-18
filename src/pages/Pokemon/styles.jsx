import styled from "styled-components";

const Pokemon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-right: 30px;
  flex-grow: 1;
  .left-panel {
    position: relative;
    align-self: stretch;
    width: 400px;
    background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 100vh;
    height: max-content;
    background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
    .buttons-container{
        align-self: flex-start;
        margin-left: 30px;
    }
    .left-panel {
      width: 100%;
      .pokemon-photo {
        width: 200px;
        max-height: 200px;
        left: calc(50% - 100px);
        top: calc(30vh - 150px);
      }
      .pokeball{
          width: 35%;
          top: 0;
          left: 50%;
      }
    }
  }
`;

export { Pokemon }