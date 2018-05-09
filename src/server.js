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
import { routes } from './routes';
import axios from 'axios';
import schema from './schema';


const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'static')));

const root = {
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
  pw: () => {
    // call url analyzer and feeds rollup, return both results in single call


    return axios.post("https://api.nike.com/user_navigation/url_analysis/v1", {
      "url": "http://nike.com/us/en_us/n/1j7?sl=Nike%20sweatsuit"
    })
      .then((res) => {
        if (res.data.action && res.data.action.redirectUrl) {
          //a redirect was detected
          return {
            analyzer: {
              url: res.data.source.url,
              redirectUrl: res.data.action.redirectUrl,
              pageType: res.data.source.analysis.pageType,
              countryCode: res.data.source.analysis.countryCode,
              languageTag: res.data.source.analysis.languageTag
            }
          }
        } else {
          //no redirect
          /** TODO: return an object that has the UUID info */
        }
      })
      .then((ua_res) => {
        return axios.get("https://api.nike.com/product_feed/rollup_threads/v2/?consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&count=60&searchTerms=red&anchor=60")
          .then((pw_res) => {
            const products = pw_res.data.objects.map((product) => {
              return {
                id: product.id,
                title: product.publishedContent.properties.title
              }
            });
            const newobj = Object.assign({}, ua_res, {products});
            return newobj;
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
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