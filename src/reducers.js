import { combineReducers } from 'redux';

export function chuckNorrisQuote(state=[], action) {
  switch(action.type) {
    case 'QUOTE_FETCH_SUCCESS':
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

export function XKCD(state=[], action) {
  switch(action.type) {
    case 'XKCD_FETCH_SUCCESS':
      return action.data
    default:
      return state;
  }
}

export function newsItems(state=[], action) {
  switch(action.type) {
    case 'NEWS_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  chuckNorrisQuote,
  isLoading,
  XKCD,
  newsItems
});