webpackHotUpdate("app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

/***/ "./node_modules/core-js/internals/clear-error-stack.js":
false,

/***/ "./node_modules/core-js/internals/error-stack-installable.js":
false,

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
false,

/***/ "./node_modules/core-js/internals/install-error-cause.js":
false,

/***/ "./node_modules/core-js/internals/normalize-string-argument.js":
false,

/***/ "./node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
false,

/***/ "./node_modules/core-js/modules/es.error.cause.js":
false,

/***/ "./src/assets/expandSidebar.js":
/*!*************************************!*\
  !*** ./src/assets/expandSidebar.js ***!
  \*************************************/
/*! exports provided: expandSidebar, toggleClassMenu, OnTransitionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandSidebar\", function() { return expandSidebar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClassMenu\", function() { return toggleClassMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OnTransitionEnd\", function() { return OnTransitionEnd; });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction expandSidebar() {\n  if (window.innerWidth < 991.5) {\n    var sidebar = document.querySelector(\".sidebar\");\n    var main = document.querySelector(\".main\");\n    var bottombar = document.querySelector(\".bottombar\");\n    var timeout = null;\n    if (sidebar.classList.contains(\"sidebar--animation\")) sidebar.classList.remove(\"sidebar--animation\"), sidebar.classList.add(\"sidebar-back-animation\"), timeout = setTimeout(function () {\n      sidebar.style.width = \"0px\";\n    }, 590);else sidebar.classList.remove(\"sidebar-back-animation\"), clearTimeout(timeout), sidebar.style.width = \"16rem\", sidebar.classList.add(\"sidebar--animation\");\n    main.style.filter === \"grayscale(100%) opacity(0.7)\" ? main.style.filter = \"none\" : main.style.filter = \"grayscale(100%) opacity(0.7)\";\n    bottombar.style.filter === \"grayscale(100%)\" ? bottombar.style.filter = \"none\" : bottombar.style.filter = \"grayscale(100%)\";\n  }\n}\nfunction toggleClassMenu() {\n  console.log(\"works\");\n  var menu = document.querySelector('.menu');\n  menu.classList.add(\"menu--animatable\");\n\n  if (!menu.classList.contains(\"menu--visible\")) {\n    menu.classList.add(\"menu--visible\");\n  } else {\n    menu.classList.remove(\"menu--visible\");\n  }\n}\nfunction OnTransitionEnd() {\n  var menu = document.querySelector(\".menu\");\n  menu.classList.remove(\"menu--animatable\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanM/YzkxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXhwYW5kU2lkZWJhcigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MS41KSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tYmFyXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci0tYW5pbWF0aW9uXCIpKSBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLS1hbmltYXRpb25cIiksIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYmFjay1hbmltYXRpb25cIiksIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtzaWRlYmFyLnN0eWxlLndpZHRoID0gXCIwcHhcIjt9LCA1OTApXHJcbiAgICAgICAgZWxzZSBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWJhY2stYW5pbWF0aW9uXCIpLCBjbGVhclRpbWVvdXQodGltZW91dCksIHNpZGViYXIuc3R5bGUud2lkdGggPSBcIjE2cmVtXCIsIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItLWFuaW1hdGlvblwiKVxyXG4gICAgICAgIFxyXG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID09PSBcImdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNylcIiA/IG1haW4uc3R5bGUuZmlsdGVyID0gXCJub25lXCIgOiBtYWluLnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KVwiXHJcbiAgICAgICAgYm90dG9tYmFyLnN0eWxlLmZpbHRlciA9PT0gXCJncmF5c2NhbGUoMTAwJSlcIiA/IGJvdHRvbWJhci5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIiA6IGJvdHRvbWJhci5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSgxMDAlKVwiXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzc01lbnUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIndvcmtzXCIpXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFuaW1hdGFibGVcIik7ICAgICAgICBcclxuICAgIGlmKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtLXZpc2libGVcIikpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS0tdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tdmlzaWJsZVwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgICAgICBcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hbmltYXRhYmxlXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/expandSidebar.js\n");

/***/ })

})