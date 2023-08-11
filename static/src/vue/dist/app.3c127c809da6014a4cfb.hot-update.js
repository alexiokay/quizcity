webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n\n\nvar vuexLocalStorage = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  supportCircular: true,\n  key: 'vuex',\n  storage: window.sessionStorage,\n  reducer: function reducer(state) {\n    return {\n      user: {\n        \"id\": state.user.id,\n        \"username\": state.user.username\n      },\n      count: state.count\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      count: 0,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    },\n    updateUserName: function updateUserName(user) {\n      state.user.username = user;\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    },\n    getUserName: function getUserName(state) {\n      return state.user.username;\n    }\n  },\n  plugins: [vuexLocalStorage.plugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVnVleFBlcnNpc3RlbmNlIGZyb20gXCJ2dWV4LXBlcnNpc3RcIlxyXG5cclxuXHJcbmNvbnN0IHZ1ZXhMb2NhbFN0b3JhZ2UgPSBuZXcgVnVleFBlcnNpc3RlbmNlKHtcclxuICBzdXBwb3J0Q2lyY3VsYXI6IHRydWUsXHJcbiAga2V5OiAndnVleCcsXHJcbiAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlLFxyXG4gIHJlZHVjZXI6IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgXCJpZFwiOiBzdGF0ZS51c2VyLmlkLFxyXG4gICAgICBcInVzZXJuYW1lXCI6IHN0YXRlLnVzZXIudXNlcm5hbWUsXHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHN0YXRlLmNvdW50LFxyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xyXG4gIHN0YXRlICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgbW9kYWxDb25maXJtOiBudWxsLFxyXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcclxuICAgICAgc2VhcmNoSW46IFtdLFxyXG4gICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgbG9naW5fcGF0aDogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgZGF5OiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgXCJpZFwiOiBudWxsLFxyXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwidG9rZW5cIjogXCJcIixcclxuICAgICAgICBcImF2YXRhclwiOiBcIi9zdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsXHJcbiAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyTmFtZSAodXNlcikge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID0gdXNlclxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0dGVyczoge1xyXG4gICAgZ2V0VXNlclN0YXR1cyAoc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlci51c2VybmFtZSA9PT0gJ2d1ZXN0JyA/IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ2luXCIgOiBzdGF0ZS5sb2dpbl9wYXRoID0gXCJsb2dvdXRcIlxyXG4gICAgICByZXR1cm4gc3RhdGUubG9naW5fcGF0aFxyXG4gICAgfSxcclxuICAgIGdldFVzZXJOYW1lIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUudXNlci51c2VybmFtZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3Z1ZXhMb2NhbFN0b3JhZ2UucGx1Z2luXSxcclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFBQTtBQUpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUF2QkE7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUEvQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})