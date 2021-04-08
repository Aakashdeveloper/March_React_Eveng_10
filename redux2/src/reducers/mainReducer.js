import {combineReducers} from 'redux';
import article from './actionReducer';
import gallery from './galleryReducer'

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer