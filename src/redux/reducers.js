
import { combineReducers } from 'redux'
import { cardReducer } from './discovery/reducers'

const rootReducer = combineReducers({
    card: cardReducer
})

export default rootReducer