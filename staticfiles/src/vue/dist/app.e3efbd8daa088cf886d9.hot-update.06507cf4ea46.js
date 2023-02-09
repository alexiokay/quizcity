webpackHotUpdate("app",{

/***/ "./node_modules/vuex-persist/dist/esm/index.js":
false,

/***/ "./node_modules/vuex-persist/node_modules/deepmerge/dist/cjs.js":
false,

/***/ "./node_modules/vuex-persist/node_modules/flatted/esm/index.js":
false,

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  plugins: [vuexLocalStorage.plugin],\n  state: function state() {\n    return {\n      count: 0,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgcGx1Z2luczogW3Z1ZXhMb2NhbFN0b3JhZ2UucGx1Z2luXSxcclxuICBzdGF0ZSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIG1vZGFsQ29uZmlybTogbnVsbCxcclxuICAgICAgc2VhcmNoUmVzdWx0czogW10sXHJcbiAgICAgIHNlYXJjaEluOiBbXSxcclxuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgIGxvZ2luX3BhdGg6IFwibG9naW5cIixcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbiAgICAgIGRheTogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIFwiaWRcIjogbnVsbCxcclxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiZ3Vlc3RcIixcclxuICAgICAgICBcInRva2VuXCI6IFwiXCIsXHJcbiAgICAgICAgXCJhdmF0YXJcIjogXCIvc3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiLFxyXG4gICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICBcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vcXVpeiBnYW1lIG1pbmRcclxuICAgICAgcXVlc3Rpb25zOiBbXSxcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIGluY3JlbWVudCAoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuY291bnQgKz0gMTEwXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ2V0dGVyczoge1xyXG4gICAgZ2V0VXNlclN0YXR1cyAoc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlci51c2VybmFtZSA9PT0gJ2d1ZXN0JyA/IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ2luXCIgOiBzdGF0ZS5sb2dpbl9wYXRoID0gXCJsb2dvdXRcIlxyXG4gICAgICByZXR1cm4gc3RhdGUubG9naW5fcGF0aFxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUF2QkE7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBcENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})