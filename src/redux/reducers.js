
import { combineReducers } from 'redux'
import { likeReducer } from './discovery/reducers'

const rootReducer = combineReducers({
    like: likeReducer
})

export default rootReducer