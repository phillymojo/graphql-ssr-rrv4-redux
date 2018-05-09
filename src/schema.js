import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    xkcd: XKCD!,
    news: [newsItem!]!,
    pw: PW
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
  },
  type PW {
    urlanalyzer: URLAnalyzer,
    products: [product!],
    nav: Nav,
  }
  type URLAnalyzer {
    url: String,
    redirectUrl: String,
    pageType: String,
    countryCode: String,
    languageTag: String
  },
  type product {
    id: Int!,
    title: String!
  },
  type Nav {
    navlinks: [navlink!]
  },
  type navlink {
    id: Int!,
    url: String!,
  }
`);

export default schema;