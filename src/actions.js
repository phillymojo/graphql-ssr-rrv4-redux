import axios from 'axios';

const queryUrl = 'http://localhost:3003/graphql';

export function getChuckNorrisQuoteSuccess(quote) {
  return {
    type: 'QUOTE_FETCH_SUCCESS',
    quote
  }
}

export function getLatestXKCDComicSuccess(data) {
  return {
    type: 'XKCD_FETCH_SUCCESS',
    data
  }
}

export function getNewsSuccess(data) {
  return {
    type: 'NEWS_FETCH_SUCCESS',
    data
  }
}

export function setIsLoading(isLoading) {
  return {
    type: 'IS_LOADING',
    isLoading
  }
}

export function getChuckNorrisQuote() {
  return dispatch => {
    dispatch(setIsLoading(true));
    return axios.get('http://api.icndb.com/jokes/random')
      .then((response) => {
        return response.data.value.joke;
      })
      .then((quote) => {
        dispatch(getChuckNorrisQuoteSuccess(quote));
        dispatch(setIsLoading(false));
      })
  }
}

export function getLatestXKCDComic() {
  return dispatch => {
    dispatch(setIsLoading(true))
    return axios.post(queryUrl, {
      query: '{ xkcd {img,num,title,alt}}'
    }).then((response) => {
      dispatch(getLatestXKCDComicSuccess(response.data));
      dispatch(setIsLoading(false));
    });
  }
}

export function getNews() {
  return dispatch => {
    return axios.post(queryUrl, {
      query: '{ news { author,title,description,url,urlToImage,publishedAt } }'
    }).then((response) => {
      dispatch(getNewsSuccess(response.data));
    })
  }
}
