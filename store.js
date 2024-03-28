import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
