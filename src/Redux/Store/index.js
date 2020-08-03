import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../Reducer';


const logged = (store) => (next) => (action) => {
    next(action);
}

const store = createStore(Reducer, applyMiddleware(logged, thunk));
export default store;