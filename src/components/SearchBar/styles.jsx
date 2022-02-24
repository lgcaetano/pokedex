import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  max-width: 100%;
  padding: 0 0 50px 0;
  .search-title {
    transition: 300ms all;
    position: absolute;
    left: 25px;
    top: -15px;
    padding: 3px;
    background: ${({ theme, dark }) =>
      dark
        ? theme.colors.greyscale.darkGray
        : theme.colors.greyscale.background};
    color: ${({ theme }) => theme.colors.ioasys.secondary};
    font-weight: 500;
  }
  .search-icon{
    position: absolute;
    height: 20px;
    right: 220px;
    z-index: 10;
    img{
      height: 100%;
    }
    &:disabled{
      cursor: default;
      img{
        cursor: default;
      }
    }
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.mid}) {
    width: ${({ theme }) => theme.dimensions.midGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    width: ${({ theme }) => theme.dimensions.midSmallGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    width: ${({ theme }) => theme.dimensions.smallGridWidth};
    .search-icon{
      display: none;
    }
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.verySmallGridWidth};
  }
`;

const SearchBar = styled.input`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.ioasys.secondary};
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.greyscale.mediumGray};
    padding: 0 35px;
    height: 54px;
    max-width: calc(100% - 50px);
    flex-grow: 1;
    border-radius: 5px;
    outline: none;
`

export { Container, SearchBar }