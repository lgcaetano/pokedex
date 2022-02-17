import styled from "styled-components";

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  color: ${({ theme, dark }) =>
    dark ? theme.colors.greyscale.white : "initial"};

  img {
    margin-right: 10px;
  }
  .data-title {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.greyscale.dataTitleGray};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    font-size: 12px;
    .data-title{
      font-size: 10px
    }
    img{
      margin-right: 5px;
    }
  }
`;

export { Data }