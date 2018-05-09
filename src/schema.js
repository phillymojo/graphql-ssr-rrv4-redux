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
    analyzer: URLAnalyzer,
    products: [product!],
  }
  type URLAnalyzer {
    url: String,
    redirectUrl: String,
    pageType: String,
    countryCode: String,
    languageTag: String
  },
  type product {
    id: String!,
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