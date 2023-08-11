webpackHotUpdate("app",{

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Home.vue */ \"./views/Home.vue\");\n/* harmony import */ var _views_quizes_AddQuiz_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/quizes/AddQuiz.vue */ \"./views/quizes/AddQuiz.vue\");\n/* harmony import */ var _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/NotFound.vue */ \"./views/NotFound.vue\");\n/* harmony import */ var _views_quizes_QuizDetails_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store.js */ \"./store/store.js\");\n/* harmony import */ var _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/accounts/login.vue */ \"./views/accounts/login.vue\");\n/* harmony import */ var _views_accounts_Profile_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/accounts/Profile.vue */ \"./views/accounts/Profile.vue\");\n/* harmony import */ var _views_Notifications_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/Notifications.vue */ \"./views/Notifications.vue\");\n/* harmony import */ var _views_Features_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/Features.vue */ \"./views/Features.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction lazyLoad(view) {\n  return function () {\n    return __webpack_require__(\"./views lazy recursive ^\\\\.\\\\/.*\\\\.vue$\")(\"./\".concat(view, \".vue\"));\n  };\n}\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: lazyLoad(\"Home\"),\n  beforeEnter: function beforeEnter() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].state.modalConfirm = false;\n  }\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: lazyLoad(\"Profile\")\n}, {\n  path: '/notifications',\n  name: 'Notifications',\n  component: lazyLoad(\"Notifications\")\n}, {\n  path: '/features',\n  name: 'Features',\n  component: _views_Features_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n}, {\n  path: '/addQuiz',\n  name: 'AddQuiz',\n  component: _views_quizes_AddQuiz_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: '/quizes/:slug/',\n  name: 'QuizDetails',\n  component: _views_quizes_QuizDetails_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].state.modalConfirm == false) {\n      next('/');\n    } else {\n      next();\n      _store_store_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].state.modalConfirm = true;\n    }\n  }\n}, {\n  path: '/account/',\n  name: 'account',\n  component: _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].state.authenticated === false) next(\"/login/\");else next();\n  }\n}, {\n  path: '/login/',\n  name: 'login',\n  component: _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, // catchOuut\n{\n  path: '/:catchAll(.*)',\n  name: 'NotFound',\n  component: _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHistory\"])(\"/quizgame\"),\n  linkExactActiveClass: 'is-active',\n  routes: routes\n});\nrouter.beforeEach(function (to, from) {\n  console.log(\"to: \" + to.fullPath + \" from: \" + from.fullPath + \" lastHistory: \" + router.back);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanM/NTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vdmlld3MvSG9tZS52dWUnXG5pbXBvcnQgQWRkUXVpeiBmcm9tICcuLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWUnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vdmlld3MvTm90Rm91bmQudnVlJ1xuaW1wb3J0IFF1aXpEZXRhaWxzIGZyb20gJy4uL3ZpZXdzL3F1aXplcy9RdWl6RGV0YWlscy52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUuanMnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vdmlld3MvYWNjb3VudHMvbG9naW4udnVlJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vdmlld3MvYWNjb3VudHMvUHJvZmlsZS52dWUnXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZSdcbmltcG9ydCBGZWF0dXJlcyBmcm9tICcuLi92aWV3cy9GZWF0dXJlcy52dWUnXG5cbmZ1bmN0aW9uIGxhenlMb2FkKHZpZXcpe1xuICByZXR1cm4oKSA9PiBpbXBvcnQoYC4uL3ZpZXdzLyR7dmlld30udnVlYClcbn1cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgICBjb21wb25lbnQ6IGxhenlMb2FkKFwiSG9tZVwiKSxcbiAgICBiZWZvcmVFbnRlcjogKCkgPT4ge1xuICAgICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gZmFsc2VcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Byb2ZpbGUnLFxuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBjb21wb25lbnQ6IGxhenlMb2FkKFwiUHJvZmlsZVwiKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9ub3RpZmljYXRpb25zJyxcbiAgICBuYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgY29tcG9uZW50OiBsYXp5TG9hZChcIk5vdGlmaWNhdGlvbnNcIilcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZmVhdHVyZXMnLFxuICAgIG5hbWU6ICdGZWF0dXJlcycsXG4gICAgY29tcG9uZW50OiBGZWF0dXJlcyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWRkUXVpeicsXG4gICAgbmFtZTogJ0FkZFF1aXonLFxuICAgIGNvbXBvbmVudDogQWRkUXVpelxuICB9LFxuICB7XG4gICAgcGF0aDogJy9xdWl6ZXMvOnNsdWcvJyxcbiAgICBuYW1lOiAnUXVpekRldGFpbHMnLFxuICAgIGNvbXBvbmVudDogUXVpekRldGFpbHMsXG4gICAgYmVmb3JlRW50ZXI6ICh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgXG4gICAgICBpZihzdG9yZS5zdGF0ZS5tb2RhbENvbmZpcm0gPT0gZmFsc2UpIHtcbiAgICAgICAgbmV4dCgnLycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2FjY291bnQvJyxcbiAgICBuYW1lOiAnYWNjb3VudCcsXG4gICAgY29tcG9uZW50OiBMb2dpbixcbiAgICBiZWZvcmVFbnRlcjogKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICBpZihzdG9yZS5zdGF0ZS5hdXRoZW50aWNhdGVkID09PSBmYWxzZSkgbmV4dChcIi9sb2dpbi9cIilcbiAgICAgIGVsc2UgbmV4dCgpXG4gICAgfVxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL2xvZ2luLycsXG4gICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpbixcbiAgICB9LFxuICAvLyBjYXRjaE91dXRcbiAge1xuICAgIHBhdGg6ICcvOmNhdGNoQWxsKC4qKScsXG4gICAgbmFtZTogJ05vdEZvdW5kJyxcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kLFxuICB9LFxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KFwiL3F1aXpnYW1lXCIpLFxuICBsaW5rRXhhY3RBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZScsXG4gIHJvdXRlc1xufSlcblxucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidG86IFwiKyB0by5mdWxsUGF0aCArIFwiIGZyb206IFwiICsgZnJvbS5mdWxsUGF0aCArIFwiIGxhc3RIaXN0b3J5OiBcIiArIHJvdXRlci5iYWNrKVxuXG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUdBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./router/index.js\n");

/***/ })

})