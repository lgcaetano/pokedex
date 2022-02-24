import { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./styles"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SET_POKEMON_DATA } from "../../store/slices/pokemonSlice"
import { useDispatch } from "react-redux"
import PokeballLoader from "../PokeballLoader"
import NoPokemonFound from "../NoPokemonImage"

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

const PokemonCard = ({ name, url }) => {

    const dispatch = useDispatch()

    const { darkMode } = useSelector(({ theme }) => theme)
    const { allPokemonData } = useSelector(({ pokemons }) => pokemons)

    const [imageLoaded, setImageLoaded] = useState(false)
    const [data, setData] = useState()
    const [types, setTypes] = useState([])
    const [hasImage, setHasImage] = useState(true)

    const storeData = allPokemonData[name]

    useEffect(() => {

      let isMounted = true
      
      if(data)
        return
      
      if (storeData) {
        const pokeData = storeData
        setData(pokeData)
        setTypes(pokeData.types.map((e) => e.type.name))
        return
      }
      
      const getData = async () => {
        const { data: pokemonData } = await axios.get(url);
        dispatch(SET_POKEMON_DATA(pokemonData));
        if (isMounted) {
          setData(pokemonData);
          setTypes(pokemonData.types.map((e) => e.type.name));
          const pokemonImage =
            pokemonData.sprites.other.dream_world.front_default;
          setHasImage(pokemonImage != null);
        }
      };
      getData()

      return () => { isMounted = false }
    }, [data, url, name, dispatch, storeData])

    const imgSrc = data?.sprites.other.dream_world.front_default 


    const mainType = types[0] ?? ""

    return (
      <Link to={`/pokemon/${data?.id}`}>
        <S.StyledPokemonCard type={mainType} dark={darkMode}>
          <div className="img-container">
            <div className="id-container">{`#${formatId(data?.id || "")}`}</div>
            {!imageLoaded && hasImage ? <PokeballLoader/> : ""}
            {!hasImage ? <NoPokemonFound type={mainType}/> : ""}
            <img
              style={{ display: imageLoaded && hasImage ? "initial" : "none" }}
              src={imgSrc}
              alt={`${upperCaseFirstLetter(name)}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
          <div className="name">{upperCaseFirstLetter(name)}</div>
        </S.StyledPokemonCard>
      </Link>
    );
}

export default PokemonCard