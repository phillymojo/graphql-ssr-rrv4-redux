module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getChuckNorrisQuoteSuccess = getChuckNorrisQuoteSuccess;\nexports.getLatestXKCDComicSuccess = getLatestXKCDComicSuccess;\nexports.getNewsSuccess = getNewsSuccess;\nexports.getPWSuccess = getPWSuccess;\nexports.setIsLoading = setIsLoading;\nexports.getChuckNorrisQuote = getChuckNorrisQuote;\nexports.getLatestXKCDComic = getLatestXKCDComic;\nexports.getNews = getNews;\nexports.getPW = getPW;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar queryUrl = 'http://localhost:3003/graphql';\n\nfunction getChuckNorrisQuoteSuccess(quote) {\n  return {\n    type: 'QUOTE_FETCH_SUCCESS',\n    quote: quote\n  };\n}\n\nfunction getLatestXKCDComicSuccess(data) {\n  return {\n    type: 'XKCD_FETCH_SUCCESS',\n    data: data\n  };\n}\n\nfunction getNewsSuccess(data) {\n  return {\n    type: 'NEWS_FETCH_SUCCESS',\n    data: data\n  };\n}\n\nfunction getPWSuccess(data) {\n  return {\n    type: 'PW_FETCH_SUCCESS',\n    data: data\n  };\n}\n\nfunction setIsLoading(isLoading) {\n  return {\n    type: 'IS_LOADING',\n    isLoading: isLoading\n  };\n}\n\nfunction getChuckNorrisQuote() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.get('http://api.icndb.com/jokes/random').then(function (response) {\n      return response.data.value.joke;\n    }).then(function (quote) {\n      dispatch(getChuckNorrisQuoteSuccess(quote));\n      dispatch(setIsLoading(false));\n    });\n  };\n}\n\nfunction getLatestXKCDComic() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.post(queryUrl, {\n      query: '{ xkcd {img,num,title,alt}}'\n    }).then(function (response) {\n      dispatch(getLatestXKCDComicSuccess(response.data));\n      dispatch(setIsLoading(false));\n    });\n  };\n}\n\nfunction getNews() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.post(queryUrl, {\n      query: '{ news { author,title,description,url,urlToImage,publishedAt } }'\n    }).then(function (response) {\n      dispatch(getNewsSuccess(response.data));\n      dispatch(setIsLoading(false));\n    });\n  };\n}\n\nfunction getPW() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.post(queryUrl, {\n      query: '{ \\n        pw {\\n          analyzer {\\n            url,\\n            redirectUrl,\\n            pageType,\\n            countryCode,\\n            languageTag\\n          }\\n        }\\n      }\\n      '\n    }).then(function (response) {\n      dispatch(getPWSuccess(response.data));\n      dispatch(setIsLoading(false));\n    }).catch(function (err) {\n      console.log(err.response);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWN0aW9ucy5qcz8yNjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHF1ZXJ5VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENodWNrTm9ycmlzUXVvdGVTdWNjZXNzKHF1b3RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1FVT1RFX0ZFVENIX1NVQ0NFU1MnLFxuICAgIHF1b3RlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVzdFhLQ0RDb21pY1N1Y2Nlc3MoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdYS0NEX0ZFVENIX1NVQ0NFU1MnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3c1N1Y2Nlc3MoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdORVdTX0ZFVENIX1NVQ0NFU1MnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UFdTdWNjZXNzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUFdfRkVUQ0hfU1VDQ0VTUycsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxuICAgIGlzTG9hZGluZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaHVja05vcnJpc1F1b3RlKCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHNldElzTG9hZGluZyh0cnVlKSk7XG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS52YWx1ZS5qb2tlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChxdW90ZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRDaHVja05vcnJpc1F1b3RlU3VjY2VzcyhxdW90ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVzdFhLQ0RDb21pYygpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcodHJ1ZSkpXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QocXVlcnlVcmwsIHtcbiAgICAgIHF1ZXJ5OiAneyB4a2NkIHtpbWcsbnVtLHRpdGxlLGFsdH19J1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRMYXRlc3RYS0NEQ29taWNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKHNldElzTG9hZGluZyhmYWxzZSkpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdzKCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHNldElzTG9hZGluZyh0cnVlKSlcbiAgICByZXR1cm4gYXhpb3MucG9zdChxdWVyeVVybCwge1xuICAgICAgcXVlcnk6ICd7IG5ld3MgeyBhdXRob3IsdGl0bGUsZGVzY3JpcHRpb24sdXJsLHVybFRvSW1hZ2UscHVibGlzaGVkQXQgfSB9J1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXROZXdzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQVygpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcodHJ1ZSkpXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QocXVlcnlVcmwsIHtcbiAgICAgIHF1ZXJ5OiBgeyBcbiAgICAgICAgcHcge1xuICAgICAgICAgIGFuYWx5emVyIHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsLFxuICAgICAgICAgICAgcGFnZVR5cGUsXG4gICAgICAgICAgICBjb3VudHJ5Q29kZSxcbiAgICAgICAgICAgIGxhbmd1YWdlVGFnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldFBXU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcoZmFsc2UpKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICB9KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7QUFPQTtBQU9BO0FBT0E7QUFPQTtBQU9BO0FBY0E7QUFZQTtBQVlBO0FBQ0E7QUE5RUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions.js\n");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/some-path' },\n          'Chuck'\n        ),\n        '\\xA0',\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/some-other-path' },\n          'XKCD'\n        ),\n        '\\xA0',\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/news' },\n          'News'\n        ),\n        '\\xA0',\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/pw' },\n          'PW'\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component);\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzdiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8TGluayB0bz17YC9zb21lLXBhdGhgfT5DaHVjazwvTGluaz4mbmJzcDtcbiAgICAgIDxMaW5rIHRvPXtgL3NvbWUtb3RoZXItcGF0aGB9PlhLQ0Q8L0xpbms+Jm5ic3A7XG4gICAgICA8TGluayB0bz17YC9uZXdzYH0+TmV3czwvTGluaz4mbmJzcDtcbiAgICAgIDxMaW5rIHRvPXtgL3B3YH0+UFc8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTs7OztBQVZBO0FBQ0E7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.js\n");

/***/ }),

