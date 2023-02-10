webpackHotUpdate(4,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-cf555d6e\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = {\n  key: 0\n};\nvar _hoisted_2 = {\n  key: 1,\n  id: \"loader-main\"\n};\nvar _hoisted_3 = {\n  key: 0,\n  class: \"loader\"\n};\n\nvar _hoisted_4 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_5 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"fetching api ...\", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_7 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_9 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_10 = [\"onClick\"];\n\nvar _hoisted_11 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"hr\", null, null, -1\n  /* HOISTED */\n  );\n});\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [_ctx.$store.getters.getUserStatus === 'login' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"h1\", _hoisted_1, \"Game Invitations\")) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), !$data.notifications[0] ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, [_ctx.$store.getters.getUserStatus === 'logout' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_3)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), _hoisted_4, _hoisted_5])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.notifications, function (notification) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: notification.id,\n      class: \"div\"\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h4\", null, \"Quiz Name: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.quiz['title']), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"sender: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.game_creator.username), 1\n    /* TEXT */\n    ), _hoisted_6, _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"connected users: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.connected_users), 1\n    /* TEXT */\n    ), _hoisted_8, _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(notification.created_at = new Date(notification.created_at).getTime()) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n      onClick: function onClick($event) {\n        return $options.loadOppponent(notification.room_code);\n      },\n      class: \"btn btn-primary\"\n    }, \"play\", 8\n    /* PROPS */\n    , _hoisted_10)]), _hoisted_11]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjU1NWQ2ZSZzY29wZWQ9dHJ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDEgdi1pZj1cIiRzdG9yZS5nZXR0ZXJzLmdldFVzZXJTdGF0dXMgPT09ICdsb2dpbidcIj5HYW1lIEludml0YXRpb25zPC9oMT5cclxuICAgIDxkaXYgdi1pZj1cIiFub3RpZmljYXRpb25zWzBdXCIgaWQ9XCJsb2FkZXItbWFpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCIgdi1pZj1cIiRzdG9yZS5nZXR0ZXJzLmdldFVzZXJTdGF0dXMgPT09ICdsb2dvdXQnXCI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyPlxyXG4gICAgICA8c3BhbiA+ZmV0Y2hpbmcgYXBpIC4uLjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIm5vdGlmaWNhdGlvbiBpbiBub3RpZmljYXRpb25zXCJcclxuICAgICAgOmtleT1cIm5vdGlmaWNhdGlvbi5pZFwiXHJcbiAgICAgIGNsYXNzPVwiZGl2XCJcclxuICAgID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGg0PlF1aXogTmFtZToge3tub3RpZmljYXRpb24ucXVpelsndGl0bGUnXX19PC9oND5cclxuICAgICAgICA8c3Bhbj5zZW5kZXI6IHt7bm90aWZpY2F0aW9uLmdhbWVfY3JlYXRvci51c2VybmFtZX19PC9zcGFuPiA8YnI+XHJcbiAgICAgICAgPHNwYW4+Y29ubmVjdGVkIHVzZXJzOiB7e25vdGlmaWNhdGlvbi5jb25uZWN0ZWRfdXNlcnN9fTwvc3Bhbj4gPGJyPlxyXG4gICAgICAgIHt7bm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQgPSBuZXcgRGF0ZShub3RpZmljYXRpb24uY3JlYXRlZF9hdCkuZ2V0VGltZSgpfX1cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImxvYWRPcHBwb25lbnQobm90aWZpY2F0aW9uLnJvb21fY29kZSlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnBsYXk8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxocj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RpZmljYXRpb25zOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkT3BwcG9uZW50KHNsdWcpIHtcclxuICAgICAgLy8gQ3JlYXRlIERqYW5nbyBDaGFubmVscyBvciBzb2NrZXQuaW8gb3Igd2Vic29ja2V0cyByb29tXHJcbiAgICAgIC8vIHNlbnQgb3Bwb25lbnQgZGF0YSBmcm9tIGFwcCB0byBzb2NrZXQgcm9vbVxyXG4gICAgICAvLyBsb2FkIGRhdGEgaGVyZSBhbmQgdW5wYWNrIGl0XHJcbiAgICAgIC8vIHNhdmUgZGF0YSB0byBwbGF5ZXJzWzFdXHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3F1aXplcy9cIiArIFwiaGlzdG9yaWEtemllbWlcIiArIFwiL1wiICsgc2x1ZylcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgY3JlYXRlZCgpIHtcclxuICAgIGlmICh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFVzZXJTdGF0dXMgPT09IFwibG9naW5cIikge1xyXG4gICAgICB0aGlzLmxvZ2dlZCA9IGZhbHNlXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9teWdhbWVzL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgXHJcbiAgICAgIC8vXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7Y29uc29sZS5sb2coZXJyLm1lc3NhZ2UpOyBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKVxyXG4gICAgICBsb2FkZXIucmVtb3ZlQ2xhc3MoXCJsb2FkZXJcIilcclxuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItZmFpbGVkXCIpfSk7XHJcbn1cclxuXHJcblxyXG4gICBcclxuICB9LCBcclxuICBcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNsb2FkZXItbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOSU7XHJcbn1cclxuXHJcbi5sb2FkZXItZmFpbGVkIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUdBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7O0FBU0E7QUFBQTtBQUFBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUlBO0FBQUE7QUFBQTs7OztBQXJCQTtBQVNBO0FBRUE7QUFDQTtBQVVBO0FBUEE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBYkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=template&id=cf555d6e&scoped=true\n");

/***/ })

})