import {createStore, applyMiddleware} from 'redux';
import reducer from './Context/myContext';
import thunk from 'redux-thunk';


export default function configureStore() {
    return createStore(
      reducer,
      applyMiddleware(thunk)
    );
  }

  //all components parent and container components must have access to the store. Store is now called and spread where needed. 