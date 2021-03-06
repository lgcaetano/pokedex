import styled from "styled-components";

const StyledTopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  padding: 50px 0;
  height: max-content;
  color: ${({ theme }) => theme.colors.ioasys.secondary};
  .fa-solid, .fa-solid::before{
    font-family: "FontAwesome";
    font-style: normal;
    font-size: 25px;
  }
  .quiz-link{
    display: ${({ quiz }) => quiz ? "none" : "flex"};
    align-items: center;
    gap: 10px;
    
  }
  .title {
    height: 28px;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: 700;
    line-height: 32px;
  }
  .logo {
    height: 100%;
    margin-right: 12px;
  }
  .toggle-dark-mode {
    height: 27px;
    width: 39px;
    border-radius: 40px;
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.ioasys.secondary};
    .circle {
      height: 100%;
      border-radius: 40px;
      width: 50%;
      background: ${({ dark, theme }) =>
        dark
          ? theme.colors.greyscale.buttonGray
          : theme.colors.ioasys.secondary};
      transition: 300ms all;
      transform: ${({ dark }) => dark ? "translateX(100%)" : ""};
    }
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mid}){
    width: ${({ theme }) => theme.dimensions.midGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    width: ${({ theme }) => theme.dimensions.midSmallGridWidth};
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}) {
    display: ${({ pokemon }) => pokemon ? "none" : "flex"};
    width: ${({ theme }) => theme.dimensions.smallGridWidth};
    .title{
      span{
        display: none;
      }
    }
    .link-text{
      display: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.verySmallGridWidth};
    
  }
`;

export { StyledTopBar }