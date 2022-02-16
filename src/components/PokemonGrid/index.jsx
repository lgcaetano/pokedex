import { useEffect } from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"
import FadeLoader from "react-spinners/FadeLoader"
import { css } from "styled-components"



function addInfiniteScrollListener(callback) {
    window.onscroll = () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if(scrollTop + clientHeight >= scrollHeight - 10){
            callback()
        }
    }
}

const PokemonGrid = (props) => {

    const dispatch = useDispatch()

    const { pokemonList, isLoading } = useSelector(({ pokemons }) => pokemons)

    const loaderStyles = css`
        display: ${isLoading ? "initial" : "none"};
        align-self: center;
        grid-column: 1 / span 4;
    `

    addInfiniteScrollListener(() => {
        if(!isLoading)
            dispatch(GET_MORE_POKEMONS())
    })

    useEffect(() => {
        dispatch(GET_MORE_POKEMONS())
    }, [dispatch])

    const generateCards = () => {
        return pokemonList?.filter(props.filterFunction).map(element => { 
            return (
                <PokemonCard name={element.name} url={element.url} key={element.name}/>
            )
        })
    }



    return (
      <S.styledGrid>
        {generateCards()}
        <div className="loader-container">
          <FadeLoader css={loaderStyles} size={100} color="green"></FadeLoader>
        </div>
      </S.styledGrid>
    );
}

export default PokemonGrid