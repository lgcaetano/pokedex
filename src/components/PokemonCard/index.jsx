import { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./styles"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SET_POKEMON_DATA } from "../../store/slices/pokemonSlice"
import { useDispatch } from "react-redux"
import PokeballLoader from "../PokeballLoader"
import NoPokemonFound from "../NoPokemonImage"
import { upperCaseFirstLetter, formatId } from "../../utils"



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

      const cleanup = () => { isMounted = false }
      
      if(data)
        return cleanup
      
      if (storeData) {
        const pokeData = storeData
        setData(pokeData)
        setTypes(pokeData.types.map((e) => e.type.name))
        return cleanup
      }
      
      const getData = async () => {
        const { data: pokemonData } = await axios.get(url);
        dispatch(SET_POKEMON_DATA(pokemonData));
        if (isMounted) {
          setData(pokemonData);
          setTypes(pokemonData.types.map((e) => e.type.name));
        }
      };
      getData()

      return cleanup
    }, [data, url, name, dispatch, storeData])


    useEffect(() => {
      if(!data)
        return
      const pokemonImage =
            data.sprites.other.dream_world.front_default;
          setHasImage(pokemonImage != null);
    }, [data])

    const imgSrc = data?.sprites.other.dream_world.front_default 

    const mainType = types[0] ?? ""

    return (
      <Link
        to={`/pokemon/${data?.id}`}
        style={{ pointerEvents: `${data?.name ? "initial" : "none"}` }}
      >
        <S.StyledPokemonCard type={mainType} dark={darkMode}>
          <S.PokemonImg type={mainType} dark={darkMode}>
            <div className="id-container">{`#${formatId(data?.id || "")}`}</div>
            {!imageLoaded && hasImage ? <PokeballLoader /> : ""}
            {!hasImage ? <NoPokemonFound type={mainType} /> : ""}
            <img
              style={{ display: imageLoaded && hasImage ? "initial" : "none" }}
              src={imgSrc}
              alt={`${upperCaseFirstLetter(name)}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </S.PokemonImg>
          <div className="name">{upperCaseFirstLetter(name)}</div>
        </S.StyledPokemonCard>
      </Link>
    );
}

const EmptyPokemonSlot = () => {
  const { darkMode } = useSelector(({ theme }) => theme)
  return (
    <S.StyledPokemonCard dark={darkMode}/>
  )
}

export default PokemonCard

export { EmptyPokemonSlot }