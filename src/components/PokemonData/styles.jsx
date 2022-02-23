import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 150px;
  border-radius: 15px;
  background: ${({ theme, dark }) =>
      dark ? theme.colors.greyscale.darkGray : theme.colors.greyscale.background};
  .heart{
    position: relative;
  }
  .colorful {
    color: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
  }
  .main-info {
    display: flex;
    align-items: center;
  }
  .pokemon-name {
    font-size: ${({ theme }) => theme.fontSizes.veryLarge};
    margin: 0 20px;
  }
  .pokemon-id {
    align-self: flex-end;
    margin-bottom: 3px;
  }
  .types {
    display: flex;
    gap: 10px;
  }
  .basic-data {
    display: flex;
    align-self: stretch;
    justify-content: space-around;
  }
  .bio {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.greyscale.white : "initial"};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    gap: 15px;
    max-height: 70vh;
    font-size: ${({ theme }) => theme.fontSizes.mid};
    position: relative;
    left: 0;
    top: 25vh;
    padding: 30px;
    margin: 0px 5px;
    .basic-data{
      gap: 10px;
    }
  }
`;

export {Container}