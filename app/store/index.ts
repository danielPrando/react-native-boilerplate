import { combineReducers, createStore } from 'redux';
import { birdsReducer } from './birds/birds.reducer';

const reducers = combineReducers({
  birdsState: birdsReducer,
});

export type AppState = ReturnType<typeof reducers>;

export const Store = createStore(reducers);