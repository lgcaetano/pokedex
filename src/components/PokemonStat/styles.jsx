import styled from "styled-components";

const Stat = styled.div`
  display: flex;
  align-items: center;
  .title {
    width: 50px;
    border-right: 2px solid ${({ theme }) => theme.colors.greyscale.lightGray};
  }
  .stat {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.greyscale.white : "initial"};

    font-size: ${({ theme }) => theme.fontSizes.mid};
    display: flex;
    justify-content: center;
    width: 50px;
  }
  .stat-bar {
    height: 6px;
    width: 300px;
    background: inherit;
    opacity: 0.2;
  }
  .stat-fill {
    z-index: 1;
    background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
    opacity: 1;
    height: 100%;
    width: ${({ fill }) => `${(fill / 200) * 300}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.midSmall}) {
    .stat-bar {
      width: 200px;
    }
    .stat-fill {
      width: ${({ fill }) => `${(fill / 200) * 200}px`};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .stat-bar {
      width: 150px;
    }
    .stat-fill {
      width: ${({ fill }) => `${(fill / 200) * 150}px`};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.verySmall}) {
    .stat-bar {
      width: 125px;
    }
    .stat-fill {
      width: ${({ fill }) => `${(fill / 200) * 125}px`};
    }
  }
`;

export { Stat }