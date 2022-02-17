import styled from "styled-components";

const FavoritesBar = styled.div`
  position: relative;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    color: ${({ theme }) => theme.colors.greyscale.dataTitleGray};
  }
  .go-back {
    position: absolute;
    left: 0;
    transform: translateY(-75%);
  }
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mid}){
    width: ${({ theme }) => theme.dimensions.midGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    width: ${({ theme }) => theme.dimensions.midSmallGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    width: ${({ theme }) => theme.dimensions.smallGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.verySmall}) {
    width: ${({ theme }) => theme.dimensions.verySmallGridWidth};
  }
`;

export { FavoritesBar }