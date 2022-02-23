import styled from "styled-components";

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.large};

  color: ${({ theme, dark }) =>
    dark ? theme.colors.greyscale.white : "initial"};

  img {
    margin-right: 10px;
  }
  .data-title {
    font-size: ${({ theme }) => theme.fontSizes.mid};
    color: ${({ theme }) => theme.colors.greyscale.dataTitleGray};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.mid};
    .data-title{
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
    img{
      margin-right: 5px;
    }
  }
`;

export { Data }