webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Notifications\",\n  data: function data() {\n    return {\n      notifications: []\n    };\n  },\n  methods: {\n    loadOppponent: function loadOppponent(slug) {\n      // Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n      this.$router.push(\"/quizes/\" + \"historia-ziemi\" + \"/\" + slug);\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var now;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              now = Date.now();\n              now = new Date(now).getTime();\n              _context.next = 4;\n              return fetch(\"http://localhost:8002/\" + \"api/mygames/\").then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                var _iterator = Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n                    _step;\n\n                try {\n                  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                    var ob = _step.value;\n                    var created = ob.created_at;\n                    created = new Date(created).getTime(); // if game is older than 15 minutes -> ignore\n\n                    // if game is older than 15 minutes -> ignore\n                    if (now - created < 900000 && ob.is_over === false) _this.notifications.push(ob);\n                  }\n                } catch (err) {\n                  _iterator.e(err);\n                } finally {\n                  _iterator.f();\n                }\n              }).catch(function (err) {\n                console.log(err.message);\n                var loader = document.querySelector(\"loader\");\n                loader.removeClass(\"loader\");\n                loader.classList.add(\"loader-failed\");\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+R2FtZSBJbnZpdGF0aW9uczwvaDE+XHJcbiAgICA8ZGl2IHYtaWY9XCIhbm90aWZpY2F0aW9uc1swXVwiIGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIHYtZm9yPVwibm90aWZpY2F0aW9uIGluIG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICA6a2V5PVwibm90aWZpY2F0aW9uLmlkXCJcclxuICAgICAgY2xhc3M9XCJkaXZcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8aDQ+UXVpeiBOYW1lOiB7e25vdGlmaWNhdGlvbi5xdWl6Wyd0aXRsZSddfX08L2g0PlxyXG4gICAgICAgIDxzcGFuPnNlbmRlcjoge3tub3RpZmljYXRpb24uZ2FtZV9jcmVhdG9yLnVzZXJuYW1lfX08L3NwYW4+IDxicj5cclxuICAgICAgICA8c3Bhbj5jb25uZWN0ZWQgdXNlcnM6IHt7bm90aWZpY2F0aW9uLmNvbm5lY3RlZF91c2Vyc319PC9zcGFuPiA8YnI+XHJcbiAgICAgICAge3tub3RpZmljYXRpb24uY3JlYXRlZF9hdCA9IG5ldyBEYXRlKG5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0KS5nZXRUaW1lKCl9fVxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwibG9hZE9wcHBvbmVudChub3RpZmljYXRpb24ucm9vbV9jb2RlKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+cGxheTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvYWRPcHBwb25lbnQoc2x1Zykge1xyXG4gICAgICAvLyBDcmVhdGUgRGphbmdvIENoYW5uZWxzIG9yIHNvY2tldC5pbyBvciB3ZWJzb2NrZXRzIHJvb21cclxuICAgICAgLy8gc2VudCBvcHBvbmVudCBkYXRhIGZyb20gYXBwIHRvIHNvY2tldCByb29tXHJcbiAgICAgIC8vIGxvYWQgZGF0YSBoZXJlIGFuZCB1bnBhY2sgaXRcclxuICAgICAgLy8gc2F2ZSBkYXRhIHRvIHBsYXllcnNbMV1cclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvcXVpemVzL1wiICsgXCJoaXN0b3JpYS16aWVtaVwiICsgXCIvXCIgKyBzbHVnKVxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBhc3luYyBjcmVhdGVkKCkge1xyXG4gICAgbGV0IG5vdyA9IERhdGUubm93KClcclxuICAgIG5vdz0gbmV3IERhdGUobm93KS5nZXRUaW1lKClcclxuICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL215Z2FtZXMvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgb2Igb2YgZGF0YSkge1xyXG4gICAgICAgICAgbGV0IGNyZWF0ZWQgPSBvYi5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgY3JlYXRlZCA9IG5ldyBEYXRlKGNyZWF0ZWQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgLy8gaWYgZ2FtZSBpcyBvbGRlciB0aGFuIDE1IG1pbnV0ZXMgLT4gaWdub3JlXHJcbiAgICAgICAgICBpZiAobm93IC0gY3JlYXRlZCA8IDkwMDAwMCAmJiBvYi5pc19vdmVyID09PSBmYWxzZSkgdGhpcy5ub3RpZmljYXRpb25zLnB1c2gob2IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxvYWRlclwiKVxyXG4gICAgICBsb2FkZXIucmVtb3ZlQ2xhc3MoXCJsb2FkZXJcIilcclxuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItZmFpbGVkXCIpfSk7XHJcblxyXG4gIH0sIFxyXG4gIFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvYWRlci1mYWlsZWQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFsQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-cf555d6e\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"Game Invitations\", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_2 = {\n  key: 0,\n  class: \"loader\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_4 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_6 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_7 = [\"onClick\"];\n\nvar _hoisted_8 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"hr\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [_hoisted_1, !$data.notifications[0] ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.notifications, function (notification) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: notification.id,\n      class: \"div\"\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h4\", null, \"Quiz Name: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.quiz['title']), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"sender: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.game_creator.username), 1\n    /* TEXT */\n    ), _hoisted_3, _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"connected users: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.connected_users), 1\n    /* TEXT */\n    ), _hoisted_5, _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.created_at = new Date(notification.created_at).getTime()) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n      onClick: function onClick($event) {\n        return $options.loadOppponent(notification.room_code);\n      },\n      class: \"btn btn-primary\"\n    }, \"play\", 8\n    /* PROPS */\n    , _hoisted_7)]), _hoisted_8]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjU1NWQ2ZSZzY29wZWQ9dHJ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+R2FtZSBJbnZpdGF0aW9uczwvaDE+XHJcbiAgICA8ZGl2IHYtaWY9XCIhbm90aWZpY2F0aW9uc1swXVwiIGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIHYtZm9yPVwibm90aWZpY2F0aW9uIGluIG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICA6a2V5PVwibm90aWZpY2F0aW9uLmlkXCJcclxuICAgICAgY2xhc3M9XCJkaXZcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8aDQ+UXVpeiBOYW1lOiB7e25vdGlmaWNhdGlvbi5xdWl6Wyd0aXRsZSddfX08L2g0PlxyXG4gICAgICAgIDxzcGFuPnNlbmRlcjoge3tub3RpZmljYXRpb24uZ2FtZV9jcmVhdG9yLnVzZXJuYW1lfX08L3NwYW4+IDxicj5cclxuICAgICAgICA8c3Bhbj5jb25uZWN0ZWQgdXNlcnM6IHt7bm90aWZpY2F0aW9uLmNvbm5lY3RlZF91c2Vyc319PC9zcGFuPiA8YnI+XHJcbiAgICAgICAge3tub3RpZmljYXRpb24uY3JlYXRlZF9hdCA9IG5ldyBEYXRlKG5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0KS5nZXRUaW1lKCl9fVxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwibG9hZE9wcHBvbmVudChub3RpZmljYXRpb24ucm9vbV9jb2RlKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+cGxheTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvYWRPcHBwb25lbnQoc2x1Zykge1xyXG4gICAgICAvLyBDcmVhdGUgRGphbmdvIENoYW5uZWxzIG9yIHNvY2tldC5pbyBvciB3ZWJzb2NrZXRzIHJvb21cclxuICAgICAgLy8gc2VudCBvcHBvbmVudCBkYXRhIGZyb20gYXBwIHRvIHNvY2tldCByb29tXHJcbiAgICAgIC8vIGxvYWQgZGF0YSBoZXJlIGFuZCB1bnBhY2sgaXRcclxuICAgICAgLy8gc2F2ZSBkYXRhIHRvIHBsYXllcnNbMV1cclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvcXVpemVzL1wiICsgXCJoaXN0b3JpYS16aWVtaVwiICsgXCIvXCIgKyBzbHVnKVxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBhc3luYyBjcmVhdGVkKCkge1xyXG4gICAgbGV0IG5vdyA9IERhdGUubm93KClcclxuICAgIG5vdz0gbmV3IERhdGUobm93KS5nZXRUaW1lKClcclxuICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL215Z2FtZXMvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgb2Igb2YgZGF0YSkge1xyXG4gICAgICAgICAgbGV0IGNyZWF0ZWQgPSBvYi5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgY3JlYXRlZCA9IG5ldyBEYXRlKGNyZWF0ZWQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgLy8gaWYgZ2FtZSBpcyBvbGRlciB0aGFuIDE1IG1pbnV0ZXMgLT4gaWdub3JlXHJcbiAgICAgICAgICBpZiAobm93IC0gY3JlYXRlZCA8IDkwMDAwMCAmJiBvYi5pc19vdmVyID09PSBmYWxzZSkgdGhpcy5ub3RpZmljYXRpb25zLnB1c2gob2IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxvYWRlclwiKVxyXG4gICAgICBsb2FkZXIucmVtb3ZlQ2xhc3MoXCJsb2FkZXJcIilcclxuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItZmFpbGVkXCIpfSk7XHJcblxyXG4gIH0sIFxyXG4gIFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvYWRlci1mYWlsZWQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7QUFDQTs7Ozs7O0FBUUE7QUFBQTtBQUFBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUlBO0FBQUE7QUFBQTs7OztBQWZBO0FBR0E7QUFFQTtBQUNBO0FBVUE7QUFQQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFiQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true\n");

/***/ })

})