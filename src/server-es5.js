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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getChuckNorrisQuoteSuccess = getChuckNorrisQuoteSuccess;\nexports.getLatestXKCDComicSuccess = getLatestXKCDComicSuccess;\nexports.getNewsSuccess = getNewsSuccess;\nexports.setIsLoading = setIsLoading;\nexports.getChuckNorrisQuote = getChuckNorrisQuote;\nexports.getLatestXKCDComic = getLatestXKCDComic;\nexports.getNews = getNews;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar queryUrl = 'http://localhost:3003/graphql';\n\nfunction getChuckNorrisQuoteSuccess(quote) {\n  return {\n    type: 'QUOTE_FETCH_SUCCESS',\n    quote: quote\n  };\n}\n\nfunction getLatestXKCDComicSuccess(data) {\n  return {\n    type: 'XKCD_FETCH_SUCCESS',\n    data: data\n  };\n}\n\nfunction getNewsSuccess(data) {\n  return {\n    type: 'NEWS_FETCH_SUCCESS',\n    data: data\n  };\n}\n\nfunction setIsLoading(isLoading) {\n  return {\n    type: 'IS_LOADING',\n    isLoading: isLoading\n  };\n}\n\nfunction getChuckNorrisQuote() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.get('http://api.icndb.com/jokes/random').then(function (response) {\n      return response.data.value.joke;\n    }).then(function (quote) {\n      dispatch(getChuckNorrisQuoteSuccess(quote));\n      dispatch(setIsLoading(false));\n    });\n  };\n}\n\nfunction getLatestXKCDComic() {\n  return function (dispatch) {\n    dispatch(setIsLoading(true));\n    return _axios2.default.post(queryUrl, {\n      query: '{ xkcd {img,num,title,alt}}'\n    }).then(function (response) {\n      dispatch(getLatestXKCDComicSuccess(response.data));\n      dispatch(setIsLoading(false));\n    });\n  };\n}\n\nfunction getNews() {\n  return function (dispatch) {\n    return _axios2.default.post(queryUrl, {\n      query: '{ news { author,title,description,url,urlToImage,publishedAt } }'\n    }).then(function (response) {\n      dispatch(getNewsSuccess(response.data));\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWN0aW9ucy5qcz8yNjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHF1ZXJ5VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENodWNrTm9ycmlzUXVvdGVTdWNjZXNzKHF1b3RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1FVT1RFX0ZFVENIX1NVQ0NFU1MnLFxuICAgIHF1b3RlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVzdFhLQ0RDb21pY1N1Y2Nlc3MoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdYS0NEX0ZFVENIX1NVQ0NFU1MnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3c1N1Y2Nlc3MoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdORVdTX0ZFVENIX1NVQ0NFU1MnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SXNMb2FkaW5nKGlzTG9hZGluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJU19MT0FESU5HJyxcbiAgICBpc0xvYWRpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2h1Y2tOb3JyaXNRdW90ZSgpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcodHJ1ZSkpO1xuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbScpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudmFsdWUuam9rZTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocXVvdGUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Q2h1Y2tOb3JyaXNRdW90ZVN1Y2Nlc3MocXVvdGUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRlc3RYS0NEQ29taWMoKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goc2V0SXNMb2FkaW5nKHRydWUpKVxuICAgIHJldHVybiBheGlvcy5wb3N0KHF1ZXJ5VXJsLCB7XG4gICAgICBxdWVyeTogJ3sgeGtjZCB7aW1nLG51bSx0aXRsZSxhbHR9fSdcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0TGF0ZXN0WEtDRENvbWljU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaChzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3cygpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4gYXhpb3MucG9zdChxdWVyeVVybCwge1xuICAgICAgcXVlcnk6ICd7IG5ld3MgeyBhdXRob3IsdGl0bGUsZGVzY3JpcHRpb24sdXJsLHVybFRvSW1hZ2UscHVibGlzaGVkQXQgfSB9J1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXROZXdzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgfSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBT0E7QUFPQTtBQU9BO0FBT0E7QUFjQTtBQVlBO0FBQ0E7QUEzREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions.js\n");

/***/ }),

/***/ "./src/components/news.js":
/*!********************************!*\
  !*** ./src/components/news.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NewsConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar News = function (_React$Component) {\n  _inherits(News, _React$Component);\n\n  function News() {\n    _classCallCheck(this, News);\n\n    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));\n  }\n\n  _createClass(News, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"News\",\n        _react2.default.createElement(\"br\", null),\n        _react2.default.createElement(\n          \"ul\",\n          null,\n          this.props.newsItems.map(function (newsItem, i) {\n            return _react2.default.createElement(\n              \"li\",\n              { key: i },\n              _react2.default.createElement(\n                \"a\",\n                { href: newsItem.url, target: \"_blank\" },\n                _react2.default.createElement(\"img\", { src: newsItem.urlToImage, width: \"100px\" }),\n                newsItem.title\n              )\n            );\n          })\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/some-other-path\" },\n          \"More\"\n        )\n      );\n    }\n  }]);\n\n  return News;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    newsItems: state.newsItems.data.news,\n    isLoading: state.isLoading\n  };\n};\n\nvar NewsConnected = exports.NewsConnected = (0, _reactRedux.connect)(mapStateToProps)(News);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZXdzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25ld3MuanM/MjRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuIFxuY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBOZXdzPGJyIC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5ld3NJdGVtcy5tYXAoKG5ld3NJdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtuZXdzSXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25ld3NJdGVtLnVybFRvSW1hZ2V9IHdpZHRoPVwiMTAwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAge25ld3NJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDxMaW5rIHRvPXtgL3NvbWUtb3RoZXItcGF0aGB9Pk1vcmU8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7IFxuIHJldHVybiB7XG4gICBuZXdzSXRlbXM6IHN0YXRlLm5ld3NJdGVtcy5kYXRhLm5ld3MsXG4gICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xuIH1cbn1cbiBcbmV4cG9ydCBjb25zdCBOZXdzQ29ubmVjdGVkID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzXG4pKE5ld3MpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBWEE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBbUJBOzs7O0FBdkJBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/news.js\n");

/***/ }),

