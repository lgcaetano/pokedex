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
`;

export { FavoritesBar }