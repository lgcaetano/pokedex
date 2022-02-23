import { useSelector } from "react-redux"
import * as S from "./styles"

const PokeballLoader = () => {

    const { darkMode } = useSelector(({ theme }) => theme)

    return (
        <S.Pokeball dark={darkMode}>
            <div className="top-half"/>
            <div className="middle">
                <div className="ball">
                    <div className="inside-ball"></div>
                </div>
            </div>
            <div className="bottom-half"/>
        </S.Pokeball>
    )
}

export default PokeballLoader