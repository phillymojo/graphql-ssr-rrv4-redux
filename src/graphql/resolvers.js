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
      /** Call the URL Analyzer - this will determine if we have a redirect, and will return immediately with a 302.
       * Otherwise, call the other endpoints and return the entire data package.
       */
      return axios.post("https://api.nike.com/user_navigation/url_analysis/v1", {
        "url": "http://nike.com/us/en_us/n/1j7?sl=Nike%20sweatsuit"
      })
        .then((res) => {
          if (res.data.action && res.data.action.redirectUrl) {
            //a redirect was detected
            //this would return a 302 and bypass the additional calls to Feeds/Facets/CMS.
            //but in this POC, I want to return everything regardless of redirect or not
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
            /** TODO: return an object that has the necessary info to call Feeds/Facets/CMS 
             * In this implementation, I am chaining then's to get the next calls.
             * Really, it should be doing a Promise.all so that we can call the enpoints asynchronously. */
          }
        })
        .then((prev_res) => {
          return axios.get("https://api.nike.com/product_feed/rollup_threads/v2/?consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&count=60&searchTerms=red&anchor=60")
            .then((feeds_res) => {
              const products = feeds_res.data.objects.map((product) => {
                return {
                  id: product.id,
                  title: product.publishedContent.properties.title,
                  imgurl: product.publishedContent.properties.productCard.properties.squarishURL
                }
              });
              const newobj = Object.assign({}, prev_res, { products });
              return newobj;
            })
            .catch((err) => {
              console.log("Error from Feeds request: ", err.data)
            })
        })
        .then((prev_res) => {
          return axios.post("https://experience.prod.commerce.nikecloud.com/recommend/navigations/v1/product_feed/threads/v2", {
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
              const newobj = Object.assign({}, prev_res, { navlinks });
              return newobj;
            })
            .catch((err) => {
              console.log('Error from Facet Nav request: ', err.data)
            })
        })
        .catch((err) => {
          console.log("Error from URLAnalyzer request: ", err.data)
        })
    }
  }
};

export default resolvers;