import { useEffect, useRef, useState} from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"
import NoPokemonFound from "../NoPokemonFound"
import PokeballLoader from "../PokeballLoader"
import { EmptyPokemonSlot } from "../PokemonCard"



function addInfiniteScrollListener(callback) {
  window.onscroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      callback()
    }
  }
}

function fillWithEmptyCards(arr){
  while (arr.length < 12){
    arr.push(<EmptyPokemonSlot key={arr.length}/>)
  }
}

const PokemonGrid = ({ favoritesPage, filterFunction }) => {

    const dispatch = useDispatch()

    const { pokemonList, isLoading, nextPage } = useSelector(({ pokemons }) => pokemons)

    const isListFull = !nextPage

    const [limit, setLimit] = useState(50)

    const [cards, setCards] = useState([])

    const limitRef = useRef(50)

    useEffect(() => limitRef.current = limit, [limit])

    useEffect(() => {
      dispatch(GET_MORE_POKEMONS())
    }, [dispatch])


    useEffect(() => {

      let isMounted = true

      addInfiniteScrollListener(() => {
        const newLimit = limitRef.current + 20;

        if (isMounted) setLimit(newLimit);

        if (newLimit <= pokemonList.length) return;

        if (!favoritesPage && !isListFull) dispatch(GET_MORE_POKEMONS());
      });

      return () => { isMounted = false }
    }, [dispatch, pokemonList, favoritesPage, isListFull]);



    useEffect(() => {
      
      let isMounted = true;

      if (isMounted) {
        const cardsComponents = pokemonList
          ?.filter(filterFunction)
          .map((element) => {
            return (
              <PokemonCard
                name={element.name}
                url={element.url}
                key={element.name}
              />
            );
          })
          .slice(0, limit);

        if (favoritesPage) 
          fillWithEmptyCards(cardsComponents);

        if (cardsComponents.length <= 0 && !isLoading) {
          if (!isListFull) {
            dispatch(GET_MORE_POKEMONS());
          }
          setCards([]);
        }

        setCards(cardsComponents);
      }
      return () => {
        isMounted = false;
      };
    }, [pokemonList, dispatch, isListFull, isLoading, limit, filterFunction, favoritesPage])


    return (
      <S.styledGrid>
        {(cards.length > 0) || isLoading ? cards : <NoPokemonFound/>}
        <div className="loader-container">
          {!favoritesPage && isLoading && !isListFull ? <PokeballLoader /> : ""}
        </div>
      </S.styledGrid>
    );
}

export default PokemonGrid