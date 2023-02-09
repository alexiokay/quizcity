webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n\n\nvar vuexLocalStorage = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  supportCircular: true,\n  key: 'vuex',\n  storage: window.sessionStorage,\n  reducer: function reducer(state) {\n    return {\n      user: state.user,\n      count: state.count,\n      soundMuted: state.soundMuted,\n      quizes: state.quizes\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      quizes: [],\n      count: 0,\n      searchbar: false,\n      soundMuted: true,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      buying: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  // MUTATIONS\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    },\n    setListQuizes: function setListQuizes(state, data) {\n      state.quizes = data;\n    },\n    soundmutation: function soundmutation(state) {\n      state.soundMuted = !state.soundMuted;\n      console.log(state.soundMuted);\n    },\n    setUser: function setUser(state, data) {\n      state.user.username = data.username;\n      state.user.id = data.id;\n      state.user.friends = data.friends;\n      state.user.avatar = data.avatar;\n    },\n    logout: function logout(state) {\n      state.user.username = \"guest\", state.user.id = null, state.user.friends = [], state.user.avatar = \"/static/assets/gamer-esports-player-competition-activity-256.webp\";\n    }\n  },\n  // GETTERS\n  getters: {\n    getQuizes: function getQuizes(state) {\n      return state.quizes;\n    },\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    },\n    getUserName: function getUserName(state) {\n      return state.user.username;\n    },\n    getUserAvatar: function getUserAvatar(state) {\n      return state.user.avatar;\n    },\n    isSoundMuted: function isSoundMuted(state) {\n      return state.soundMuted;\n    }\n  },\n  plugins: [vuexLocalStorage.plugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVnVleFBlcnNpc3RlbmNlIGZyb20gXCJ2dWV4LXBlcnNpc3RcIlxyXG5cclxuXHJcbmNvbnN0IHZ1ZXhMb2NhbFN0b3JhZ2UgPSBuZXcgVnVleFBlcnNpc3RlbmNlKHtcclxuICBzdXBwb3J0Q2lyY3VsYXI6IHRydWUsXHJcbiAga2V5OiAndnVleCcsXHJcbiAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlLFxyXG4gIHJlZHVjZXI6IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICBjb3VudDogc3RhdGUuY291bnQsXHJcbiAgICBzb3VuZE11dGVkOiBzdGF0ZS5zb3VuZE11dGVkLFxyXG4gICAgcXVpemVzOiBzdGF0ZS5xdWl6ZXMsXHJcbiAgfSlcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgc3RhdGUgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVpemVzOiBbXSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHNlYXJjaGJhcjogZmFsc2UsXHJcbiAgICAgIHNvdW5kTXV0ZWQ6IHRydWUsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBtb2RhbENvbmZpcm06IG51bGwsXHJcbiAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxyXG4gICAgICBzZWFyY2hJbjogW10sXHJcbiAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICBsb2dpbl9wYXRoOiBcImxvZ2luXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBzZWFyY2hpbmc6IGZhbHNlLFxyXG4gICAgICBidXlpbmc6IGZhbHNlLFxyXG4gICAgICBkYXk6IHRydWUsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBcImlkXCI6IG51bGwsXHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgXCJ0b2tlblwiOiBcIlwiLFxyXG4gICAgICAgIFwiYXZhdGFyXCI6IFwiL3N0YXRpYy9hc3NldHMvZ2FtZXItZXNwb3J0cy1wbGF5ZXItY29tcGV0aXRpb24tYWN0aXZpdHktMjU2LndlYnBcIixcclxuICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXHJcbiAgLy8gTVVUQVRJT05TXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBpbmNyZW1lbnQgKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmNvdW50ICs9IDExMFxyXG4gICAgfSxcclxuICAgIHNldExpc3RRdWl6ZXMgKHN0YXRlLCBkYXRhKSB7XHJcbiAgICAgIHN0YXRlLnF1aXplcyA9IGRhdGFcclxuICAgIH0sXHJcbiAgICBzb3VuZG11dGF0aW9uIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5zb3VuZE11dGVkID0gIXN0YXRlLnNvdW5kTXV0ZWRcclxuICAgICAgY29uc29sZS5sb2coc3RhdGUuc291bmRNdXRlZClcclxuICAgIH0sXHJcbiAgICBzZXRVc2VyIChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcclxuICAgICAgc3RhdGUudXNlci5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgIHN0YXRlLnVzZXIuZnJpZW5kcyA9IGRhdGEuZnJpZW5kcztcclxuICAgICAgc3RhdGUudXNlci5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQgKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXIudXNlcm5hbWUgPSBcImd1ZXN0XCIsXHJcbiAgICAgIHN0YXRlLnVzZXIuaWQgPSBudWxsLFxyXG4gICAgICBzdGF0ZS51c2VyLmZyaWVuZHMgPSAgW10sXHJcbiAgICAgIHN0YXRlLnVzZXIuYXZhdGFyID0gXCIvc3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gR0VUVEVSU1xyXG4gIGdldHRlcnM6IHtcclxuICAgIGdldFF1aXplcyAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLnF1aXplc1xyXG4gICAgfSxcclxuICAgIGdldFVzZXJTdGF0dXMgKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXIudXNlcm5hbWUgPT09ICdndWVzdCcgPyBzdGF0ZS5sb2dpbl9wYXRoID0gXCJsb2dpblwiIDogc3RhdGUubG9naW5fcGF0aCA9IFwibG9nb3V0XCJcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvZ2luX3BhdGhcclxuICAgIH0sXHJcbiAgICBnZXRVc2VyTmFtZSAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLnVzZXIudXNlcm5hbWVcclxuICAgIH0sXHJcbiAgICBnZXRVc2VyQXZhdGFyIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUudXNlci5hdmF0YXJcclxuICAgIH0sXHJcbiAgICBpc1NvdW5kTXV0ZWQgKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5zb3VuZE11dGVkXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbdnVleExvY2FsU3RvcmFnZS5wbHVnaW5dLFxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQXpCQTtBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQXhCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUE5RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})