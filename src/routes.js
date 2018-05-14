import { ChuckConnected } from "./components/chuck"
import { XKCDConnected } from "./components/xkcd"
import { NewsConnected } from "./components/news";
import { PWConnected } from "./components/pw";
import { BitcoinConnected } from "./components/bitcoin";
import { getChuck, getXKCD, getNews, getPW, getBitcoin } from "./state/actions"

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
  },
  {
    path: "/bitcoin",
    component: BitcoinConnected,
    loadData: () => getBitcoin()
  }
]