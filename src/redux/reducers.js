
import { combineReducers } from 'redux'
import { cardReducer } from './discovery/reducers'

const rootReducer = combineReducers({
    data: cardReducer
})

export default rootReducer