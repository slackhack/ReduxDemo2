import {createStore} from 'redux';
import allReducers from './Reducers';

const listStore = createStore(allReducers);

export default listStore;