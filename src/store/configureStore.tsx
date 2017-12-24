import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../types/index';
import initState from './initState';
export default function () {
    const store = createStore<StoreState>(enthusiasm, initState);
    return store;
}