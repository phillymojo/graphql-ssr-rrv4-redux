import path from 'path';
import express from "express"
import React from 'react';
import http from "http"
import ReactDOMServer from "react-dom/server"
import { createStore } from "redux"
import { Provider } from 'react-redux'
import { StaticRouter, Route, Switch } from "react-router"
import configureStore from './configureStore';
import { renderRoutes, matchRoutes } from 'react-router-config';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { routes } from './routes';
import axios from 'axios';


const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'static')));

const schema = buildSchema(`
  type Query {
    hello: String!,
    xkcd: XKCD!
    news: [newsItem!]!
  }
  type XKCD {
    img: String!,
    num: Int!,
    title: String!,
    alt: String!
  },
  type newsItem {
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world';
  },
  xkcd: () => {
    const num = Math.floor(Math.random() * 1988) + 1;
    return axios.get(`https://xkcd.com/${num}/info.0.json`)
      .then((response) => {
        return response.data
      })
  },
  news: () => {
    const apiKey = 'c79820853d9c4793b5dc93278e9f7861';
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    return axios.get(newsUrl)
      .then((res) => {
        return res.data.articles
      })
  },

};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.use((req, res) => {
  const store = configureStore() // Setup store with reducers, etc
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