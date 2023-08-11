webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n\n\nvar vuexLocalStorage = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  supportCircular: true,\n  key: 'vuex',\n  storage: window.sessionStorage,\n  reducer: function reducer(state) {\n    return {\n      user: {\n        \"id\": state.user.id,\n        \"username\": state.user.username\n      },\n      count: state.count\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      count: 0,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    },\n    updateUserName: function updateUserName(state) {\n      state.user.username = user;\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    },\n    getUserName: function getUserName(state) {\n      return state.user.username;\n    }\n  },\n  plugins: [vuexLocalStorage.plugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVnVleFBlcnNpc3RlbmNlIGZyb20gXCJ2dWV4LXBlcnNpc3RcIlxyXG5cclxuXHJcbmNvbnN0IHZ1ZXhMb2NhbFN0b3JhZ2UgPSBuZXcgVnVleFBlcnNpc3RlbmNlKHtcclxuICBzdXBwb3J0Q2lyY3VsYXI6IHRydWUsXHJcbiAga2V5OiAndnVleCcsXHJcbiAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlLFxyXG4gIHJlZHVjZXI6IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgXCJpZFwiOiBzdGF0ZS51c2VyLmlkLFxyXG4gICAgICBcInVzZXJuYW1lXCI6IHN0YXRlLnVzZXIudXNlcm5hbWUsXHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHN0YXRlLmNvdW50LFxyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xyXG4gIHN0YXRlICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgbW9kYWxDb25maXJtOiBudWxsLFxyXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcclxuICAgICAgc2VhcmNoSW46IFtdLFxyXG4gICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgbG9naW5fcGF0aDogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgZGF5OiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgXCJpZFwiOiBudWxsLFxyXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwidG9rZW5cIjogXCJcIixcclxuICAgICAgICBcImF2YXRhclwiOiBcIi9zdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsXHJcbiAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyTmFtZSAoc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlci51c2VybmFtZSA9IHVzZXJcclxuICAgIH1cclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIGdldFVzZXJTdGF0dXMgKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXIudXNlcm5hbWUgPT09ICdndWVzdCcgPyBzdGF0ZS5sb2dpbl9wYXRoID0gXCJsb2dpblwiIDogc3RhdGUubG9naW5fcGF0aCA9IFwibG9nb3V0XCJcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvZ2luX3BhdGhcclxuICAgIH0sXHJcbiAgICBnZXRVc2VyTmFtZSAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLnVzZXIudXNlcm5hbWVcclxuICAgIH1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFt2dWV4TG9jYWxTdG9yYWdlLnBsdWdpbl0sXHJcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBQUE7QUFKQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBdkJBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBL0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})