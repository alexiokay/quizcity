webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n\n\nvar vuexLocalStorage = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  supportCircular: true,\n  key: 'vuex',\n  storage: window.sessionStorage,\n  reducer: function reducer(state) {\n    return {\n      user: state.user,\n      count: state.count,\n      soundMuted: state.soundMuted,\n      quizes: state.quizes\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      quizes: [],\n      count: 0,\n      searchbar: false,\n      soundMuted: true,\n      is_cart_open: false,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      buying: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  // MUTATIONS\n  mutations: {\n    openCart: function openCart(state) {\n      state.is_cart_open = !state.is_cart_open;\n    },\n    increment: function increment(state) {\n      state.count += 110;\n    },\n    setListQuizes: function setListQuizes(state, data) {\n      state.quizes = data;\n    },\n    soundmutation: function soundmutation(state) {\n      state.soundMuted = !state.soundMuted;\n      console.log(state.soundMuted);\n    },\n    setUser: function setUser(state, data) {\n      state.user.username = data.username;\n      state.user.id = data.id;\n      state.user.friends = data.friends;\n      state.user.avatar = data.avatar;\n    },\n    logout: function logout(state) {\n      state.user.username = \"guest\", state.user.id = null, state.user.friends = [], state.user.avatar = \"/static/assets/gamer-esports-player-competition-activity-256.webp\";\n    }\n  },\n  // GETTERS\n  getters: {\n    getQuizes: function getQuizes(state) {\n      return state.quizes;\n    },\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    },\n    getUserName: function getUserName(state) {\n      return state.user.username;\n    },\n    getUserAvatar: function getUserAvatar(state) {\n      return state.user.avatar;\n    },\n    isSoundMuted: function isSoundMuted(state) {\n      return state.soundMuted;\n    }\n  },\n  plugins: [vuexLocalStorage.plugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVnVleFBlcnNpc3RlbmNlIGZyb20gXCJ2dWV4LXBlcnNpc3RcIlxyXG5cclxuXHJcbmNvbnN0IHZ1ZXhMb2NhbFN0b3JhZ2UgPSBuZXcgVnVleFBlcnNpc3RlbmNlKHtcclxuICBzdXBwb3J0Q2lyY3VsYXI6IHRydWUsXHJcbiAga2V5OiAndnVleCcsXHJcbiAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlLFxyXG4gIHJlZHVjZXI6IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICBjb3VudDogc3RhdGUuY291bnQsXHJcbiAgICBzb3VuZE11dGVkOiBzdGF0ZS5zb3VuZE11dGVkLFxyXG4gICAgcXVpemVzOiBzdGF0ZS5xdWl6ZXMsXHJcbiAgfSlcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgc3RhdGUgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVpemVzOiBbXSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHNlYXJjaGJhcjogZmFsc2UsXHJcbiAgICAgIHNvdW5kTXV0ZWQ6IHRydWUsXHJcbiAgICAgIGlzX2NhcnRfb3BlbjogZmFsc2UsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBtb2RhbENvbmZpcm06IG51bGwsXHJcbiAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxyXG4gICAgICBzZWFyY2hJbjogW10sXHJcbiAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICBsb2dpbl9wYXRoOiBcImxvZ2luXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBcclxuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgYnV5aW5nOiBmYWxzZSxcclxuXHJcbiAgICAgIGRheTogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIFwiaWRcIjogbnVsbCxcclxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiZ3Vlc3RcIixcclxuICAgICAgICBcInRva2VuXCI6IFwiXCIsXHJcbiAgICAgICAgXCJhdmF0YXJcIjogXCIvc3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiLFxyXG4gICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICBcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICAvL3F1aXogZ2FtZSBtaW5kXHJcbiAgICAgIHF1ZXN0aW9uczogW10sXHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICAvLyBNVVRBVElPTlNcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIG9wZW5DYXJ0IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5pc19jYXJ0X29wZW4gPSAhc3RhdGUuaXNfY2FydF9vcGVuXHJcbiAgICB9LFxyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgICBzZXRMaXN0UXVpemVzIChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICBzdGF0ZS5xdWl6ZXMgPSBkYXRhXHJcbiAgICB9LFxyXG4gICAgc291bmRtdXRhdGlvbiAoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuc291bmRNdXRlZCA9ICFzdGF0ZS5zb3VuZE11dGVkXHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNvdW5kTXV0ZWQpXHJcbiAgICB9LFxyXG4gICAgc2V0VXNlciAoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgc3RhdGUudXNlci51c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XHJcbiAgICAgIHN0YXRlLnVzZXIuaWQgPSBkYXRhLmlkO1xyXG4gICAgICBzdGF0ZS51c2VyLmZyaWVuZHMgPSBkYXRhLmZyaWVuZHM7XHJcbiAgICAgIHN0YXRlLnVzZXIuYXZhdGFyID0gZGF0YS5hdmF0YXI7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID0gXCJndWVzdFwiLFxyXG4gICAgICBzdGF0ZS51c2VyLmlkID0gbnVsbCxcclxuICAgICAgc3RhdGUudXNlci5mcmllbmRzID0gIFtdLFxyXG4gICAgICBzdGF0ZS51c2VyLmF2YXRhciA9IFwiL3N0YXRpYy9hc3NldHMvZ2FtZXItZXNwb3J0cy1wbGF5ZXItY29tcGV0aXRpb24tYWN0aXZpdHktMjU2LndlYnBcIjtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIEdFVFRFUlNcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRRdWl6ZXMgKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5xdWl6ZXNcclxuICAgIH0sXHJcbiAgICBnZXRVc2VyU3RhdHVzIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID09PSAnZ3Vlc3QnID8gc3RhdGUubG9naW5fcGF0aCA9IFwibG9naW5cIiA6IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ291dFwiXHJcbiAgICAgIHJldHVybiBzdGF0ZS5sb2dpbl9wYXRoXHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlck5hbWUgKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS51c2VyLnVzZXJuYW1lXHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlckF2YXRhciAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLnVzZXIuYXZhdGFyXHJcbiAgICB9LFxyXG4gICAgaXNTb3VuZE11dGVkIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuc291bmRNdXRlZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3Z1ZXhMb2NhbFN0b3JhZ2UucGx1Z2luXSxcclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFKQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQTVCQTtBQThCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQTNCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFwRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})