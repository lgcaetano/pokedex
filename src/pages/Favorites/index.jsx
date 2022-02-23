import Layout from "../../components/Layout"
import * as S from "./styles"
import PokemonGrid from "../../components/PokemonGrid"
import FavoritesButton from "../../components/FavoritesButton"
import { useSelector } from "react-redux"
import GoBackButton from "../../components/GoBackButton"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FETCH_MORE_POKEMONS_SUCCESS } from "../../store/slices/pokemonSlice"

const Favorites = () => {

    const dispatch = useDispatch()

    const { favorites } = useSelector(({ favorites }) => favorites)
    const { pokemonList } = useSelector(({ pokemons }) => pokemons)

    useEffect(() => {
      favorites.forEach(e => {

        if(e[1] <= 50)
          return

        if(!pokemonList.find(pokemon => pokemon.name === e[0])){
          const pokemonData = [{name: e[0], url: `https://pokeapi.co/api/v2/pokemon/${e[1]}`}]
          dispatch(FETCH_MORE_POKEMONS_SUCCESS({ data: { results : pokemonData } }))
        }
      })
    }, [favorites, dispatch, pokemonList])

    return (
      <Layout>
        <S.FavoritesBar>
          <GoBackButton></GoBackButton>
          <FavoritesButton favoritesPage={true}></FavoritesButton>
        </S.FavoritesBar>
        <PokemonGrid
          filterFunction={(e) => favorites.find(favorite => favorite[0] === e.name)}
          static={true}
        ></PokemonGrid>
      </Layout>
    );
}

export default Favorites