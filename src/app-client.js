import ReactDOM from "react-dom"
import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import configureStore from './state/configureStore';
import { routes } from './routes';
import { RouteDataLoader } from './route-data-loader'; 
 
const store = configureStore(window.__PRELOADED_STATE__)

window.onload = () => {
  ReactDOM.hydrate(
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