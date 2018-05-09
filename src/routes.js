import { ChuckConnected } from "./components/chuck"
import { XKCDConnected } from "./components/xkcd"
import { NewsConnected } from "./components/news";
import { PWConnected } from "./components/pw";
import { getChuck, getXKCD, getNews, getPW } from "./state/actions"

export const routes = [
  {
    path: "/chuck",
    component: ChuckConnected,
    loadData: () => getChuck()
  },
  {
    path: "/xkcd",
    component: XKCDConnected,
    loadData: () => getXKCD()
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