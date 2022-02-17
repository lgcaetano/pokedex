import * as S from "./styles"

const NoPokemonFound = () => {
    return (
        <S.Ops>
            <div className="ops">Ops</div>
            <div className="message">Este pokémon não foi <br /> encontrado :(</div>
        </S.Ops>
    )
}

export default NoPokemonFound