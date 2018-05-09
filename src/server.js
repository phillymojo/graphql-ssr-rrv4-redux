import path from 'path';
import express from "express"
import React from 'react';
import http from "http"
import graphqlHTTP from 'express-graphql';
import ReactDOMServer from "react-dom/server"
import axios from 'axios';
import { Provider } from 'react-redux'
import { StaticRouter } from "react-router"
import { renderRoutes, matchRoutes } from 'react-router-config';
import configureStore from './state/configureStore';
import schema from './graphql/schema';
import root from './graphql/resolvers';
import { routes } from './routes';

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'static')));

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.use((req, res) => {
  const store = configureStore();
  const context = {};
  const { url } = req;

  const promises = matchRoutes(routes, url).map(({ route, match }) => {
    if (route.loadData) return store.dispatch(route.loadData(match));
  });

  Promise.all(promises).then(() => {
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )

    const serializedState = JSON.stringify(store.getState())

    // Write the response back to the client
    res.send(`
    <html>
      <body style="background:light blue" >
        <div id="app">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serializedState}
        </script>
        <script src="/js/bundle.js"></script>
      </body> 
    </html>
  `)
  })

})

server.listen(3003);