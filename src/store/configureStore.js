import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from '../modules/root';

const epicMiddleware = createEpicMiddleware(rootEpic);
const configureStore = createStore(rootReducer, applyMiddleware(epicMiddleware));

export default configureStore;

// const epicMiddleware = createEpicMiddleware(rootEpic);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default function configureStore() {
//   const store = createStore(
//     rootReducer,composeEnhancers(
//     applyMiddleware(epicMiddleware))
//   );

//   epicMiddleware.run(rootEpic);

//   return store;
// }