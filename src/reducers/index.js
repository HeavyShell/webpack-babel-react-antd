import { createStore, combineReducers } from 'redux'

import app from './app'
import list from './list'
import info from './info'

const rootReducer = combineReducers({
    app:app,
    list:list,
    info:info
})

const store = createStore(rootReducer)

export default store;