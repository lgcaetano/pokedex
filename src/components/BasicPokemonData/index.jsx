import * as S from "./styles"
import scaleSrc from "../../assets/icons/Scale.svg"
import rulerSrc from "../../assets/icons/Ruler.svg"
import { useSelector } from "react-redux"
import { upperCaseFirstLetter } from "../../utils"


const icons = {
    "weight": <img src={scaleSrc} alt="" />,
    "height": <img src={rulerSrc} alt="" />,
    "abilities": ""
}


const BasicPokemonData = ({ data, dataType }) => {

    const { darkMode } = useSelector(({ theme }) => theme)

    const getData = () => {
        if(!data){
            return ""
        }

        switch (dataType) {
          case "abilities":
            return `${upperCaseFirstLetter(
              data.abilities[0]?.ability.name
            )} / ${upperCaseFirstLetter(data.abilities[1]?.ability.name)}`;

          case "height":
            return `${data.height / 10} m`;

          case "weight":
            return `${data.weight / 10} kg`;

          default:
            return ""
        }
    }


    return (
        <S.Data dark={darkMode}>
            <div className="data-container">
                {icons[dataType]}
                {getData()}
            </div>
            <div className="data-title">
                {upperCaseFirstLetter(dataType)}
            </div>
        </S.Data>
    )
}

export default BasicPokemonData