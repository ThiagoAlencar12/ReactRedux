import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const saga = createSaga({
  sagaMonitor,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(saga)
      )
    : applyMiddleware(saga);

const store = createStore(rootReducer, enhancer);

saga.run(rootSaga);

export default store;
