import { SomeComponentConnected } from "./components/some-component"
import { SomeOtherComponentConnected } from "./components/some-other-component"
import { NewsConnected } from "./components/news";
import { getChuckNorrisQuote, getLatestXKCDComic, getNews } from "./actions"

export const routes = [
  {
    path: "/some-path",
    component: SomeComponentConnected,
    loadData: () => getChuckNorrisQuote()
  },
  {
    path: "/some-other-path",
    component: SomeOtherComponentConnected,
    loadData: () => getLatestXKCDComic()
  },
  {
    path: "/news",
    component: NewsConnected,
    loadData: () => getNews()
  }
]