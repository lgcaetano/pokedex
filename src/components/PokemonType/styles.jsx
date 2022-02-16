import styled from "styled-components";

const Type = styled.div`
    width: max-content;
    border-radius: 9999px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyscale.white};
    background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
`

export { Type }