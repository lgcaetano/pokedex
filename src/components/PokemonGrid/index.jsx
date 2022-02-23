import { useEffect, useRef, useState} from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"
import NoPokemonFound from "../NoPokemonFound"
import PokeballLoader from "../PokeballLoader"



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

const PokemonGrid = (props) => {

    const dispatch = useDispatch()

    const { pokemonList, isLoading, nextPage } = useSelector(({ pokemons }) => pokemons)

    const isListFull = !nextPage

    const [limit, setLimit] = useState(20)

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

          // console.log(newLimit)

          setLimit(newLimit)

          if(newLimit < pokemonList.length)
            return

          if (!props.static) 
            dispatch(GET_MORE_POKEMONS())
        })
    }, [dispatch, pokemonList, props.static])

    const generateCards = () => {
      
      const cards = pokemonList
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

      largestGridSizeRef.current = Math.max(largestGridSizeRef.current, cards.length)

      if (cards.length <= 0 && !isLoading) {
        if (!isListFull) {
          dispatch(GET_MORE_POKEMONS());
        }
        return <NoPokemonFound />;
      }

      return cards;
    };


    return (
      <S.styledGrid>
        {generateCards()}
        <div className="loader-container" ref={loaderRef}>
          {!props.static && isLoading && !isListFull ? <PokeballLoader /> : ""}
        </div>
      </S.styledGrid>
    );
}

export default PokemonGrid