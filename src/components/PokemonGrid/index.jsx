import { useEffect, useRef, useState} from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"
import FadeLoader from "react-spinners/FadeLoader"
import { css } from "styled-components"
import NoPokemonFound from "../NoPokemonFound"



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
}

const PokemonGrid = (props) => {

    const dispatch = useDispatch()

    const { pokemonList, isLoading } = useSelector(({ pokemons }) => pokemons)

    const [limit, setLimit] = useState(20)

    const limitRef = useRef(20)

    useEffect(() => limitRef.current = limit, [limit])

    const loaderRef = useRef()

    const loaderStyles = css`
      transition: 0 all;
      display: ${isLoading ? "initial" : "none"};
      align-self: center;
      grid-column: 1 / span 4;
    `;



    useEffect(() => {
        dispatch(GET_MORE_POKEMONS())
        
        addInfiniteScrollListener(loaderRef.current, () => {
          
          const newLimit = limitRef.current + 20

          setLimit(newLimit)

          if(newLimit < pokemonList.length)
            return

          if (!(isLoading || props.static)) 
            dispatch(GET_MORE_POKEMONS())
        })
    }, [dispatch])

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
          }).slice(0, limit);

          if(cards.length <= 0){
            return <NoPokemonFound/>
          }

        return cards
    }



    return (
      <S.styledGrid>
        {generateCards()}
        <div className="loader-container" ref={loaderRef}>
          {props.static ? (
            ""
          ) : (
            <FadeLoader
              css={loaderStyles}
              size={100}
              color={isLoading ? "green" : "transparent"}
            ></FadeLoader>
          )}
        </div>
      </S.styledGrid>
    );
}

export default PokemonGrid