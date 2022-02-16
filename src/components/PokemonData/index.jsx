import * as S from "./styles"
import PokemonType from "../PokemonType"
import fullHeartSrc from "../../assets/icons/FilledHeart.svg"
import hollowHeartSrc from "../../assets/icons/HollowHeart.svg"
import BasicPokemonData from "../BasicPokemonData"
import PokemonStat from "../PokemonStat"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SET_NEW_FAVORITE, REMOVE_FAVORITE } from "../../store/slices/FavoritesSlice"


function upperCaseFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function formatId(id){
    let str = id.toString()
    while(str.length < 3){
        str = "0" + str
    }
    return str
}

function findFirstEnglishBio(entries){
    return entries.find(e => {
        return e.language.name === "en"
    }).flavor_text
}


const PokemonData = ({ data, color }) => {


    const dispatch = useDispatch()

    const { favorites } = useSelector(({ favorites }) => favorites)
    const { darkMode } = useSelector(({ theme }) => theme)

    const isFavorite = () => {
        return favorites.includes(data?.name)
    }

    const toggleFavorite = () => {
        if(isFavorite()){
            dispatch(REMOVE_FAVORITE(data.name))
        } else{
            dispatch(SET_NEW_FAVORITE(data.name))
        }
    }

    const pokemonBio = data && data.bio ? findFirstEnglishBio(data?.bio?.flavor_text_entries) : ""

    console.log(data?.bio)


    return (
      <S.Container color={color} dark={darkMode}>
        <div className="main-info">
          <button className="heart" onClick={toggleFavorite}>
            <img src={isFavorite() ? fullHeartSrc : hollowHeartSrc} alt="" />
          </button>
          <h1 className="colorful pokemon-name">
            {data ? upperCaseFirstLetter(data.name) : false}
          </h1>
          <h5 className="colorful pokemon-id">{`#${formatId(
            data?.id || ""
          )}`}</h5>
        </div>
        <div className="types">
          {data?.types.map(({ type }) => {
            return <PokemonType type={type.name} key={type.name} />;
          })}
        </div>
        <div className="basic-data">
            <BasicPokemonData data={data} dataType={"weight"}></BasicPokemonData>
            <BasicPokemonData data={data} dataType={"height"}></BasicPokemonData>
            <BasicPokemonData data={data} dataType={"abilities"}></BasicPokemonData>
        </div>
        <div className="bio">
            {pokemonBio?.replace("\f", " ")} 
        </div>
        <h3 className="colorful">
            Base Stats
        </h3>
        <div className="stat-container">
            {
                data?.stats.map(({base_stat, stat}) => {
                    return (
                      <PokemonStat
                        statName={stat.name}
                        statValue={base_stat}
                        key={stat.name}
                        color={color}
                      />
                    );
                })
            }
        </div>

      </S.Container>
    );
}

export default PokemonData