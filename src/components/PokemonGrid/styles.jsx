import styled from "styled-components";

const styledGrid = styled.div`
  display: grid;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  grid-template-columns: auto auto auto auto auto;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
  .loader-container{
    grid-column: 1 / span 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { styledGrid }