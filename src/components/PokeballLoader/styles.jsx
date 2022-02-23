import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
`

const Pokeball = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 9999px;
  border: 3px solid
    ${({ theme, dark }) =>
      dark
        ? theme.colors.greyscale.background
        : theme.colors.greyscale.darkGray};
  overflow: hidden;
  animation-name: ${rotate};
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .top-half {
    position: absolute;
    top: -3px;
    height: 50%;
    width: 100%;
    background: ${({ theme }) => theme.colors.ioasys.secondary};
  }
  .middle {
    height: 6px;
    width: 100%;
    background: ${({ theme, dark }) =>
      dark
        ? theme.colors.greyscale.background
        : theme.colors.greyscale.darkGray};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom-half {
    position: absolute;
    bottom: -3px;
    height: 50%;
    width: 100%;
    background: ${({ theme, dark }) => dark ? theme.colors.greyscale.darkGray : theme.colors.greyscale.background};
  }
  .ball {
    z-index: 10;
    border-radius: 9999px;
    width: 15px;
    height: 15px;
    border: 3px solid
      ${({ theme, dark }) =>
        dark
          ? theme.colors.greyscale.background
          : theme.colors.greyscale.darkGray};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .inside-ball {
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme, dark }) => dark ? theme.colors.greyscale.darkGray : theme.colors.greyscale.background};
    background: grey;
    border-radius: 9999px;
  }
`;

export { Pokeball }