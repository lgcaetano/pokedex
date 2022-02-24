import { useEffect, useRef, useState} from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"
import NoPokemonFound from "../NoPokemonFound"
import PokeballLoader from "../PokeballLoader"
import { EmptyPokemonSlot } from "../PokemonCard"



const observerOptions ={
	root: null,
	rootMargin: '0px',
	threshold: 0.5
}


function addInfiniteScrollListener(ref, callback) {
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting)
            callback()
    }, observerOptions)
    observer.observe(ref)

    return observer
}

function fillWithEmptyCards(arr){
  while (arr.length < 12){
    arr.push(<EmptyPokemonSlot key={arr.length}/>)
  }
}

const PokemonGrid = (props) => {

    const dispatch = useDispatch()

    const { pokemonList, isLoading, nextPage } = useSelector(({ pokemons }) => pokemons)

    const isListFull = !nextPage

    const [limit, setLimit] = useState(20)

    const [cards, setCards] = useState([])

    const limitRef = useRef(20)

    const largestGridSizeRef = useRef(20)

    const observerRef = useRef()

    useEffect(() => limitRef.current = limit, [limit])

    const loaderRef = useRef()

    useEffect(() => {
      dispatch(GET_MORE_POKEMONS())
    }, [dispatch])


    useEffect(() => {

        observerRef.current?.unobserve(loaderRef.current)

        observerRef.current = addInfiniteScrollListener(loaderRef.current, () => {
          
          const newLimit = Math.min(limitRef.current + 20, largestGridSizeRef.current + 20)

          setLimit(newLimit)

          if(newLimit < pokemonList.length)
            return

          if (!props.favoritesPage) 
            dispatch(GET_MORE_POKEMONS())
        })
    }, [dispatch, pokemonList, props.favoritesPage])

    useEffect(() => {
      
      const cardsComponents = pokemonList
        ?.filter(props.filterFunction)
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

      if(props.favoritesPage)
        fillWithEmptyCards(cardsComponents)

      largestGridSizeRef.current = Math.max(largestGridSizeRef.current, cardsComponents.length)

      if (cardsComponents.length <= 0 && !isLoading) {
        if (!isListFull) {
          dispatch(GET_MORE_POKEMONS());
        }
         setCards([]);
      }

      setCards(cardsComponents);
    }, [pokemonList, dispatch, isListFull, isLoading, limit, props.filterFunction, props.favoritesPage])


    return (
      <S.styledGrid>
        {cards.length > 0 ? cards : <NoPokemonFound/>}
        <div className="loader-container" ref={loaderRef}>
          {!props.favoritesPage && isLoading && !isListFull ? <PokeballLoader /> : ""}
        </div>
      </S.styledGrid>
    );
}

export default PokemonGrid