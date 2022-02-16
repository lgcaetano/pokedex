import { configureStore } from "@reduxjs/toolkit";
import createSagaMidddleware from 'redux-saga'

import sagas from "./sagas" 
import reducers from "./slices" 

const sagaMiddleware = createSagaMidddleware()

const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(sagas)

export default store