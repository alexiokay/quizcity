webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Notifications\",\n  data: function data() {\n    return {\n      notifications: []\n    };\n  },\n  methods: {\n    loadOppponent: function loadOppponent(slug) {\n      // Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n      this.$router.push(\"/quizes/\" + \"historia-ziemi\" + \"/\" + slug);\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var now;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              now = Date.now();\n              now = new Date(now).getTime();\n              _context.next = 4;\n              return fetch(\"http://localhost:8002/\" + \"api/mygames/\").then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                var _iterator = Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n                    _step;\n\n                try {\n                  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                    var ob = _step.value;\n                    var created = ob.created_at;\n                    created = new Date(created).getTime(); // if game is older than 15 minutes -> ignore\n\n                    // if game is older than 15 minutes -> ignore\n                    if (now - created < 900000 && ob.is_over === false) _this.notifications.push(ob);\n                  }\n                } catch (err) {\n                  _iterator.e(err);\n                } finally {\n                  _iterator.f();\n                }\n              }) //\n              .catch(function (err) {\n                console.log(err.message);\n                var loader = document.querySelector(\"loader\");\n                loader.removeClass(\"loader\");\n                loader.classList.add(\"loader-failed\");\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+R2FtZSBJbnZpdGF0aW9uczwvaDE+XHJcbiAgICA8ZGl2IHYtaWY9XCIhbm90aWZpY2F0aW9uc1swXVwiIGlkPVwibG9hZGVyLW1haW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj5cclxuICAgICAgPHNwYW4+ZmV0Y2hpbmcgYXBpIC4uLjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIm5vdGlmaWNhdGlvbiBpbiBub3RpZmljYXRpb25zXCJcclxuICAgICAgOmtleT1cIm5vdGlmaWNhdGlvbi5pZFwiXHJcbiAgICAgIGNsYXNzPVwiZGl2XCJcclxuICAgID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGg0PlF1aXogTmFtZToge3tub3RpZmljYXRpb24ucXVpelsndGl0bGUnXX19PC9oND5cclxuICAgICAgICA8c3Bhbj5zZW5kZXI6IHt7bm90aWZpY2F0aW9uLmdhbWVfY3JlYXRvci51c2VybmFtZX19PC9zcGFuPiA8YnI+XHJcbiAgICAgICAgPHNwYW4+Y29ubmVjdGVkIHVzZXJzOiB7e25vdGlmaWNhdGlvbi5jb25uZWN0ZWRfdXNlcnN9fTwvc3Bhbj4gPGJyPlxyXG4gICAgICAgIHt7bm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQgPSBuZXcgRGF0ZShub3RpZmljYXRpb24uY3JlYXRlZF9hdCkuZ2V0VGltZSgpfX1cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRPcHBwb25lbnQobm90aWZpY2F0aW9uLnJvb21fY29kZSlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnBsYXk8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxocj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RpZmljYXRpb25zOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkT3BwcG9uZW50KHNsdWcpIHtcclxuICAgICAgLy8gQ3JlYXRlIERqYW5nbyBDaGFubmVscyBvciBzb2NrZXQuaW8gb3Igd2Vic29ja2V0cyByb29tXHJcbiAgICAgIC8vIHNlbnQgb3Bwb25lbnQgZGF0YSBmcm9tIGFwcCB0byBzb2NrZXQgcm9vbVxyXG4gICAgICAvLyBsb2FkIGRhdGEgaGVyZSBhbmQgdW5wYWNrIGl0XHJcbiAgICAgIC8vIHNhdmUgZGF0YSB0byBwbGF5ZXJzWzFdXHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3F1aXplcy9cIiArIFwiaGlzdG9yaWEtemllbWlcIiArIFwiL1wiICsgc2x1ZylcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgIGxldCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBub3c9IG5ldyBEYXRlKG5vdykuZ2V0VGltZSgpXHJcbiAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9teWdhbWVzL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IG9iIG9mIGRhdGEpIHtcclxuICAgICAgICAgIGxldCBjcmVhdGVkID0gb2IuY3JlYXRlZF9hdDtcclxuICAgICAgICAgIGNyZWF0ZWQgPSBuZXcgRGF0ZShjcmVhdGVkKS5nZXRUaW1lKClcclxuICAgICAgICAgIC8vIGlmIGdhbWUgaXMgb2xkZXIgdGhhbiAxNSBtaW51dGVzIC0+IGlnbm9yZVxyXG4gICAgICAgICAgaWYgKG5vdyAtIGNyZWF0ZWQgPCA5MDAwMDAgJiYgb2IuaXNfb3ZlciA9PT0gZmFsc2UpIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoKG9iKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7IGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsb2FkZXJcIilcclxuICAgICAgbG9hZGVyLnJlbW92ZUNsYXNzKFwibG9hZGVyXCIpXHJcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyLWZhaWxlZFwiKX0pO1xyXG5cclxuICB9LCBcclxuICBcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNsb2FkZXItbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOSU7XHJcbn1cclxuXHJcbi5sb2FkZXItZmFpbGVkIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBVEE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFuQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js\n");

/***/ })

})