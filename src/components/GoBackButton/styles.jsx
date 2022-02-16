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
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.greyscale.white};
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export { GoBack }