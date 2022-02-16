import { useEffect } from "react"
import PokemonCard from "../PokemonCard"
import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice"

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

    addInfiniteScrollListener(() => {
        if(!isLoading)
            dispatch(GET_MORE_POKEMONS())
    })

    useEffect(() => {
        dispatch(GET_MORE_POKEMONS())
    }, [dispatch])

    const generateCards = () => {
        return pokemonList?.filter(e => e.name.includes(props.filter)).map(element => { 
            return (
                <PokemonCard name={element.name} url={element.url} key={element.name}/>
            )
        })
    }



    return (
        <S.styledGrid>
            {generateCards()}
        </S.styledGrid>
    )
}

export default PokemonGrid