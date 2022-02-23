import styled from "styled-components";

const NoPokemon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.noImageFoundWarning};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    span {
      font-size: ${({ theme }) => theme.fontSizes.verySmall};
    }
  }
`;

export { NoPokemon }