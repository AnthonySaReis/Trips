import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga  from './modules/rootSaga';


const sagaMiddleWare = createSagaMiddleWare();

const enhancer = applyMiddleware(sagaMiddleWare);

const store = createStore(rootReducer, enhancer);

sagaMiddleWare.run(rootSaga);

export default store;
