const schema = `
  type Query {
    xkcd: XKCD!,
    news: [newsItem!]!,
    pw: PW,
    bitcoin: Bitcoin,
    dad: DadJoke,
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
    navlinks: [navlink!],
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
    title: String!,
    imgurl: String
  },
  type navlink {
    id: String!,
    displayText: String,
  },
  type Bitcoin {
    updated: String,
    usdPrice: String,
    gbpPrice: String,
    eurPrice: String,
  },
  type DadJoke {
    joke: String!,
    id: String
  }
`;

export default schema;