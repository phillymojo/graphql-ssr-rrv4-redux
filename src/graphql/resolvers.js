import axios from 'axios';

const resolvers = {
  Query: {
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
      /** Call the URL Analyzer - this will determine if we have a redirect, and will return immediately.
       * Otherwise, call the other endpoints and return the entire data package.
       */

      // const requested_url = "http://nike.com/us/en_us/n/1j7?sl=Nike%20sweatsuit";
      const requested_url = "http://nike.com/us/en_us/n/1j7?sl=red%20shoes";

      return axios.post("https://api.nike.com/user_navigation/url_analysis/v1", {
        "url": requested_url,
      })
        .then((res) => {
          if (res.data.action && res.data.action.redirectUrl) {
            //a redirect was detected; return immediately with the info for the redirect
            return {
              redirect: {
                url: res.data.source.url,
                redirectUrl: res.data.action.redirectUrl,
                pageType: res.data.source.analysis.pageType,
                countryCode: res.data.source.analysis.countryCode,
                languageTag: res.data.source.analysis.languageTag
              }
            }
          } else {
            //no redirect; call the Feeds/Facets/CMS endpoints with data returned from the URLAnalyzer request -> [TODO]
            let promises = [
              /** FEEDS_ROLLUP */
              axios.get("https://api.nike.com/product_feed/rollup_threads/v2/?consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&count=60&searchTerms=red&anchor=60")
                .then((feeds_res) => {
                  const products = feeds_res.data.objects.map((product) => {
                    return {
                      id: product.id,
                      title: product.publishedContent.properties.title,
                      imgurl: product.publishedContent.properties.productCard.properties.squarishURL
                    }
                  });
                  return { products };
                })
                .catch((err) => {
                  console.log("Error from Feeds request: ", err.data)
                }),
              /** FACET_NAV */
              axios.post("https://experience.prod.commerce.nikecloud.com/recommend/navigations/v1/product_feed/threads/v2", {
                "channelId": "d9a5bc42-4b9c-4976-858a-f159cf99c647",
                "language": "en",
                "marketplace": "US",
                "attributeIds": []
              })
                .then((facet_res) => {
                  const navlinks = facet_res.data.filters.map((filter) => {
                    return {
                      id: filter.attributeId,
                      displayText: filter.displayText
                    }
                  });
                  return { navlinks };
                })
                .catch((err) => {
                  console.log('Error from Facet Nav request: ', err.data)
                })
            ]

            return Promise.all(promises)
              .then((values) => {
                // convert the array to an object of the data returned from all the promises
                const obj = values.reduce((acc, cv) => {
                  return Object.assign({}, acc, cv);
                }, {})
                return obj;
              })
              .catch((err) => { console.log("Promise all error: ", err.data) })

          }
        })
        .catch((err) => { console.log(`Error from URLAnalyzer: ${err.data}`) });
    },
    bitcoin: () => {
      return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => {
          return { updated: res.data.time.updated, usdPrice: res.data.bpi.USD.rate, gbpPrice: res.data.bpi.GBP.rate, eurPrice: res.data.bpi.EUR.rate }
        })
    },
    dad: () => {
      return axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      })
        .then((res) => {
          return { joke: res.data.joke, id: res.data.id }
        })
    }
  }
};

export default resolvers;