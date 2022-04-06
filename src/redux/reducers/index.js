import {combineReducers} from 'redux';
import { productReducer, nextProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    nextProducts: nextProductReducer,
})

export default reducers;