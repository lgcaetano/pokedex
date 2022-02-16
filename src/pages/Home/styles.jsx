import styled from "styled-components";

const HomeLayout = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  transition: 300ms all;
  border-top: 20px solid ${({ theme }) => theme.colors.ioasys.secondary};
  background: ${({ dark, theme }) =>
    dark ? theme.colors.greyscale.darkGray : theme.colors.greyscale.background};
`;

export { HomeLayout }     