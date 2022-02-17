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
    font-size: 148px;
    font-weight: 700;
  }
  .message {
    font-size: 22px;
    font-weight: 600;
    @media (min-width: ${({ theme }) => theme.breakpoints.midSmall}) {
      position: relative;
      top: -50px;
      left: 140px;
    }
  }
`;

export { Ops }