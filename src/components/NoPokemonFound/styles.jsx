import styled from "styled-components";

const Ops = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.greyscale.noPokemonGray};
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ops {
    font-size: ${({ theme }) => theme.fontSizes.noPokemonFoundWarning};
    font-weight: 700;
  }
  .message {
    font-size: ${({ theme }) => theme.fontSizes.veryLarge};
    font-weight: 600;
    @media (min-width: ${({ theme }) => theme.breakpoints.midSmall}) {
      position: relative;
      top: -50px;
      left: 140px;
    }
  }
`;

export { Ops }