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
`;

const SearchBar = styled.input`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.ioasys.secondary};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.greyscale.mediumGray};
    padding: 0 35px;
    height: 54px;
    flex-grow: 1;
    border-radius: 5px;
    outline: none;
`

export { Container, SearchBar }