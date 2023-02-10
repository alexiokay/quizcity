webpackHotUpdate(4,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-cf555d6e\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"Game Invitations\", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_2 = {\n  key: 0,\n  id: \"loader-main\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n    class: \"loader\"\n  }, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_4 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_5 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"fetching api ...\", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_6 = [_hoisted_3, _hoisted_4, _hoisted_5];\n\nvar _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_8 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_10 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_11 = [\"onClick\"];\n\nvar _hoisted_12 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"hr\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [_hoisted_1, !$data.notifications[0] ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, _hoisted_6)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.notifications, function (notification) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: notification.id,\n      class: \"div\"\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h4\", null, \"Quiz Name: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.quiz['title']), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"sender: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.game_creator.username), 1\n    /* TEXT */\n    ), _hoisted_7, _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"connected users: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.connected_users), 1\n    /* TEXT */\n    ), _hoisted_9, _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.created_at = new Date(notification.created_at).getTime()) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n      onClick: function onClick($event) {\n        return $options.loadOppponent(notification.room_code);\n      },\n      class: \"btn btn-primary\"\n    }, \"play\", 8\n    /* PROPS */\n    , _hoisted_11)]), _hoisted_12]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjU1NWQ2ZSZzY29wZWQ9dHJ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+R2FtZSBJbnZpdGF0aW9uczwvaDE+XHJcbiAgICA8ZGl2IHYtaWY9XCIhbm90aWZpY2F0aW9uc1swXVwiIGlkPVwibG9hZGVyLW1haW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj5cclxuICAgICAgPHNwYW4gPmZldGNoaW5nIGFwaSAuLi48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgdi1mb3I9XCJub3RpZmljYXRpb24gaW4gbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgIDprZXk9XCJub3RpZmljYXRpb24uaWRcIlxyXG4gICAgICBjbGFzcz1cImRpdlwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxoND5RdWl6IE5hbWU6IHt7bm90aWZpY2F0aW9uLnF1aXpbJ3RpdGxlJ119fTwvaDQ+XHJcbiAgICAgICAgPHNwYW4+c2VuZGVyOiB7e25vdGlmaWNhdGlvbi5nYW1lX2NyZWF0b3IudXNlcm5hbWV9fTwvc3Bhbj4gPGJyPlxyXG4gICAgICAgIDxzcGFuPmNvbm5lY3RlZCB1c2Vyczoge3tub3RpZmljYXRpb24uY29ubmVjdGVkX3VzZXJzfX08L3NwYW4+IDxicj5cclxuICAgICAgICB7e25vdGlmaWNhdGlvbi5jcmVhdGVkX2F0ID0gbmV3IERhdGUobm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQpLmdldFRpbWUoKX19XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkT3BwcG9uZW50KG5vdGlmaWNhdGlvbi5yb29tX2NvZGUpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5wbGF5PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90aWZpY2F0aW9uczogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbG9hZE9wcHBvbmVudChzbHVnKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBEamFuZ28gQ2hhbm5lbHMgb3Igc29ja2V0LmlvIG9yIHdlYnNvY2tldHMgcm9vbVxyXG4gICAgICAvLyBzZW50IG9wcG9uZW50IGRhdGEgZnJvbSBhcHAgdG8gc29ja2V0IHJvb21cclxuICAgICAgLy8gbG9hZCBkYXRhIGhlcmUgYW5kIHVucGFjayBpdFxyXG4gICAgICAvLyBzYXZlIGRhdGEgdG8gcGxheWVyc1sxXVxyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9xdWl6ZXMvXCIgKyBcImhpc3RvcmlhLXppZW1pXCIgKyBcIi9cIiArIHNsdWcpXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGNyZWF0ZWQoKSB7XHJcbiAgICBpZiAodGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRVc2VyU3RhdHVzID09PSBcImxvZ2luXCIpIHtcclxuICAgICAgdGhpcy5sb2dnZWQgPSBmYWxzZVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIGBhcGkvbXlnYW1lcy9gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgIFxyXG4gICAgICAvL1xyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIilcclxuICAgICAgbG9hZGVyLnJlbW92ZUNsYXNzKFwibG9hZGVyXCIpXHJcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyLWZhaWxlZFwiKX0pO1xyXG59XHJcblxyXG5cclxuICAgXHJcbiAgfSwgXHJcbiAgXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jbG9hZGVyLW1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTklO1xyXG59XHJcblxyXG4ubG9hZGVyLWZhaWxlZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUNBOzs7O0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQUdBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7O0FBSkE7QUFDQTs7OztBQVlBO0FBQUE7QUFBQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7QUFJQTtBQUFBO0FBQUE7Ozs7QUFyQkE7QUFTQTtBQUVBO0FBQ0E7QUFVQTtBQVBBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQWJBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true\n");

/***/ })

})