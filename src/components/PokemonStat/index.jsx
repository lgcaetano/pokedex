import { useSelector } from "react-redux"
import * as S from "./styles"

const abbreviations = {
    "hp": "HP",
    "attack": "ATK",
    "defense": "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    "speed": "SPD"
}


function formatStat(stat){
    let str = stat.toString()
    while(str.length < 3){
        str = "0" + str
    }
    return str
}


const PokemonStat = ({ statName, statValue, color }) => {

    const { darkMode } = useSelector(({ theme }) => theme)

    return(
        <S.Stat color={color} fill={statValue} dark={darkMode}>
            <h5 className="colorful title">
                {abbreviations[statName]}
            </h5>
            <div className="stat">
                {formatStat(statValue)}
            </div>
            <div className="stat-fill">
                <div className="stat-bar"/>
            </div>
        </S.Stat>
    )
}

export default PokemonStat