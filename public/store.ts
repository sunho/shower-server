import { applyMiddleware,  compose, createStore, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducer';

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  ),
);
