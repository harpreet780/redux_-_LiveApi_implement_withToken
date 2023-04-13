import { createStore } from 'redux';
import allReducers from '../reducer/allReducers'

export default createStore(allReducers);