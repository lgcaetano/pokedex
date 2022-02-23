import styled from "styled-components";

const GoBack = styled.div`
  .arrow {
    position: relative;
    top: 4px;
    transform: rotate(90deg);
    height: 30px;
  }
  .go-back {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.greyscale.white};
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.verySmall}) {
    .text {
      display: none;
    }
  }
`;

export { GoBack }