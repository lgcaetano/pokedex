import * as S from "./styles"


function upperCaseFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const PokemonType = ({ type }) => {
    return (
        <S.Type color={type}>
            {upperCaseFirstLetter(type)}
        </S.Type>
    )
}

export default PokemonType