/***/ "./src/components/news.js":
/*!********************************!*\
  !*** ./src/components/news.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NewsConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar News = function (_React$Component) {\n  _inherits(News, _React$Component);\n\n  function News() {\n    _classCallCheck(this, News);\n\n    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));\n  }\n\n  _createClass(News, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement(\"br\", null),\n        this.props.isLoading ? _react2.default.createElement(\n          \"div\",\n          null,\n          \"Loading...\"\n        ) : _react2.default.createElement(\n          \"ul\",\n          null,\n          this.props.newsItems.map(function (newsItem, i) {\n            return _react2.default.createElement(\n              \"li\",\n              { key: i },\n              _react2.default.createElement(\n                \"a\",\n                { href: newsItem.url, target: \"_blank\" },\n                _react2.default.createElement(\"img\", { src: newsItem.urlToImage, width: \"100px\" }),\n                newsItem.title\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return News;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    newsItems: state.newsItems.data.news,\n    isLoading: state.isLoading\n  };\n};\n\nvar NewsConnected = exports.NewsConnected = (0, _reactRedux.connect)(mapStateToProps)(News);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZXdzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25ld3MuanM/MjRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuIFxuY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7ICh0aGlzLnByb3BzLmlzTG9hZGluZykgPyA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gOiBcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmV3c0l0ZW1zLm1hcCgobmV3c0l0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25ld3NJdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV3c0l0ZW0udXJsVG9JbWFnZX0gd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICB7bmV3c0l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4geyBcbiByZXR1cm4ge1xuICAgbmV3c0l0ZW1zOiBzdGF0ZS5uZXdzSXRlbXMuZGF0YS5uZXdzLFxuICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcbiB9XG59XG4gXG5leHBvcnQgY29uc3QgTmV3c0Nvbm5lY3RlZCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wc1xuKShOZXdzKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFYQTtBQUpBO0FBcUJBOzs7O0FBekJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/news.js\n");

/***/ }),

