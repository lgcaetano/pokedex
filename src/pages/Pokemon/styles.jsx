import styled from "styled-components";

const Pokemon = styled.div`
    width: 100%;
    padding-right: 30px;
    flex-grow: 1;
    display: flex;
    .left-panel{
        position: relative;
        align-self: stretch;
        width: 400px;
        background: ${({ theme, color }) => theme.colors.pokemonTypes[color]};
        display: flex;
        flex-direction: column;
        align-items: center;
        .pokeball{
            position: absolute;
            top: 70px;
            left: 0px;
        }
        .pokemon-photo{
            position: absolute;
            width: 340px;
            max-height: 340px;
            right: -100px;
            top: 66px;
        }
    }
`

export { Pokemon }