import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import show from './reducers/show'
import episode from './reducers/episode'
import episodes from './reducers/episodes'
import season from './reducers/season'
import {initial, getEpisodes} from './Actions'
import {Provider} from 'react-redux'
import {createPromise} from 'redux-promise-middleware'
import thunk  from 'redux-thunk'
import { useLocation } from 'react-router-dom';




const reducers = combineReducers({
  show, episode, episodes, season
})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(createPromise(), thunk)
);
const store = createStore(reducers, enhancer);

let show_id = 1955 //id of the show to display by default

store.dispatch(initial(show_id))
store.dispatch(getEpisodes(show_id))




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="shadow">
        <App />
      </div>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
