import styled from "styled-components";

const StyledTopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.dimensions.gridWidth};
  padding: 50px 0;
  height: max-content;
  color: ${({ theme }) => theme.colors.ioasys.secondary};
  .title {
    height: 28px;
    display: flex;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
  }
  .logo {
    height: 100%;
    margin-right: 12px;
  }
  .toggle-dark-mode {
    height: 27px;
    width: 39px;
    border-radius: 40px;
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.ioasys.secondary};
    .circle {
      height: 100%;
      border-radius: 40px;
      width: 50%;
      background: ${({ dark, theme }) =>
        dark
          ? theme.colors.greyscale.buttonGray
          : theme.colors.ioasys.secondary};
      transition: 300ms all;
      transform: ${({ dark }) => dark ? "translateX(100%)" : ""};
    }
  }
`;

export { StyledTopBar }