import styled from "styled-components";

const styledGrid = styled.div`
  display: grid;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  grid-template-columns: auto auto auto auto auto;
  gap: 20px;
  align-content: space-between;
  justify-content: space-between;
  padding-bottom: 100px;
`;

export { styledGrid }