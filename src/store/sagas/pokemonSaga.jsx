import { put, call, select, takeLeading } from "redux-saga/effects"
import axios from "axios"
import { GET_MORE_POKEMONS, SET_MORE_POKEMONS } from "../slices/pokemonSlice"

const getNextPage = ({ pokemons }) => pokemons.nextPage
const getSearchedPages = ({ pokemons }) => pokemons.searchedPages

function* getMorePokemons(){

    const nextPage = yield select(getNextPage)
    const searchedPages = yield select(getSearchedPages)

    try{
        if(nextPage && !searchedPages.includes(nextPage)){
            const { data } = yield call(axios.get, nextPage)
            yield put(SET_MORE_POKEMONS({ data }))
        }
    } catch(e){
        console.log(e)
    }
}

export function* pokemonSaga(){
    yield takeLeading(GET_MORE_POKEMONS, getMorePokemons)
}
