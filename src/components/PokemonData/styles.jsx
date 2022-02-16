import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 150px;
  .colorful {
    color: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
  }
  .main-info {
    display: flex;
    align-items: center;
  }
  .pokemon-name {
    font-size: 24px;
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
    gap: 20px;
  }
  .bio {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.greyscale.white : "initial"};
  }
`;

export {Container}