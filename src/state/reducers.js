import { combineReducers } from 'redux';

export function chuckNorrisQuote(state=[], action) {
  switch(action.type) {
    case 'CHUCK_FETCH_SUCCESS':
      return action.quote.replace(/&quot;/g,'"');
    default:
      return state;
  }
}

export function isLoading(state=false, action) {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state;
  }
}

export function XKCD(state={ data: { xkcd: [] } }, action) {
  switch(action.type) {
    case 'XKCD_FETCH_SUCCESS':
      return action.data
    default:
      return state;
  }
}

export function newsItems(state={ data: { news: [] } }, action) {
  switch(action.type) {
    case 'NEWS_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export function PW(state={ data: { pw: { products: [], navlinks: [] } } }, action) {
  switch(action.type) {
    case 'PW_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export function bitcoin(state={ data: { bitcoin : {} } }, action) {
  switch(action.type) {
    case 'BITCOIN_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export function dad(state={ data: { dad: {} } }, action) {
  switch(action.type) {
    case 'DAD_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  chuckNorrisQuote,
  isLoading,
  XKCD,
  newsItems,
  PW,
  bitcoin,
  dad
});