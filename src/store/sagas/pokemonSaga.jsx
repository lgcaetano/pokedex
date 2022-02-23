import { put, call, select, takeLeading } from "redux-saga/effects"
import axios from "axios"
import { GET_MORE_POKEMONS, FETCH_MORE_POKEMONS_SUCCESS, FETCH_MORE_POKEMONS_FAILURE, STOP_LOADING } from "../slices/pokemonSlice"

const getNextPage = ({ pokemons }) => pokemons.nextPage
const getSearchedPages = ({ pokemons }) => pokemons.searchedPages

function* getMorePokemons() {
  const nextPage = yield select(getNextPage);
  const searchedPages = yield select(getSearchedPages);
  if (nextPage && !searchedPages.includes(nextPage)) {
    try {
      const { data } = yield call(axios.get, nextPage);
      yield put(FETCH_MORE_POKEMONS_SUCCESS({ data }));
    } catch (e) {
      yield put(FETCH_MORE_POKEMONS_FAILURE);
    }
  } else {
      put(STOP_LOADING())
  }
}

export function* pokemonSaga() {
  yield takeLeading(GET_MORE_POKEMONS, getMorePokemons);
}
