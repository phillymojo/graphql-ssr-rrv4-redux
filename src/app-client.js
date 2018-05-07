import ReactDOM from "react-dom"
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import { routes } from './routes';
import { renderRoutes } from 'react-router-config';
import { RouteDataLoader } from './route-data-loader'; 
 
const store = configureStore(window.__PRELOADED_STATE__)

window.onload = () => {
  ReactDOM.hydrate( // render or hydrate? hydrate was throwing a warning about matching <div> or something...
    <Provider store={store}>
      <BrowserRouter>
        <RouteDataLoader routes={routes} dispatch={store.dispatch}>
          { renderRoutes(routes) }
        </RouteDataLoader>
      </BrowserRouter>
    </Provider>,
    document.getElementById("app")
  )
}