import { createStore, applyMiddleware, combineReducers } from 'redux'
import { DrawerReducer } from './DrawerReducer'
const reducer = combineReducers({
    drawerReducer: DrawerReducer,

})
const store = createStore(reducer)
export default store;