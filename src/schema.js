import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    xkcd: XKCD!,
    news: [newsItem!]!,
    pw: URLAnalyzer
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
    products: [product!]!,
    nav: [navlink!]!
  },
  type URLAnalyzer {
    source: URLAnalyzer_source,
    action: URLAnalyzer_action,
    resourceType: String,
    resourceVersion: String
  },
  type URLAnalyzer_source {
    url: String,
    analysis: URLAnalyzer_source_analysis
  }
  type URLAnalyzer_source_analysis {
    pageType: String,
    countryCode: String,
    languageTag: String,
    query: String
  }
  type URLAnalyzer_action {
    statusCode: Int,
    redirectUrl: String
  }
  type product {
    id: Int!,
    title: String!
  },
  type navlink {
    id: Int!,
    url: String!,
  }
`);

export default schema;