/***/ "./src/components/some-component.js":
/*!******************************************!*\
  !*** ./src/components/some-component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SomeComponentConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SomeComponent = function (_React$Component) {\n  _inherits(SomeComponent, _React$Component);\n\n  function SomeComponent() {\n    _classCallCheck(this, SomeComponent);\n\n    return _possibleConstructorReturn(this, (SomeComponent.__proto__ || Object.getPrototypeOf(SomeComponent)).apply(this, arguments));\n  }\n\n  _createClass(SomeComponent, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"Some Component\",\n        _react2.default.createElement(\"br\", null),\n        this.props.isLoading ? _react2.default.createElement(\n          \"span\",\n          null,\n          \"Loading...\"\n        ) : _react2.default.createElement(\n          \"span\",\n          null,\n          this.props.chuckNorrisQuote\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/some-other-path\" },\n          \"More\"\n        )\n      );\n    }\n  }]);\n\n  return SomeComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    chuckNorrisQuote: state.chuckNorrisQuote,\n    isLoading: state.isLoading\n  };\n};\n\nvar SomeComponentConnected = exports.SomeComponentConnected = (0, _reactRedux.connect)(mapStateToProps)(SomeComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb21lLWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zb21lLWNvbXBvbmVudC5qcz83ZDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG4gXG5jbGFzcyBTb21lQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFNvbWUgQ29tcG9uZW50PGJyIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmlzTG9hZGluZyA/IFxuICAgICAgICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+IDpcbiAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5jaHVja05vcnJpc1F1b3RlfTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICA8TGluayB0bz17YC9zb21lLW90aGVyLXBhdGhgfT5Nb3JlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4geyBcbiByZXR1cm4ge1xuICAgY2h1Y2tOb3JyaXNRdW90ZTogc3RhdGUuY2h1Y2tOb3JyaXNRdW90ZSxcbiAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXG4gfVxufVxuIFxuZXhwb3J0IGNvbnN0IFNvbWVDb21wb25lbnRDb25uZWN0ZWQgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHNcbikoU29tZUNvbXBvbmVudCkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTs7OztBQWJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/some-component.js\n");

/***/ }),

