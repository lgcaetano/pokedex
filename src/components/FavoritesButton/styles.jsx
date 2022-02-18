import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 50px;
  img {
    height: 21px;
  }
  span {
    color: ${({ theme }) => theme.colors.ioasys.secondary};
    display: ${({ hideTitle }) => (hideTitle ? "none" : "initial")};
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    margin-left: 20px;
    margin-right: 20px;
    span {
      display: ${({ favoritesPage }) => favoritesPage ? "initial" : "none"};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.verySmall}) {
    span {
      display: none;
    }
  }
`;

export { Container }