/***/ "./src/components/pw.js":
/*!******************************!*\
  !*** ./src/components/pw.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PWConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PW = function (_React$Component) {\n  _inherits(PW, _React$Component);\n\n  function PW() {\n    _classCallCheck(this, PW);\n\n    return _possibleConstructorReturn(this, (PW.__proto__ || Object.getPrototypeOf(PW)).apply(this, arguments));\n  }\n\n  _createClass(PW, [{\n    key: \"render\",\n    value: function render() {\n      var pw = this.props.pw;\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement(\"br\", null),\n        this.props.isLoading ? _react2.default.createElement(\n          \"div\",\n          null,\n          \"Loading...\"\n        ) : _react2.default.createElement(\n          \"div\",\n          null,\n          \"The request for \",\n          pw.url,\n          \" should redirect to \",\n          pw.redirectUrl\n        )\n      );\n    }\n  }]);\n\n  return PW;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    //  newsItems: state.newsItems.data.news,\n    pw: state.PW.data.pw,\n    isLoading: state.isLoading\n  };\n};\n\nvar PWConnected = exports.PWConnected = (0, _reactRedux.connect)(mapStateToProps)(PW);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wdy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wdy5qcz80MjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG4gXG5jbGFzcyBQVyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHB3ID0gdGhpcy5wcm9wcy5wdztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgeyAodGhpcy5wcm9wcy5pc0xvYWRpbmcpID8gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+IDogXG4gICAgICAgIDxkaXY+VGhlIHJlcXVlc3QgZm9yIHtwdy51cmx9IHNob3VsZCByZWRpcmVjdCB0byB7cHcucmVkaXJlY3RVcmx9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHsgXG4gcmV0dXJuIHtcbiAgLy8gIG5ld3NJdGVtczogc3RhdGUubmV3c0l0ZW1zLmRhdGEubmV3cyxcbiAgcHc6IHN0YXRlLlBXLmRhdGEucHcsXG4gIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXG4gfVxufVxuIFxuZXhwb3J0IGNvbnN0IFBXQ29ubmVjdGVkID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzXG4pKFBXKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVFBOzs7O0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pw.js\n");

/***/ }),

/***/ "./src/components/some-component.js":
/*!******************************************!*\
  !*** ./src/components/some-component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SomeComponentConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SomeComponent = function (_React$Component) {\n  _inherits(SomeComponent, _React$Component);\n\n  function SomeComponent() {\n    _classCallCheck(this, SomeComponent);\n\n    return _possibleConstructorReturn(this, (SomeComponent.__proto__ || Object.getPrototypeOf(SomeComponent)).apply(this, arguments));\n  }\n\n  _createClass(SomeComponent, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement(\"br\", null),\n        this.props.isLoading ? _react2.default.createElement(\n          \"span\",\n          null,\n          \"Loading...\"\n        ) : _react2.default.createElement(\n          \"span\",\n          null,\n          this.props.chuckNorrisQuote\n        )\n      );\n    }\n  }]);\n\n  return SomeComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    chuckNorrisQuote: state.chuckNorrisQuote,\n    isLoading: state.isLoading\n  };\n};\n\nvar SomeComponentConnected = exports.SomeComponentConnected = (0, _reactRedux.connect)(mapStateToProps)(SomeComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb21lLWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zb21lLWNvbXBvbmVudC5qcz83ZDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcblxuY2xhc3MgU29tZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5pc0xvYWRpbmcgPyBcbiAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6XG4gICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuY2h1Y2tOb3JyaXNRdW90ZX08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHsgXG4gcmV0dXJuIHtcbiAgIGNodWNrTm9ycmlzUXVvdGU6IHN0YXRlLmNodWNrTm9ycmlzUXVvdGUsXG4gICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xuIH1cbn1cbiBcbmV4cG9ydCBjb25zdCBTb21lQ29tcG9uZW50Q29ubmVjdGVkID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzXG4pKFNvbWVDb21wb25lbnQpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBOzs7O0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/some-component.js\n");

/***/ }),