/***/ "./src/components/some-other-component.js":
/*!************************************************!*\
  !*** ./src/components/some-other-component.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SomeOtherComponentConnected = exports.SomeOtherComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SomeOtherComponent = exports.SomeOtherComponent = function (_React$Component) {\n  _inherits(SomeOtherComponent, _React$Component);\n\n  function SomeOtherComponent() {\n    _classCallCheck(this, SomeOtherComponent);\n\n    return _possibleConstructorReturn(this, (SomeOtherComponent.__proto__ || Object.getPrototypeOf(SomeOtherComponent)).apply(this, arguments));\n  }\n\n  _createClass(SomeOtherComponent, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Some Other Component',\n        _react2.default.createElement('br', null),\n        !this.props.isLoading ? _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            this.props.xkcd.title,\n            '(#',\n            this.props.xkcd.num,\n            ')'\n          ),\n          _react2.default.createElement('img', { src: this.props.xkcd.img, title: this.props.xkcd.alt })\n        ) : _react2.default.createElement(\n          'div',\n          null,\n          'Loading...'\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/some-path' },\n          'More'\n        )\n      );\n    }\n  }]);\n\n  return SomeOtherComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    xkcd: state.XKCD.data.xkcd,\n    isLoading: state.isLoading\n  };\n};\n\nvar SomeOtherComponentConnected = exports.SomeOtherComponentConnected = (0, _reactRedux.connect)(mapStateToProps)(SomeOtherComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb21lLW90aGVyLWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zb21lLW90aGVyLWNvbXBvbmVudC5qcz84YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbiBcbmV4cG9ydCBjbGFzcyBTb21lT3RoZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgU29tZSBPdGhlciBDb21wb25lbnQ8YnIgLz5cbiAgICAgICAgeyF0aGlzLnByb3BzLmlzTG9hZGluZyA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy54a2NkLnRpdGxlfSgje3RoaXMucHJvcHMueGtjZC5udW19KTwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnhrY2QuaW1nfSB0aXRsZT17dGhpcy5wcm9wcy54a2NkLmFsdH0gLz5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPExpbmsgdG89e2Avc29tZS1wYXRoYH0+TW9yZTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHsgXG4gIHJldHVybiB7XG4gICAgeGtjZDogc3RhdGUuWEtDRC5kYXRhLnhrY2QsXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcbiAgfVxuIH1cbiAgXG4gZXhwb3J0IGNvbnN0IFNvbWVPdGhlckNvbXBvbmVudENvbm5lY3RlZCA9IGNvbm5lY3QoXG4gICBtYXBTdGF0ZVRvUHJvcHNcbiApKFNvbWVPdGhlckNvbXBvbmVudClcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/some-other-component.js\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.chuckNorrisQuote = chuckNorrisQuote;\nexports.isLoading = isLoading;\nexports.XKCD = XKCD;\nexports.newsItems = newsItems;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nfunction chuckNorrisQuote() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'QUOTE_FETCH_SUCCESS':\n      return action.quote.replace(/&quot;/g, '\"');\n    default:\n      return state;\n  }\n}\n\nfunction isLoading() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'IS_LOADING':\n      return action.isLoading;\n    default:\n      return state;\n  }\n}\n\nfunction XKCD() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'XKCD_FETCH_SUCCESS':\n      return action.data;\n    default:\n      return state;\n  }\n}\n\nfunction newsItems() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'NEWS_FETCH_SUCCESS':\n      return action.data;\n    default:\n      return state;\n  }\n}\n\nexports.default = (0, _redux.combineReducers)({\n  chuckNorrisQuote: chuckNorrisQuote,\n  isLoading: isLoading,\n  XKCD: XKCD,\n  newsItems: newsItems\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzLmpzP2ExNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2h1Y2tOb3JyaXNRdW90ZShzdGF0ZT1bXSwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1FVT1RFX0ZFVENIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIGFjdGlvbi5xdW90ZS5yZXBsYWNlKC8mcXVvdDsvZywnXCInKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRpbmcoc3RhdGU9ZmFsc2UsIGFjdGlvbikge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJU19MT0FESU5HJzpcbiAgICAgIHJldHVybiBhY3Rpb24uaXNMb2FkaW5nXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWEtDRChzdGF0ZT1bXSwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1hLQ0RfRkVUQ0hfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdzSXRlbXMoc3RhdGU9W10sIGFjdGlvbikge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdORVdTX0ZFVENIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgY2h1Y2tOb3JyaXNRdW90ZSxcbiAgaXNMb2FkaW5nLFxuICBYS0NELFxuICBuZXdzSXRlbXNcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQVNBO0FBU0E7QUFTQTtBQUNBO0FBOUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers.js\n");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.routes = undefined;\n\nvar _someComponent = __webpack_require__(/*! ./components/some-component */ \"./src/components/some-component.js\");\n\nvar _someOtherComponent = __webpack_require__(/*! ./components/some-other-component */ \"./src/components/some-other-component.js\");\n\nvar _news = __webpack_require__(/*! ./components/news */ \"./src/components/news.js\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\nvar routes = exports.routes = [{\n  path: \"/some-path\",\n  component: _someComponent.SomeComponentConnected,\n  loadData: function loadData() {\n    return (0, _actions.getChuckNorrisQuote)();\n  }\n}, {\n  path: \"/some-other-path\",\n  component: _someOtherComponent.SomeOtherComponentConnected,\n  loadData: function loadData() {\n    return (0, _actions.getLatestXKCDComic)();\n  }\n}, {\n  path: \"/news\",\n  component: _news.NewsConnected,\n  loadData: function loadData() {\n    return (0, _actions.getNews)();\n  }\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yb3V0ZXMuanM/MmRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb21lQ29tcG9uZW50Q29ubmVjdGVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zb21lLWNvbXBvbmVudFwiXG5pbXBvcnQgeyBTb21lT3RoZXJDb21wb25lbnRDb25uZWN0ZWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NvbWUtb3RoZXItY29tcG9uZW50XCJcbmltcG9ydCB7IE5ld3NDb25uZWN0ZWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL25ld3NcIjtcbmltcG9ydCB7IGdldENodWNrTm9ycmlzUXVvdGUsIGdldExhdGVzdFhLQ0RDb21pYywgZ2V0TmV3cyB9IGZyb20gXCIuL2FjdGlvbnNcIlxuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvc29tZS1wYXRoXCIsXG4gICAgY29tcG9uZW50OiBTb21lQ29tcG9uZW50Q29ubmVjdGVkLFxuICAgIGxvYWREYXRhOiAoKSA9PiBnZXRDaHVja05vcnJpc1F1b3RlKClcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3NvbWUtb3RoZXItcGF0aFwiLFxuICAgIGNvbXBvbmVudDogU29tZU90aGVyQ29tcG9uZW50Q29ubmVjdGVkLFxuICAgIGxvYWREYXRhOiAoKSA9PiBnZXRMYXRlc3RYS0NEQ29taWMoKVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbmV3c1wiLFxuICAgIGNvbXBvbmVudDogTmV3c0Nvbm5lY3RlZCxcbiAgICBsb2FkRGF0YTogKCkgPT4gZ2V0TmV3cygpXG4gIH1cbl0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes.js\n");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _configureStore = __webpack_require__(/*! ./configureStore */ \"./src/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressGraphql = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar server = _http2.default.createServer(app);\n\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\nvar schema = (0, _graphql.buildSchema)('\\n  type Query {\\n    hello: String!,\\n    xkcd: XKCD!\\n    news: [newsItem!]!\\n  }\\n  type XKCD {\\n    img: String!,\\n    num: Int!,\\n    title: String!,\\n    alt: String!\\n  },\\n  type newsItem {\\n    author: String,\\n    title: String,\\n    description: String,\\n    url: String,\\n    urlToImage: String,\\n    publishedAt: String\\n  }\\n');\n\nvar root = {\n  hello: function hello() {\n    return 'Hello world';\n  },\n  xkcd: function xkcd() {\n    var num = Math.floor(Math.random() * 1988) + 1;\n    return _axios2.default.get('https://xkcd.com/' + num + '/info.0.json').then(function (response) {\n      return response.data;\n    });\n  },\n  news: function news() {\n    var apiKey = 'c79820853d9c4793b5dc93278e9f7861';\n    var newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;\n\n    return _axios2.default.get(newsUrl).then(function (res) {\n      return res.data.articles;\n    });\n  }\n\n};\n\napp.use('/graphql', (0, _expressGraphql2.default)({\n  schema: schema,\n  rootValue: root,\n  graphiql: true\n}));\n\napp.use(function (req, res) {\n  var store = (0, _configureStore2.default)(); // Setup store with reducers, etc\n  var context = {};\n  var url = req.url;\n\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_routes.routes, url).map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n\n    if (route.loadData) return store.dispatch(route.loadData(match));\n  });\n\n  Promise.all(promises).then(function () {\n    var content = _server2.default.renderToString(_react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(\n        _reactRouter.StaticRouter,\n        { location: url, context: context },\n        (0, _reactRouterConfig.renderRoutes)(_routes.routes)\n      )\n    ));\n\n    var serializedState = JSON.stringify(store.getState());\n\n    // Write the response back to the client\n    res.send('\\n    <html>\\n      <body style=\"background:light blue\" >\\n        <div id=\"app\">' + content + '</div>\\n        <script>\\n          window.__PRELOADED_STATE__ = ' + serializedState + '\\n        </script>\\n        <script src=\"/js/bundle.js\"></script>\\n      </body> \\n    </html>\\n  ');\n  });\n});\n\nserver.listen(3003);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2ZXIuanM/OGZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiXG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIlxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzLCBtYXRjaFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuaW1wb3J0IGdyYXBocWxIVFRQIGZyb20gJ2V4cHJlc3MtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcClcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3RhdGljJykpKTtcblxuY29uc3Qgc2NoZW1hID0gYnVpbGRTY2hlbWEoYFxuICB0eXBlIFF1ZXJ5IHtcbiAgICBoZWxsbzogU3RyaW5nISxcbiAgICB4a2NkOiBYS0NEIVxuICAgIG5ld3M6IFtuZXdzSXRlbSFdIVxuICB9XG4gIHR5cGUgWEtDRCB7XG4gICAgaW1nOiBTdHJpbmchLFxuICAgIG51bTogSW50ISxcbiAgICB0aXRsZTogU3RyaW5nISxcbiAgICBhbHQ6IFN0cmluZyFcbiAgfSxcbiAgdHlwZSBuZXdzSXRlbSB7XG4gICAgYXV0aG9yOiBTdHJpbmcsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICAgIHVybDogU3RyaW5nLFxuICAgIHVybFRvSW1hZ2U6IFN0cmluZyxcbiAgICBwdWJsaXNoZWRBdDogU3RyaW5nXG4gIH1cbmApO1xuXG5jb25zdCByb290ID0ge1xuICBoZWxsbzogKCkgPT4ge1xuICAgIHJldHVybiAnSGVsbG8gd29ybGQnO1xuICB9LFxuICB4a2NkOiAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTk4OCkgKyAxO1xuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8veGtjZC5jb20vJHtudW19L2luZm8uMC5qc29uYClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgfSxcbiAgbmV3czogKCkgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9ICdjNzk4MjA4NTNkOWM0NzkzYjVkYzkzMjc4ZTlmNzg2MSc7XG4gICAgY29uc3QgbmV3c1VybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT11cyZhcGlLZXk9JHthcGlLZXl9YDtcblxuICAgIHJldHVybiBheGlvcy5nZXQobmV3c1VybClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmFydGljbGVzXG4gICAgICB9KVxuICB9LFxuXG59O1xuXG5hcHAudXNlKCcvZ3JhcGhxbCcsIGdyYXBocWxIVFRQKHtcbiAgc2NoZW1hLFxuICByb290VmFsdWU6IHJvb3QsXG4gIGdyYXBoaXFsOiB0cnVlXG59KSk7XG5cbmFwcC51c2UoKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKSAvLyBTZXR1cCBzdG9yZSB3aXRoIHJlZHVjZXJzLCBldGNcbiAgY29uc3QgY29udGV4dCA9IHt9O1xuICBjb25zdCB7IHVybCB9ID0gcmVxO1xuXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB1cmwpLm1hcCgoeyByb3V0ZSwgbWF0Y2ggfSkgPT4ge1xuICAgIGlmIChyb3V0ZS5sb2FkRGF0YSkgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHJvdXRlLmxvYWREYXRhKG1hdGNoKSk7XG4gIH0pO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17dXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICB7cmVuZGVyUm91dGVzKHJvdXRlcyl9XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG5cbiAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKVxuXG4gICAgLy8gV3JpdGUgdGhlIHJlc3BvbnNlIGJhY2sgdG8gdGhlIGNsaWVudFxuICAgIHJlcy5zZW5kKGBcbiAgICA8aHRtbD5cbiAgICAgIDxib2R5IHN0eWxlPVwiYmFja2dyb3VuZDpsaWdodCBibHVlXCIgPlxuICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fID0gJHtzZXJpYWxpemVkU3RhdGV9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9idW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvYm9keT4gXG4gICAgPC9odG1sPlxuICBgKVxuICB9KVxuXG59KVxuXG5cblxuc2VydmVyLmxpc3RlbigzMDAzKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/server.js\n");

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