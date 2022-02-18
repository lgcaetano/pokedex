import styled from "styled-components";

const Tooltip = styled.div`
  transition: 1000ms all;
  width: max-content;
  opacity: ${({ activated }) => (activated ? 1 : 0)};
  border-radius: 20px;
  position: absolute;
  top: -50px;
  z-index: ${({ activated }) => (activated ? 20 : -20)};
  background: ${({ theme }) => theme.colors.greyscale.mediumGray};
  color: ${({ theme }) => theme.colors.greyscale.white};
  padding: 10px;
  &:before{
      content: "";
      position: absolute;
      top: 89%;
      left: 7px;
      clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
      width: 20px;
      height: 10px;
      background: inherit;
  }
`;

export { Tooltip }