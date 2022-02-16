import { put, call, takeEvery, select } from "redux-saga/effects"
import axios from "axios"
import { GET_MORE_POKEMONS, SET_MORE_POKEMONS } from "../slices/pokemonSlice"

const getNextPage = ({ pokemons }) => pokemons.nextPage

function* getMorePokemons(){

    const nextPage = yield select(getNextPage)

    try{
        if(nextPage){
            const { data } = yield call(axios.get, nextPage)
            yield put(SET_MORE_POKEMONS({ data }))
        }
    } catch(e){
        console.log(e)
    }
}

export function* pokemonSaga(){
    yield takeEvery(GET_MORE_POKEMONS, getMorePokemons)
}
