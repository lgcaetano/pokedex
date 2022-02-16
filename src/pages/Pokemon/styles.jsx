import styled from "styled-components";

const Pokemon = styled.div`
    width: 100%;
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
            height: 340px;
            max-width: 340px;
            left: 170px;
            top: 66px;
        }
        .arrow{
            position: relative;
            top: 4px;
            transform: rotate(90deg);
            height: 30px;
        }
        .go-back{
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.greyscale.white};
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
`

export { Pokemon }