import * as S from "./styles"
import { upperCaseFirstLetter } from "../../utils"


const PokemonType = ({ type }) => {
    return (
        <S.Type color={type}>
            {upperCaseFirstLetter(type)}
        </S.Type>
    )
}

export default PokemonType