import Layout from "../../components/Layout"
import * as S from "./styles"
import PokemonGrid from "../../components/PokemonGrid"
import FavoritesButton from "../../components/FavoritesButton"
import { useSelector } from "react-redux"
import GoBackButton from "../../components/GoBackButton"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"

const Favorites = () => {

    const dispatch = useDispatch()

    const { favorites } = useSelector(({ favorites }) => favorites)
    const { pokemonList } = useSelector(({ pokemons }) => pokemons)

    useEffect(() => {
      let lackingPokemonData = false
      favorites.forEach(e => {


        if(e[1] <= 50)
          return

        if(!pokemonList.find(pokemon => pokemon.name === e[0])){
          console.log(e[0])
          lackingPokemonData = true
        }
      })

      if(lackingPokemonData){
        dispatch(GET_MORE_POKEMONS())
      }
    }, [favorites, dispatch, pokemonList])

    return (
      <Layout>
        <S.FavoritesBar>
          <GoBackButton/>
          <FavoritesButton favoritesPage={true}/>
        </S.FavoritesBar>
        <PokemonGrid
          filterFunction={(e) => favorites.find(favorite => favorite[0] === e.name)}
          favoritesPage={true}
        />
      </Layout>
    );
}

export default Favorites