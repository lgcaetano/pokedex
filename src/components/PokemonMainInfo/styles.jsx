import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  .pokemon-name {
    font-size: ${({ theme }) => theme.fontSizes.veryLarge};
    margin: 0 20px;
  }
  .pokemon-id {
    align-self: flex-end;
    margin-bottom: 3px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.pokemonPage}){
      width: 100%;
      .pokemon-name{
          margin: 0 auto 0 20px
      }
  }
`

export { Container }