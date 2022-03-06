webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {},\n  created: function created() {\n    console.log(this.slug);\n  },\n  data: function data() {\n    return {\n      quiz: [],\n      slug: this.$route.params.slug,\n      answers: [],\n      selectedItem: null\n    };\n  },\n  methods: {\n    handleSelectItem: function handleSelectItem(item, event) {\n      this.selectedItem = event.target;\n      var options = document.getElementsByClassName(\"option\");\n      console.log(options);\n      options.forEach(function (element) {\n        if (element.classList.contains(\"active\")) {\n          element.classList.remove(\"active\");\n        }\n      });\n      event.target.classList.add(\"active\");\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://127.0.0.1:8000/api/quizes/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.quiz = data;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNsdWcpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHF1aXo6IFtdLFxyXG4gICAgICBzbHVnOiB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyxcclxuICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtKGl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgICBcclxuICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG4gICAgICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcbiAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcXVpemVzL2AgKyB0aGlzLnNsdWcgKyBgL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5xdWl6ID0gZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWRBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFuQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})