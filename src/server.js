import path from 'path';
import express from "express"
import React from 'react';
// import http from "http"
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';
import { makeExecutableSchema } from 'graphql-tools';
import ReactDOMServer from "react-dom/server"
import axios from 'axios';
import { Provider } from 'react-redux'
import { StaticRouter } from "react-router"
import { renderRoutes, matchRoutes } from 'react-router-config';
import configureStore from './state/configureStore';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { routes } from './routes';

const app = express();
// const server = http.createServer(app);

const engine = new ApolloEngine({
  apiKey: 'service:phillymojo-336:LW38pzFoba4bZWtlwki9DQ'
});

app.use(express.static(path.join(__dirname, 'static')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true
}));

app.use('/graphiql', graphiqlExpress({ 
  endpointURL: '/graphql'
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
      <head>
        <link rel="stylesheet" type="text/css" href="/css/styles.css">
      </head>
      <body>
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

engine.listen({
  port: 3003,
  expressApp: app,
},
console.log(`
server listening at http://localhost:3003

`));