import { SomeComponentConnected } from "./components/some-component"
import { SomeOtherComponentConnected } from "./components/some-other-component"
import { NewsConnected } from "./components/news";
import { PWConnected } from "./components/pw";
import { getChuckNorrisQuote, getLatestXKCDComic, getNews, getPW } from "./actions"

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
  },
  {
    path: "/pw",
    component: PWConnected,
    loadData: () => getPW()
  }
]