/***/ "./src/components/some-other-component.js":
/*!************************************************!*\
  !*** ./src/components/some-other-component.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SomeOtherComponentConnected = exports.SomeOtherComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SomeOtherComponent = exports.SomeOtherComponent = function (_React$Component) {\n  _inherits(SomeOtherComponent, _React$Component);\n\n  function SomeOtherComponent() {\n    _classCallCheck(this, SomeOtherComponent);\n\n    return _possibleConstructorReturn(this, (SomeOtherComponent.__proto__ || Object.getPrototypeOf(SomeOtherComponent)).apply(this, arguments));\n  }\n\n  _createClass(SomeOtherComponent, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement('br', null),\n        !this.props.isLoading ? _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            this.props.xkcd.title,\n            '(#',\n            this.props.xkcd.num,\n            ')'\n          ),\n          _react2.default.createElement('img', { src: this.props.xkcd.img, title: this.props.xkcd.alt })\n        ) : _react2.default.createElement(\n          'div',\n          null,\n          'Loading...'\n        )\n      );\n    }\n  }]);\n\n  return SomeOtherComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    xkcd: state.XKCD.data.xkcd,\n    isLoading: state.isLoading\n  };\n};\n\nvar SomeOtherComponentConnected = exports.SomeOtherComponentConnected = (0, _reactRedux.connect)(mapStateToProps)(SomeOtherComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb21lLW90aGVyLWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zb21lLW90aGVyLWNvbXBvbmVudC5qcz84YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuIFxuZXhwb3J0IGNsYXNzIFNvbWVPdGhlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNMb2FkaW5nID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnhrY2QudGl0bGV9KCN7dGhpcy5wcm9wcy54a2NkLm51bX0pPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMueGtjZC5pbWd9IHRpdGxlPXt0aGlzLnByb3BzLnhrY2QuYWx0fSAvPlxuICAgICAgICA8L2Rpdj4gOlxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4geyBcbiAgcmV0dXJuIHtcbiAgICB4a2NkOiBzdGF0ZS5YS0NELmRhdGEueGtjZCxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xuICB9XG4gfVxuICBcbiBleHBvcnQgY29uc3QgU29tZU90aGVyQ29tcG9uZW50Q29ubmVjdGVkID0gY29ubmVjdChcbiAgIG1hcFN0YXRlVG9Qcm9wc1xuICkoU29tZU90aGVyQ29tcG9uZW50KVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQVlBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/some-other-component.js\n");

/***/ }),

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbmZpZ3VyZVN0b3JlLmpzPzllYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7QUFDQTtBQUxBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/configureStore.js\n");

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.chuckNorrisQuote = chuckNorrisQuote;\nexports.isLoading = isLoading;\nexports.XKCD = XKCD;\nexports.newsItems = newsItems;\nexports.PW = PW;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nfunction chuckNorrisQuote() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'QUOTE_FETCH_SUCCESS':\n      return action.quote.replace(/&quot;/g, '\"');\n    default:\n      return state;\n  }\n}\n\nfunction isLoading() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'IS_LOADING':\n      return action.isLoading;\n    default:\n      return state;\n  }\n}\n\nfunction XKCD() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: { xkcd: [] } };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'XKCD_FETCH_SUCCESS':\n      return action.data;\n    default:\n      return state;\n  }\n}\n\nfunction newsItems() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: { news: [] } };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'NEWS_FETCH_SUCCESS':\n      return action.data;\n    default:\n      return state;\n  }\n}\n\nfunction PW() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: { pw: { source: {}, action: {} } } };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'PW_FETCH_SUCCESS':\n      return action.data;\n    default:\n      return state;\n  }\n}\n\nexports.default = (0, _redux.combineReducers)({\n  chuckNorrisQuote: chuckNorrisQuote,\n  isLoading: isLoading,\n  XKCD: XKCD,\n  newsItems: newsItems,\n  PW: PW\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzLmpzP2ExNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2h1Y2tOb3JyaXNRdW90ZShzdGF0ZT1bXSwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1FVT1RFX0ZFVENIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIGFjdGlvbi5xdW90ZS5yZXBsYWNlKC8mcXVvdDsvZywnXCInKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRpbmcoc3RhdGU9ZmFsc2UsIGFjdGlvbikge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJU19MT0FESU5HJzpcbiAgICAgIHJldHVybiBhY3Rpb24uaXNMb2FkaW5nXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWEtDRChzdGF0ZT17IGRhdGE6IHsgeGtjZDogW10gfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnWEtDRF9GRVRDSF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld3NJdGVtcyhzdGF0ZT17IGRhdGE6IHsgbmV3czogW10gfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTkVXU19GRVRDSF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQVyhzdGF0ZT17IGRhdGE6IHsgcHc6IHsgc291cmNlOiB7fSwgYWN0aW9uOiB7fX0gfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUFdfRkVUQ0hfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBjaHVja05vcnJpc1F1b3RlLFxuICBpc0xvYWRpbmcsXG4gIFhLQ0QsXG4gIG5ld3NJdGVtcyxcbiAgUFdcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQVNBO0FBU0E7QUFTQTtBQVNBO0FBQ0E7QUF2Q0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers.js\n");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.routes = undefined;\n\nvar _someComponent = __webpack_require__(/*! ./components/some-component */ \"./src/components/some-component.js\");\n\nvar _someOtherComponent = __webpack_require__(/*! ./components/some-other-component */ \"./src/components/some-other-component.js\");\n\nvar _news = __webpack_require__(/*! ./components/news */ \"./src/components/news.js\");\n\nvar _pw = __webpack_require__(/*! ./components/pw */ \"./src/components/pw.js\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\nvar routes = exports.routes = [{\n  path: \"/some-path\",\n  component: _someComponent.SomeComponentConnected,\n  loadData: function loadData() {\n    return (0, _actions.getChuckNorrisQuote)();\n  }\n}, {\n  path: \"/some-other-path\",\n  component: _someOtherComponent.SomeOtherComponentConnected,\n  loadData: function loadData() {\n    return (0, _actions.getLatestXKCDComic)();\n  }\n}, {\n  path: \"/news\",\n  component: _news.NewsConnected,\n  loadData: function loadData() {\n    return (0, _actions.getNews)();\n  }\n}, {\n  path: \"/pw\",\n  component: _pw.PWConnected,\n  loadData: function loadData() {\n    return (0, _actions.getPW)();\n  }\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yb3V0ZXMuanM/MmRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb21lQ29tcG9uZW50Q29ubmVjdGVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zb21lLWNvbXBvbmVudFwiXG5pbXBvcnQgeyBTb21lT3RoZXJDb21wb25lbnRDb25uZWN0ZWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NvbWUtb3RoZXItY29tcG9uZW50XCJcbmltcG9ydCB7IE5ld3NDb25uZWN0ZWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL25ld3NcIjtcbmltcG9ydCB7IFBXQ29ubmVjdGVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wd1wiO1xuaW1wb3J0IHsgZ2V0Q2h1Y2tOb3JyaXNRdW90ZSwgZ2V0TGF0ZXN0WEtDRENvbWljLCBnZXROZXdzLCBnZXRQVyB9IGZyb20gXCIuL2FjdGlvbnNcIlxuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvc29tZS1wYXRoXCIsXG4gICAgY29tcG9uZW50OiBTb21lQ29tcG9uZW50Q29ubmVjdGVkLFxuICAgIGxvYWREYXRhOiAoKSA9PiBnZXRDaHVja05vcnJpc1F1b3RlKClcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3NvbWUtb3RoZXItcGF0aFwiLFxuICAgIGNvbXBvbmVudDogU29tZU90aGVyQ29tcG9uZW50Q29ubmVjdGVkLFxuICAgIGxvYWREYXRhOiAoKSA9PiBnZXRMYXRlc3RYS0NEQ29taWMoKVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbmV3c1wiLFxuICAgIGNvbXBvbmVudDogTmV3c0Nvbm5lY3RlZCxcbiAgICBsb2FkRGF0YTogKCkgPT4gZ2V0TmV3cygpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9wd1wiLFxuICAgIGNvbXBvbmVudDogUFdDb25uZWN0ZWQsXG4gICAgbG9hZERhdGE6ICgpID0+IGdldFBXKClcbiAgfVxuXSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes.js\n");

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar schema = (0, _graphql.buildSchema)('\\n  type Query {\\n    xkcd: XKCD!,\\n    news: [newsItem!]!,\\n    pw: PW\\n  }\\n  type XKCD {\\n    img: String!,\\n    num: Int!,\\n    title: String!,\\n    alt: String!\\n  },\\n  type newsItem {\\n    author: String,\\n    title: String,\\n    description: String,\\n    url: String,\\n    urlToImage: String,\\n    publishedAt: String\\n  },\\n  type PW {\\n    urlanalyzer: URLAnalyzer,\\n    products: [product!],\\n    nav: Nav,\\n  }\\n  type URLAnalyzer {\\n    url: String,\\n    redirectUrl: String,\\n    pageType: String,\\n    countryCode: String,\\n    languageTag: String\\n  },\\n  type product {\\n    id: Int!,\\n    title: String!\\n  },\\n  type Nav {\\n    navlinks: [navlink!]\\n  },\\n  type navlink {\\n    id: Int!,\\n    url: String!,\\n  }\\n');\n\nexports.default = schema;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zY2hlbWEuanM/ZGUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuXG5jb25zdCBzY2hlbWEgPSBidWlsZFNjaGVtYShgXG4gIHR5cGUgUXVlcnkge1xuICAgIHhrY2Q6IFhLQ0QhLFxuICAgIG5ld3M6IFtuZXdzSXRlbSFdISxcbiAgICBwdzogUFdcbiAgfVxuICB0eXBlIFhLQ0Qge1xuICAgIGltZzogU3RyaW5nISxcbiAgICBudW06IEludCEsXG4gICAgdGl0bGU6IFN0cmluZyEsXG4gICAgYWx0OiBTdHJpbmchXG4gIH0sXG4gIHR5cGUgbmV3c0l0ZW0ge1xuICAgIGF1dGhvcjogU3RyaW5nLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB1cmw6IFN0cmluZyxcbiAgICB1cmxUb0ltYWdlOiBTdHJpbmcsXG4gICAgcHVibGlzaGVkQXQ6IFN0cmluZ1xuICB9LFxuICB0eXBlIFBXIHtcbiAgICB1cmxhbmFseXplcjogVVJMQW5hbHl6ZXIsXG4gICAgcHJvZHVjdHM6IFtwcm9kdWN0IV0sXG4gICAgbmF2OiBOYXYsXG4gIH1cbiAgdHlwZSBVUkxBbmFseXplciB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcmVkaXJlY3RVcmw6IFN0cmluZyxcbiAgICBwYWdlVHlwZTogU3RyaW5nLFxuICAgIGNvdW50cnlDb2RlOiBTdHJpbmcsXG4gICAgbGFuZ3VhZ2VUYWc6IFN0cmluZ1xuICB9LFxuICB0eXBlIHByb2R1Y3Qge1xuICAgIGlkOiBJbnQhLFxuICAgIHRpdGxlOiBTdHJpbmchXG4gIH0sXG4gIHR5cGUgTmF2IHtcbiAgICBuYXZsaW5rczogW25hdmxpbmshXVxuICB9LFxuICB0eXBlIG5hdmxpbmsge1xuICAgIGlkOiBJbnQhLFxuICAgIHVybDogU3RyaW5nISxcbiAgfVxuYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/schema.js\n");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _configureStore = __webpack_require__(/*! ./configureStore */ \"./src/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressGraphql = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _schema = __webpack_require__(/*! ./schema */ \"./src/schema.js\");\n\nvar _schema2 = _interopRequireDefault(_schema);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar server = _http2.default.createServer(app);\n\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\nvar root = {\n  xkcd: function xkcd() {\n    var num = Math.floor(Math.random() * 1988) + 1;\n    return _axios2.default.get('https://xkcd.com/' + num + '/info.0.json').then(function (response) {\n      return response.data;\n    });\n  },\n  news: function news() {\n    var apiKey = 'c79820853d9c4793b5dc93278e9f7861';\n    var newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;\n\n    return _axios2.default.get(newsUrl).then(function (res) {\n      return res.data.articles;\n    });\n  },\n  pw: function pw() {\n    // call url analyzer and feeds rollup, return both results in single call\n\n\n    return _axios2.default.post(\"https://api.nike.com/user_navigation/url_analysis/v1\", {\n      \"url\": \"http://nike.com/us/en_us/n/1j7?sl=Nike%20sweatsuit\"\n    }).then(function (res) {\n      if (res.data.action && res.data.action.redirectUrl) {\n        //a redirect was detected\n        return {\n          analyzer: {\n            url: res.data.source.url,\n            redirectUrl: res.data.action.redirectUrl,\n            pageType: res.data.source.analysis.pageType,\n            countryCode: res.data.source.analysis.countryCode,\n            languageTag: res.data.source.analysis.languageTag\n          }\n        };\n      } else {\n        //no redirect\n        /** TODO: return an object that has the UUID info */\n      }\n    }).then(function (ua_res) {\n      return _axios2.default.get(\"https://api.nike.com/product_feed/rollup_threads/v2/?consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=marketplace(US)&filter=language(en)&filter=employeePrice(true)&count=60&searchTerms=red&anchor=60\").then(function (pw_res) {\n        var newobj = Object.assign({}, ua_res, { products: pw_res.data.objects });\n        console.log(newobj);\n        return newobj;\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n};\n\napp.use('/graphql', (0, _expressGraphql2.default)({\n  schema: _schema2.default,\n  rootValue: root,\n  graphiql: true\n}));\n\napp.use(function (req, res) {\n  var store = (0, _configureStore2.default)(); // Setup store with reducers, etc\n  var context = {};\n  var url = req.url;\n\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_routes.routes, url).map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n\n    if (route.loadData) return store.dispatch(route.loadData(match));\n  });\n\n  Promise.all(promises).then(function () {\n    var content = _server2.default.renderToString(_react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(\n        _reactRouter.StaticRouter,\n        { location: url, context: context },\n        (0, _reactRouterConfig.renderRoutes)(_routes.routes)\n      )\n    ));\n\n    var serializedState = JSON.stringify(store.getState());\n\n    // Write the response back to the client\n    res.send('\\n    <html>\\n      <body style=\"background:light blue\" >\\n        <div id=\"app\">' + content + '</div>\\n        <script>\\n          window.__PRELOADED_STATE__ = ' + serializedState + '\\n        </script>\\n        <script src=\"/js/bundle.js\"></script>\\n      </body> \\n    </html>\\n  ');\n  });\n});\n\nserver.listen(3003);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2ZXIuanM/OGZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiXG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIlxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzLCBtYXRjaFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuaW1wb3J0IGdyYXBocWxIVFRQIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApXG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3N0YXRpYycpKSk7XG5cbmNvbnN0IHJvb3QgPSB7XG4gIHhrY2Q6ICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxOTg4KSArIDE7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly94a2NkLmNvbS8ke251bX0vaW5mby4wLmpzb25gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICBuZXdzOiAoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gJ2M3OTgyMDg1M2Q5YzQ3OTNiNWRjOTMyNzhlOWY3ODYxJztcbiAgICBjb25zdCBuZXdzVXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PXVzJmFwaUtleT0ke2FwaUtleX1gO1xuXG4gICAgcmV0dXJuIGF4aW9zLmdldChuZXdzVXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEuYXJ0aWNsZXNcbiAgICAgIH0pXG4gIH0sXG4gIHB3OiAoKSA9PiB7XG4gICAgLy8gY2FsbCB1cmwgYW5hbHl6ZXIgYW5kIGZlZWRzIHJvbGx1cCwgcmV0dXJuIGJvdGggcmVzdWx0cyBpbiBzaW5nbGUgY2FsbFxuXG5cbiAgICByZXR1cm4gYXhpb3MucG9zdChcImh0dHBzOi8vYXBpLm5pa2UuY29tL3VzZXJfbmF2aWdhdGlvbi91cmxfYW5hbHlzaXMvdjFcIiwge1xuICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbmlrZS5jb20vdXMvZW5fdXMvbi8xajc/c2w9TmlrZSUyMHN3ZWF0c3VpdFwiXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFjdGlvbiAmJiByZXMuZGF0YS5hY3Rpb24ucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAvL2EgcmVkaXJlY3Qgd2FzIGRldGVjdGVkXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuYWx5emVyOiB7XG4gICAgICAgICAgICAgIHVybDogcmVzLmRhdGEuc291cmNlLnVybCxcbiAgICAgICAgICAgICAgcmVkaXJlY3RVcmw6IHJlcy5kYXRhLmFjdGlvbi5yZWRpcmVjdFVybCxcbiAgICAgICAgICAgICAgcGFnZVR5cGU6IHJlcy5kYXRhLnNvdXJjZS5hbmFseXNpcy5wYWdlVHlwZSxcbiAgICAgICAgICAgICAgY291bnRyeUNvZGU6IHJlcy5kYXRhLnNvdXJjZS5hbmFseXNpcy5jb3VudHJ5Q29kZSxcbiAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IHJlcy5kYXRhLnNvdXJjZS5hbmFseXNpcy5sYW5ndWFnZVRhZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL25vIHJlZGlyZWN0XG4gICAgICAgICAgLyoqIFRPRE86IHJldHVybiBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIFVVSUQgaW5mbyAqL1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHVhX3JlcykgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkubmlrZS5jb20vcHJvZHVjdF9mZWVkL3JvbGx1cF90aHJlYWRzL3YyLz9jb25zdW1lckNoYW5uZWxJZD1kOWE1YmM0Mi00YjljLTQ5NzYtODU4YS1mMTU5Y2Y5OWM2NDcmZmlsdGVyPWNoYW5uZWxJZChkOWE1YmM0Mi00YjljLTQ5NzYtODU4YS1mMTU5Y2Y5OWM2NDcpJmZpbHRlcj1tYXJrZXRwbGFjZShVUykmZmlsdGVyPWxhbmd1YWdlKGVuKSZmaWx0ZXI9ZW1wbG95ZWVQcmljZSh0cnVlKSZjb3VudD02MCZzZWFyY2hUZXJtcz1yZWQmYW5jaG9yPTYwXCIpXG4gICAgICAgICAgLnRoZW4oKHB3X3JlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3b2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdWFfcmVzLCB7cHJvZHVjdHM6IHB3X3Jlcy5kYXRhLm9iamVjdHN9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld29iaik7XG4gICAgICAgICAgICByZXR1cm4gbmV3b2JqO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH0pXG4gIH1cbn07XG5cbmFwcC51c2UoJy9ncmFwaHFsJywgZ3JhcGhxbEhUVFAoe1xuICBzY2hlbWEsXG4gIHJvb3RWYWx1ZTogcm9vdCxcbiAgZ3JhcGhpcWw6IHRydWVcbn0pKTtcblxuYXBwLnVzZSgocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpIC8vIFNldHVwIHN0b3JlIHdpdGggcmVkdWNlcnMsIGV0Y1xuICBjb25zdCBjb250ZXh0ID0ge307XG4gIGNvbnN0IHsgdXJsIH0gPSByZXE7XG5cbiAgY29uc3QgcHJvbWlzZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXMsIHVybCkubWFwKCh7IHJvdXRlLCBtYXRjaCB9KSA9PiB7XG4gICAgaWYgKHJvdXRlLmxvYWREYXRhKSByZXR1cm4gc3RvcmUuZGlzcGF0Y2gocm91dGUubG9hZERhdGEobWF0Y2gpKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXt1cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgIHtyZW5kZXJSb3V0ZXMocm91dGVzKX1cbiAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcblxuICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpXG5cbiAgICAvLyBXcml0ZSB0aGUgcmVzcG9uc2UgYmFjayB0byB0aGUgY2xpZW50XG4gICAgcmVzLnNlbmQoYFxuICAgIDxodG1sPlxuICAgICAgPGJvZHkgc3R5bGU9XCJiYWNrZ3JvdW5kOmxpZ2h0IGJsdWVcIiA+XG4gICAgICAgIDxkaXYgaWQ9XCJhcHBcIj4ke2NvbnRlbnR9PC9kaXY+XG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAke3NlcmlhbGl6ZWRTdGF0ZX1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9ib2R5PiBcbiAgICA8L2h0bWw+XG4gIGApXG4gIH0pXG5cbn0pXG5cblxuXG5zZXJ2ZXIubGlzdGVuKDMwMDMpOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdkRBO0FBQ0E7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1ncmFwaHFsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1ncmFwaHFsXCI/MDQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWdyYXBocWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express-graphql\n");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWxcIj8zMTE0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///graphql\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCI/YTM3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router\n");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWNvbmZpZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIj81MzRhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-config\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });