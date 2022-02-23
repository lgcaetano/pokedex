import * as S from "./styles"

const NoPokemonFound = ({ type }) => {
    return (
        <S.NoPokemon type={type}>
            <h1>?</h1>
            <span>Imagem não encontrada</span>
        </S.NoPokemon>
    )
}


export default NoPokemonFound