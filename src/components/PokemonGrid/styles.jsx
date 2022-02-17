import styled from "styled-components";

const styledGrid = styled.div`
  display: grid;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  grid-template-columns: auto auto auto auto auto;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
  .loader-container {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    width: ${({ theme }) => theme.dimensions.midGridWidth};
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    width: ${({ theme }) => theme.dimensions.midSmallGridWidth};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    width: ${({ theme }) => theme.dimensions.smallGridWidth};
    grid-template-columns: auto auto auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.verySmall}) {
    width: ${({ theme }) => theme.dimensions.verySmallGridWidth};
    grid-template-columns: auto auto;
  }
`;

export { styledGrid }