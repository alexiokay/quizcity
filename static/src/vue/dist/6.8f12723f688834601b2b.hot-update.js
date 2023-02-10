webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/AddQuiz.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddQuizPre.vue */ \"./views/quizes/AddQuizPre.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddQuiz',\n  components: {\n    AddQuizPre: _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  props: {\n    mode: null\n  },\n  data: function data() {\n    return {\n      categories: [],\n      questionDivs: 1,\n      buttonsCount: 2,\n      mode: null\n    };\n  },\n  methods: {\n    route: function route(to) {\n      if (to === 'new') this.mode = 'new';else this.mode = 'existing';\n    },\n    addAnswer: function addAnswer() {\n      if (this.buttonsCount < 3) {\n        this.buttonsCount++;\n        var answerDiv = document.getElementById(\"answer 1\");\n        var questionDiv = document.getElementById('questionDiv');\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        removeAnswerButton.disabled = false;\n        var answerInput = answerDiv.cloneNode(true);\n        answerInput.id = \"answer \" + this.buttonsCount;\n        answerInput.innerHTML = answerInput.innerHTML.replace(/1/g, \"3\");\n        var input = document.createElement(\"input\");\n        input.id = \"AnswerId \" + this.buttonsCount, input.classList.add(\"AnswerInput\");\n        questionDiv.insertBefore(answerInput, addAnswerButton);\n        console.log(this.buttonsCount);\n      } else if (this.buttonsCount === 3) {\n        this.buttonsCount++;\n\n        var _answerDiv = document.getElementById(\"answer 1\");\n\n        var _questionDiv = document.getElementById('questionDiv');\n\n        var _addAnswerButton = document.getElementById(\"addAnswerButton\");\n\n        var _answerInput = _answerDiv.cloneNode(true);\n\n        _answerInput.id = \"answer \" + this.buttonsCount;\n        _answerInput.innerHTML = _answerInput.innerHTML.replace(/1/g, \"4\");\n\n        var _input = document.createElement(\"input\");\n\n        _input.id = \"AnswerId \" + this.buttonsCount, _input.classList.add(\"AnswerInput\");\n\n        _questionDiv.insertBefore(_answerInput, _addAnswerButton);\n\n        _addAnswerButton.disabled = true;\n        console.log(this.buttonsCount);\n      }\n    },\n    removeAnswer: function removeAnswer() {\n      if (this.buttonsCount < 4) {\n        var lastInput = document.getElementById(\"answer 3\");\n        lastInput.remove();\n        this.buttonsCount--;\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        removeAnswerButton.disabled = true;\n      } else if (this.buttonsCount === 4) {\n        var _lastInput = document.getElementById(\"answer 4\");\n\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        addAnswerButton.disabled = false;\n\n        _lastInput.remove();\n\n        this.buttonsCount--;\n      }\n    },\n    addQuestion: function addQuestion() {\n      var answerInputs = document.getElementsByClassName(\"AnswerInput\");\n      var questionInput = document.createElement(\"input\");\n      var questionsdiv = document.getElementById(\"questions\");\n      var questionDiv = document.getElementById(\"questionValue\");\n      var labelQuestion = document.createElement(\"LABEL\");\n      labelQuestion.textContent = \"Question: \";\n      var labelAnswerOne = document.createElement(\"LABEL\");\n      labelAnswerOne.textContent = \"Answer 1: \";\n      var labelAnswerTwo = document.createElement(\"LABEL\");\n      labelAnswerTwo.textContent = \"Answer 2: \";\n      var labelAnswerThree = document.createElement(\"LABEL\");\n      labelAnswerThree.textContent = \"Answer 3: \";\n      var labelAnswerFour = document.createElement(\"LABEL\");\n      labelAnswerFour.textContent = \"Answer 4: \";\n      var answerOne = document.getElementById(\"AnswerId 1\");\n      var answerTwo = document.getElementById(\"AnswerId 2\");\n      questionInput.id = \"question\", questionInput.name = \"question\", questionInput.value = questionDiv.value;\n      var answerOneInput = document.createElement(\"input\");\n      answerOneInput.id = \"answer_one\", answerOneInput.name = \"answer\", answerOneInput.value = answerOne.value;\n      var answerTwoInput = document.createElement(\"input\");\n      answerTwoInput.id = \"answer_two\", answerTwoInput.name = \"answer\", answerTwoInput.value = answerTwo.value;\n      questionsdiv.appendChild(labelQuestion);\n      questionsdiv.appendChild(questionInput);\n      questionsdiv.appendChild(labelAnswerOne);\n      questionsdiv.appendChild(answerOneInput);\n      questionsdiv.appendChild(labelAnswerTwo);\n      questionsdiv.appendChild(answerTwoInput);\n      console.log(\"answerInputs len: \" + answerInputs.length);\n\n      if (answerInputs.length > 2) {\n        var answerThree = document.getElementById(\"AnswerId 3\");\n        var answerThreeInput = document.createElement(\"input\");\n        answerThreeInput.id = \"answer_three\", answerThreeInput.name = \"answer\", answerThreeInput.value = answerThree.value;\n        questionsdiv.appendChild(labelAnswerThree);\n        questionsdiv.appendChild(answerThreeInput);\n      }\n\n      if (answerInputs.length > 3) {\n        var answerFour = document.getElementById(\"AnswerId 4\");\n        var answerFourInput = document.createElement(\"input\");\n        answerFourInput.id = \"answer_four\", answerFourInput.name = \"answer\", answerFourInput.value = answerFour.value;\n        questionsdiv.appendChild(labelAnswerFour);\n        questionsdiv.appendChild(answerFourInput);\n      }\n\n      questionDiv.value = \"\";\n\n      for (var i = 0, len = answerInputs.length; i < len; i++) {\n        answerInputs[i].value = \"\";\n      }\n    },\n    addAnswerx: function addAnswerx(event) {\n      var answerDiv = document.getElementById(\"answer 1\");\n      var answerInput = answerDiv.cloneNode(true);\n      answerInput.id = \"answer \" + this.answerButtons;\n      var questionDiv = document.getElementById('questionDiv ' + event.target.id);\n      questionDiv.insertBefore(answerInput, questionDiv.lastChild);\n    },\n    addQuestionx: function addQuestionx() {\n      this.questionDivs++;\n      var questionDiv = document.getElementById(\"questionDiv 1\");\n      var nextQuestion = questionDiv.cloneNode(true);\n      var Addbutton = document.getElementById(\"1\");\n      var newAddbutton = Addbutton.cloneNode(true);\n      newAddbutton.id = this.questionDivs;\n      newAddbutton.addEventListener(\"click\", this.addAnswer, false);\n      nextQuestion.replaceChild(newAddbutton, nextQuestion.lastChild);\n      nextQuestion.id = \"questionDiv \" + String(this.questionDivs);\n      var form = document.getElementById('form');\n      form.appendChild(nextQuestion);\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://localhost:8002/\" + \"api/categories/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.categories = data;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/NTkwYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm1vZGUgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9kZXRhaWxzL1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICBRdWl6IE5hbWU6IDxpbnB1dCBuYW1lPVwiVGl0bGVcIiBpZD1cIlRpdGxlXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInR5cGUgdGl0bGVcIj4gPGJyPlxyXG4gICAgICAgIERlc2NyaXB0aW9uOiA8aW5wdXQgbmFtZT1cIkRlc2NyaXB0aW9uXCIgaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGRlc2NyaXB0aW9uXCI+IDxicj5cclxuICAgICAgICBJbWFnZTogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIkltYWdlXCIgaWQ9XCJJbWFnZVwiIHZhbHVlPVwiXCI+IDxicj5cclxuICAgICAgICBDYXRlZ29yeSA8c2VsZWN0IG5hbWU9XCJDYXRlZ29yeVwiIGlkPVwiQ2F0ZWdvcnlcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cImNhdGVnb3J5LmNhdGVnb3J5XCIgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCI+e3tjYXRlZ29yeS5jYXRlZ29yeX19PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+IDxicj4gPGJyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPiA8YnI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbkRpdlwiIGlkPVwicXVlc3Rpb25EaXZcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgUXVlc3Rpb246IDxpbnB1dCBpZD1cInF1ZXN0aW9uVmFsdWVcIj4gPGJyPjxicj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFuc3dlciAxXCIgY2xhc3M9XCJhbnN3ZXJcIj5BbnN3ZXIgMSA8aW5wdXQgY2xhc3M9XCJBbnN3ZXJJbnB1dFwiIGlkPVwiQW5zd2VySWQgMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDFcIj5cclxuICAgICAgICAgICAgICAgIENvcnJlY3RcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbnN3ZXIgMlwiIGNsYXNzPVwiYW5zd2VyXCI+QW5zd2VyIDIgPGlucHV0IGNsYXNzPVwiQW5zd2VySW5wdXRcIiBpZD1cIkFuc3dlcklkIDJcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZsZXhSYWRpb0RlZmF1bHRcIiBpZD1cImZsZXhSYWRpb0RlZmF1bHQxXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICAgICAgQ29ycmVjdFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJhZGRBbnN3ZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJhZGRBbnN3ZXJCdXR0b25cIj4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInJlbW92ZUFuc3dlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cInJlbW92ZUFuc3dlckJ1dHRvblwiPi08L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRRdWVzdGlvbigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQgUXVlc3Rpb248L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEFkZFF1aXpQcmUgdi1pZj1cIm1vZGUgPT09IG51bGxcIiBAbWVzc2FnZT1cInJvdXRlKCRldmVudClcIj48L0FkZFF1aXpQcmU+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFkZFF1aXpQcmUgZnJvbSAnLi9BZGRRdWl6UHJlLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdBZGRRdWl6JyxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBZGRRdWl6UHJlLFxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZTogbnVsbCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBxdWVzdGlvbkRpdnM6IDEsXHJcbiAgICAgICAgICAgIGJ1dHRvbnNDb3VudDogMixcclxuICAgICAgICAgICAgbW9kZTogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcm91dGUodG8pIHtcclxuICAgICAgICAgICAgaWYgKHRvID09PSAnbmV3JykgdGhpcy5tb2RlID0gJ25ldydcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm1vZGUgPSAnZXhpc3RpbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRBbnN3ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbnNDb3VudCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uc0NvdW50KytcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlciAxXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25EaXYnKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZUFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQW5zd2VyQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkQW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRBbnN3ZXJCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFuc3dlckJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJJbnB1dCA9IGFuc3dlckRpdi5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGFuc3dlcklucHV0LmlkID0gXCJhbnN3ZXIgXCIgKyB0aGlzLmJ1dHRvbnNDb3VudFxyXG4gICAgICAgICAgICAgICAgYW5zd2VySW5wdXQuaW5uZXJIVE1MID0gYW5zd2VySW5wdXQuaW5uZXJIVE1MLnJlcGxhY2UoLzEvZywgXCIzXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGlucHV0LmlkPVwiQW5zd2VySWQgXCIrdGhpcy5idXR0b25zQ291bnQsIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJBbnN3ZXJJbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25EaXYuaW5zZXJ0QmVmb3JlKGFuc3dlcklucHV0LCBhZGRBbnN3ZXJCdXR0b24pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvbnNDb3VudClcclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnV0dG9uc0NvdW50ID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnNDb3VudCsrXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXIgMVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uRGl2JylcclxuICAgICAgICAgICAgICAgIGxldCBhZGRBbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEFuc3dlckJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlcklucHV0ID0gYW5zd2VyRGl2LmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYW5zd2VySW5wdXQuaWQgPSBcImFuc3dlciBcIiArIHRoaXMuYnV0dG9uc0NvdW50XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJJbnB1dC5pbm5lckhUTUwgPSBhbnN3ZXJJbnB1dC5pbm5lckhUTUwucmVwbGFjZSgvMS9nLCBcIjRcIilcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuaWQ9XCJBbnN3ZXJJZCBcIit0aGlzLmJ1dHRvbnNDb3VudCwgaW5wdXQuY2xhc3NMaXN0LmFkZChcIkFuc3dlcklucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkRpdi5pbnNlcnRCZWZvcmUoYW5zd2VySW5wdXQsIGFkZEFuc3dlckJ1dHRvbilcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFkZEFuc3dlckJ1dHRvbi5kaXNhYmxlZD10cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvbnNDb3VudClcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlQW5zd2VyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25zQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXIgM1wiKVxyXG4gICAgICAgICAgICAgICAgbGFzdElucHV0LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnNDb3VudC0tXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1vdmVBbnN3ZXJCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFuc3dlckJ1dHRvbi5kaXNhYmxlZD10cnVlXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnV0dG9uc0NvdW50ID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXIgNFwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFkZEFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQW5zd2VyQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICBhZGRBbnN3ZXJCdXR0b24uZGlzYWJsZWQ9ZmFsc2VcclxuICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zQ291bnQtLVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFkZFF1ZXN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgYW5zd2VySW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkFuc3dlcklucHV0XCIpXHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uc2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zXCIpXHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25WYWx1ZVwiKVxyXG5cclxuICAgICAgICAgICAgbGV0IGxhYmVsUXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIilcclxuICAgICAgICAgICAgbGFiZWxRdWVzdGlvbi50ZXh0Q29udGVudD1cIlF1ZXN0aW9uOiBcIlxyXG4gICAgICAgICAgICBsZXQgbGFiZWxBbnN3ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIilcclxuICAgICAgICAgICAgbGFiZWxBbnN3ZXJPbmUudGV4dENvbnRlbnQ9XCJBbnN3ZXIgMTogXCJcclxuICAgICAgICAgICAgbGV0IGxhYmVsQW5zd2VyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpXHJcbiAgICAgICAgICAgIGxhYmVsQW5zd2VyVHdvLnRleHRDb250ZW50PVwiQW5zd2VyIDI6IFwiXHJcbiAgICAgICAgICAgIGxldCBsYWJlbEFuc3dlclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpXHJcbiAgICAgICAgICAgIGxhYmVsQW5zd2VyVGhyZWUudGV4dENvbnRlbnQ9XCJBbnN3ZXIgMzogXCJcclxuICAgICAgICAgICAgbGV0IGxhYmVsQW5zd2VyRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKVxyXG4gICAgICAgICAgICBsYWJlbEFuc3dlckZvdXIudGV4dENvbnRlbnQ9XCJBbnN3ZXIgNDogXCJcclxuXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFuc3dlcklkIDFcIilcclxuICAgICAgICAgICAgbGV0IGFuc3dlclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5zd2VySWQgMlwiKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSW5wdXQuaWQgPSBcInF1ZXN0aW9uXCIsIHF1ZXN0aW9uSW5wdXQubmFtZSA9IFwicXVlc3Rpb25cIiwgcXVlc3Rpb25JbnB1dC52YWx1ZSA9IHF1ZXN0aW9uRGl2LnZhbHVlIFxyXG4gICAgICAgICAgICBsZXQgYW5zd2VyT25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgYW5zd2VyT25lSW5wdXQuaWQgPSBcImFuc3dlcl9vbmVcIiwgYW5zd2VyT25lSW5wdXQubmFtZSA9IFwiYW5zd2VyXCIsICBhbnN3ZXJPbmVJbnB1dC52YWx1ZSA9IGFuc3dlck9uZS52YWx1ZSBcclxuICAgICAgICAgICAgbGV0IGFuc3dlclR3b0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIGFuc3dlclR3b0lucHV0LmlkID0gXCJhbnN3ZXJfdHdvXCIsIGFuc3dlclR3b0lucHV0Lm5hbWUgPSBcImFuc3dlclwiLCAgYW5zd2VyVHdvSW5wdXQudmFsdWUgPSBhbnN3ZXJUd28udmFsdWUgXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQobGFiZWxRdWVzdGlvbilcclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uSW5wdXQpXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQobGFiZWxBbnN3ZXJPbmUpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXJPbmVJbnB1dClcclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChsYWJlbEFuc3dlclR3bylcclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGFuc3dlclR3b0lucHV0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFuc3dlcklucHV0cyBsZW46IFwiICsgYW5zd2VySW5wdXRzLmxlbmd0aClcclxuXHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXJJbnB1dHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlclRocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbnN3ZXJJZCAzXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyVGhyZWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgYW5zd2VyVGhyZWVJbnB1dC5pZCA9IFwiYW5zd2VyX3RocmVlXCIsIGFuc3dlclRocmVlSW5wdXQubmFtZSA9IFwiYW5zd2VyXCIsICBhbnN3ZXJUaHJlZUlucHV0LnZhbHVlID0gYW5zd2VyVGhyZWUudmFsdWVcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChsYWJlbEFuc3dlclRocmVlKVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGFuc3dlclRocmVlSW5wdXQpXHJcblxyXG4gICAgICAgICAgICB9IGlmIChhbnN3ZXJJbnB1dHMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlckZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFuc3dlcklkIDRcIilcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJGb3VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGFuc3dlckZvdXJJbnB1dC5pZCA9IFwiYW5zd2VyX2ZvdXJcIiwgYW5zd2VyRm91cklucHV0Lm5hbWUgPSBcImFuc3dlclwiLCAgYW5zd2VyRm91cklucHV0LnZhbHVlID0gYW5zd2VyRm91ci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGxhYmVsQW5zd2VyRm91cilcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXJGb3VySW5wdXQpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25EaXYudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYW5zd2VySW5wdXRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJJbnB1dHNbaV0udmFsdWUgPSBcIlwiXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIGFkZEFuc3dlcngoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyIDFcIilcclxuICAgICAgICAgICAgbGV0IGFuc3dlcklucHV0ID0gYW5zd2VyRGl2LmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICBhbnN3ZXJJbnB1dC5pZCA9IFwiYW5zd2VyIFwiICsgdGhpcy5hbnN3ZXJCdXR0b25zXHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbkRpdiAnICsgZXZlbnQudGFyZ2V0LmlkKVxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25EaXYuaW5zZXJ0QmVmb3JlKGFuc3dlcklucHV0LCBxdWVzdGlvbkRpdi5sYXN0Q2hpbGQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkUXVlc3Rpb254KCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uRGl2cysrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uRGl2IDFcIilcclxuICAgICAgICAgICAgbGV0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uRGl2LmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICBsZXQgQWRkYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIxXCIpXHJcbiAgICAgICAgICAgIGxldCBuZXdBZGRidXR0b24gPSBBZGRidXR0b24uY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgIG5ld0FkZGJ1dHRvbi5pZD10aGlzLnF1ZXN0aW9uRGl2c1xyXG4gICAgICAgICAgICBuZXdBZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkQW5zd2VyLCBmYWxzZSlcclxuICAgICAgICAgICAgbmV4dFF1ZXN0aW9uLnJlcGxhY2VDaGlsZChuZXdBZGRidXR0b24sIG5leHRRdWVzdGlvbi5sYXN0Q2hpbGQpXHJcbiAgICAgICAgICAgIG5leHRRdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25EaXYgXCIgKyBTdHJpbmcodGhpcy5xdWVzdGlvbkRpdnMpXHJcblxyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChuZXh0UXVlc3Rpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL2NhdGVnb3JpZXMvXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMuY2F0ZWdvcmllcyA9IGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5xdWVzdGlvbkRpdiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOjJweCA7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbn1cclxuXHJcbiNxdWVzdGlvbnMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6MnB4IDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxufVxyXG5cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXJKQTtBQXVKQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBOUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js\n");

/***/ })

})