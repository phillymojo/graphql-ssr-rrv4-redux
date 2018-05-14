import axios from 'axios';

const queryUrl = 'http://localhost:3003/graphql';

/** General actions */
export function setIsLoading(isLoading) {
  return {
    type: 'IS_LOADING',
    isLoading
  }
}


/** Success actions */
export function getChuckSuccess(quote) {
  return {
    type: 'CHUCK_FETCH_SUCCESS',
    quote
  }
}

export function getXKCDSuccess(data) {
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

export function getPWSuccess(data) {
  return {
    type: 'PW_FETCH_SUCCESS',
    data
  }
}

export function getBitcoinSuccess(data) {
  return {
    type: 'BITCOIN_FETCH_SUCCESS',
    data
  }
}

export function getDadSuccess(data) {
  return {
    type: 'DAD_FETCH_SUCCESS',
    data
  }
}


/** Get actions */
export function getChuck() {
  return dispatch => {
    dispatch(setIsLoading(true));
    return axios.get('http://api.icndb.com/jokes/random')
      .then((response) => {
        return response.data.value.joke;
      })
      .then((quote) => {
        dispatch(getChuckSuccess(quote));
        dispatch(setIsLoading(false));
      })
  }
}

export function getXKCD() {
  return dispatch => {
    dispatch(setIsLoading(true))
    return axios.post(queryUrl, {
      query: '{ xkcd {img,num,title,alt}}'
    }).then((response) => {
      dispatch(getXKCDSuccess(response.data));
      dispatch(setIsLoading(false));
    });
  }
}

export function getNews() {
  return dispatch => {
    dispatch(setIsLoading(true))
    return axios.post(queryUrl, {
      query: '{ news { author,title,description,url,urlToImage,publishedAt } }'
    }).then((response) => {
      dispatch(getNewsSuccess(response.data));
      dispatch(setIsLoading(false));
    })
  }
}

export function getPW() {
  return dispatch => {
    dispatch(setIsLoading(true))
    return axios.post(queryUrl, {
      query: `{ 
        pw {
          analyzer {
            url,
            redirectUrl,
            pageType,
            countryCode,
            languageTag
          }
          products {
            id,
            title,
            imgurl
          }
          navlinks {
            id,
            displayText
          }
        }
      }
      `
    }).then((response) => {
      if(response.data.redirect) {
        //redirect detected
        console.log(`Redirect detected... `)
        //[TODO] how to do a redirect on the server? on client we can just do a window.location, but how do we tell if we are on the client/server at this point?
      } else {
        //no redirect; load PW
        dispatch(getPWSuccess(response.data));
      }
      dispatch(setIsLoading(false))
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
}

export function getBitcoin() {
  return dispatch => {
    dispatch(setIsLoading(true));
    return axios.post(queryUrl, {
      query: `{ 
                bitcoin { 
                  updated, 
                  usdPrice, 
                  gbpPrice, 
                  eurPrice
                } 
              }`
    })
    .then((response) => {
      dispatch(getBitcoinSuccess(response.data));
      dispatch(setIsLoading(false));      
    })
  }
}

export function getDad() {
  return dispatch => {
    dispatch(setIsLoading(true));
    return axios.post(queryUrl, {
      query: `{
        dad {
          joke,
          id
        }
      }`
    })
      .then((response) => {
        dispatch(getDadSuccess(response.data));
        dispatch(setIsLoading(false));
      })
  }
}
