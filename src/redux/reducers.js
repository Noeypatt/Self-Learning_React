import { combineReducers } from 'redux'
import LikeReducer from './discovery/reducers'

export default combineReducers({
    like : LikeReducer,
})