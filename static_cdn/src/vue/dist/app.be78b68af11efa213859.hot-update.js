webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=template&id=6aa12990":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=template&id=6aa12990 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"Quiz Details Page\", -1\n/* HOISTED */\n);\n\nvar _hoisted_2 = {\n  id: \"Quizes\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"QuizCounter\"\n}, \"1/2\", -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = {\n  class: \"card\",\n  style: {\n    \"width\": \"18rem\"\n  }\n};\nvar _hoisted_5 = [\"src\"];\nvar _hoisted_6 = {\n  class: \"card-body\"\n};\nvar _hoisted_7 = {\n  class: \"card-title\"\n};\nvar _hoisted_8 = {\n  class: \"card-text\"\n};\nvar _hoisted_9 = {\n  method: \"post\",\n  action: \"\",\n  class: \"myform\"\n};\nvar _hoisted_10 = {\n  class: \"list-group list-group-horizontal\"\n};\n\nvar _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"option\", {\n  value: \"1\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_12 = {\n  class: \"list-group-item active item w-50\"\n};\nvar _hoisted_13 = {\n  class: \"list-group-item item w-50\"\n};\nvar _hoisted_14 = {\n  key: 0,\n  class: \"list-group list-group-horizontal\"\n};\nvar _hoisted_15 = {\n  class: \"list-group-item w-50\"\n};\n\nvar _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", {\n  class: \"list-group-item w-50\"\n}, \"A second item\", -1\n/* HOISTED */\n);\n\nvar _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n  class: \"card-body\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n  href: \"#\",\n  class: \"btn btn-primary\"\n}, \"Dalej\")], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [_hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n    src: \"\".concat($data.quiz.image),\n    class: \"card-img-top\",\n    alt: \"\"\n  }, null, 8\n  /* PROPS */\n  , _hoisted_5), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h5\", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.title), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_8, \" Question: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.question), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"select\", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"ul\", _hoisted_10, [_hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.option_one), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.option_two), 1\n  /* TEXT */\n  )]), $data.quiz.option_three ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"ul\", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.option_three), 1\n  /* TEXT */\n  ), _hoisted_16])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)]), _hoisted_17]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", null, \"author: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.quiz.author), 1\n  /* TEXT */\n  )])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhYTEyOTkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMVwiLCBudWxsLCBcIlF1aXogRGV0YWlscyBQYWdlXCIsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF8yID0geyBpZDogXCJRdWl6ZXNcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHsgY2xhc3M6IFwiUXVpekNvdW50ZXJcIiB9LCBcIjEvMlwiLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNCA9IHtcbiAgY2xhc3M6IFwiY2FyZFwiLFxuICBzdHlsZToge1wid2lkdGhcIjpcIjE4cmVtXCJ9XG59XG5jb25zdCBfaG9pc3RlZF81ID0gW1wic3JjXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJjYXJkLWJvZHlcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJjYXJkLXRpdGxlXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwiY2FyZC10ZXh0XCIgfVxuY29uc3QgX2hvaXN0ZWRfOSA9IHtcbiAgbWV0aG9kOiBcInBvc3RcIixcbiAgYWN0aW9uOiBcIlwiLFxuICBjbGFzczogXCJteWZvcm1cIlxufVxuY29uc3QgX2hvaXN0ZWRfMTAgPSB7IGNsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1ob3Jpem9udGFsXCIgfVxuY29uc3QgX2hvaXN0ZWRfMTEgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcIm9wdGlvblwiLCB7IHZhbHVlOiBcIjFcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfMTIgPSB7IGNsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBhY3RpdmUgaXRlbSB3LTUwXCIgfVxuY29uc3QgX2hvaXN0ZWRfMTMgPSB7IGNsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBpdGVtIHctNTBcIiB9XG5jb25zdCBfaG9pc3RlZF8xNCA9IHtcbiAga2V5OiAwLFxuICBjbGFzczogXCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbFwiXG59XG5jb25zdCBfaG9pc3RlZF8xNSA9IHsgY2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIHctNTBcIiB9XG5jb25zdCBfaG9pc3RlZF8xNiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwgeyBjbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gdy01MFwiIH0sIFwiQSBzZWNvbmQgaXRlbVwiLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfMTcgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7IGNsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgIGhyZWY6IFwiI1wiLFxuICAgIGNsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gIH0sIFwiRGFsZWpcIilcbl0sIC0xIC8qIEhPSVNURUQgKi8pXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfaG9pc3RlZF8xLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2hvaXN0ZWRfMyxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgICAgICAgICBzcmM6IGAkeyRkYXRhLnF1aXouaW1hZ2V9YCxcbiAgICAgICAgICBjbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfNSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoNVwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRkYXRhLnF1aXoudGl0bGUpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzgsIFwiIFF1ZXN0aW9uOiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJGRhdGEucXVpei5xdWVzdGlvbiksIDEgLyogVEVYVCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzZWxlY3RcIiwgX2hvaXN0ZWRfOSwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBfaG9pc3RlZF8xMCwgW1xuICAgICAgICAgICAgX2hvaXN0ZWRfMTEsXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwgX2hvaXN0ZWRfMTIsIF90b0Rpc3BsYXlTdHJpbmcoJGRhdGEucXVpei5vcHRpb25fb25lKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsaVwiLCBfaG9pc3RlZF8xMywgX3RvRGlzcGxheVN0cmluZygkZGF0YS5xdWl6Lm9wdGlvbl90d28pLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgKCRkYXRhLnF1aXoub3B0aW9uX3RocmVlKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwidWxcIiwgX2hvaXN0ZWRfMTQsIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwgX2hvaXN0ZWRfMTUsIF90b0Rpc3BsYXlTdHJpbmcoJGRhdGEucXVpei5vcHRpb25fdGhyZWUpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAgIF9ob2lzdGVkXzE2XG4gICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICBdKSxcbiAgICAgICAgX2hvaXN0ZWRfMTdcbiAgICAgIF0pLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgXCJhdXRob3I6IFwiICsgX3RvRGlzcGxheVN0cmluZygkZGF0YS5xdWl6LmF1dGhvciksIDEgLyogVEVYVCAqLylcbiAgICBdKVxuICBdKSlcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBT0E7QUFBQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=template&id=6aa12990\n");

/***/ })

})