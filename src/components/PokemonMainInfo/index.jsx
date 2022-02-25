import * as S from "./styles"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { SET_NEW_FAVORITE, REMOVE_FAVORITE } from "../../store/slices/FavoritesSlice"
import { useState } from "react"
import fullHeartSrc from "../../assets/icons/FilledHeart.svg"
import hollowHeartSrc from "../../assets/icons/HollowHeart.svg"
import FavoritesTooltip from "../FavoritesTooltip"
import { upperCaseFirstLetter, formatId } from "../../utils"

const PokemonMainInfo = ({ data }) => {

    const dispatch = useDispatch()

    const [favoritesTooltip, setFavoritesTooltip] = useState(false)

    const { favorites } = useSelector(({ favorites }) => favorites)

    
    const isFavorite = () => {
        return favorites.find(e => e[0] === data?.name)
    }
    
    const toggleFavorite = () => {
        if(isFavorite()){
            dispatch(REMOVE_FAVORITE(data.name))
            return
        } if(favorites.length >= 12){
          setFavoritesTooltip(true)
          setTimeout(() => setFavoritesTooltip(false), 4000)
          return
        }
        dispatch(SET_NEW_FAVORITE([data.name, data.id]));
    }

    return (
      <S.Container>
        <button className="heart" onClick={toggleFavorite}>
          <FavoritesTooltip activated={favoritesTooltip} />
          <img src={isFavorite() ? fullHeartSrc : hollowHeartSrc} alt="" />
        </button>
        <h1 className="colorful pokemon-name">
          {data ? upperCaseFirstLetter(data.name) : false}
        </h1>
        <h5 className="colorful pokemon-id">
          {`#${formatId(data?.id || "")}`}
        </h5>
      </S.Container>
    );
}

export default PokemonMainInfo