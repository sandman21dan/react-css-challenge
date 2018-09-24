import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import initialState from './store/initialState';
import rootReducer from './store/reducers';
import rootEpic from './store/epics';
import { IStoreState } from './types';

const epicMiddleware = createEpicMiddleware();

export const store: Store<IStoreState> = createStore(
  rootReducer,
  initialState(),
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ),
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
