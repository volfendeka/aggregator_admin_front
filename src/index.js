import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, authorization } from "./reducers/reducer";
import { requestFeeds, startFeedRunner, stopFeedRunner } from "./reducers/feed";
import { requestFeedsByDay, requestFeedsBySource, requestFeedsBySourceDay, requestGeneralCounters} from "./reducers/overview";
import { requestSources, requestSourceTypes, requestSourceStatuses, createSource, updateSource, requestSourceStats } from "./reducers/source";
import { requestCountries } from "./reducers/country";

import App from './App';

import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
  authorization,
  searchRobots,
  requestFeeds,
  requestSources,
  requestCountries,
  requestSourceTypes,
  requestSourceStatuses,
  createSource,
  updateSource,
  requestSourceStats,
  requestFeedsByDay,
  requestFeedsBySource,
  requestFeedsBySourceDay,
  requestGeneralCounters,
  startFeedRunner,
  stopFeedRunner,
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
