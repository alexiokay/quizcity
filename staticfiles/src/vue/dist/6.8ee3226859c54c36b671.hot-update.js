webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/AddQuiz.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddQuizPre.vue */ \"./views/quizes/AddQuizPre.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddQuiz',\n  components: {\n    AddQuizPre: _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      categories: [],\n      questionDivs: 1,\n      buttonsCount: 2,\n      mode: null\n    };\n  },\n  methods: {\n    route: function route(to) {\n      if (to === 'new') this.mode = 'new';else console.log(\"existing\");\n    },\n    addAnswer: function addAnswer() {\n      if (this.buttonsCount < 3) {\n        this.buttonsCount++;\n        var answerDiv = document.getElementById(\"answer 1\");\n        var questionDiv = document.getElementById('questionDiv');\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        removeAnswerButton.disabled = false;\n        var answerInput = answerDiv.cloneNode(true);\n        answerInput.id = \"answer \" + this.buttonsCount;\n        answerInput.innerHTML = answerInput.innerHTML.replace(/1/g, \"3\");\n        var input = document.createElement(\"input\");\n        input.id = \"AnswerId \" + this.buttonsCount, input.classList.add(\"AnswerInput\");\n        questionDiv.insertBefore(answerInput, addAnswerButton);\n        console.log(this.buttonsCount);\n      } else if (this.buttonsCount === 3) {\n        this.buttonsCount++;\n\n        var _answerDiv = document.getElementById(\"answer 1\");\n\n        var _questionDiv = document.getElementById('questionDiv');\n\n        var _addAnswerButton = document.getElementById(\"addAnswerButton\");\n\n        var _answerInput = _answerDiv.cloneNode(true);\n\n        _answerInput.id = \"answer \" + this.buttonsCount;\n        _answerInput.innerHTML = _answerInput.innerHTML.replace(/1/g, \"4\");\n\n        var _input = document.createElement(\"input\");\n\n        _input.id = \"AnswerId \" + this.buttonsCount, _input.classList.add(\"AnswerInput\");\n\n        _questionDiv.insertBefore(_answerInput, _addAnswerButton);\n\n        _addAnswerButton.disabled = true;\n        console.log(this.buttonsCount);\n      }\n    },\n    removeAnswer: function removeAnswer() {\n      if (this.buttonsCount < 4) {\n        var lastInput = document.getElementById(\"answer 3\");\n        lastInput.remove();\n        this.buttonsCount--;\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        removeAnswerButton.disabled = true;\n      } else if (this.buttonsCount === 4) {\n        var _lastInput = document.getElementById(\"answer 4\");\n\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        addAnswerButton.disabled = false;\n\n        _lastInput.remove();\n\n        this.buttonsCount--;\n      }\n    },\n    addQuestion: function addQuestion() {\n      var answerInputs = document.getElementsByClassName(\"AnswerInput\");\n      var questionInput = document.createElement(\"input\");\n      var questionsdiv = document.getElementById(\"questions\");\n      var questionDiv = document.getElementById(\"questionValue\");\n      var labelQuestion = document.createElement(\"LABEL\");\n      labelQuestion.textContent = \"Question: \";\n      var labelAnswerOne = document.createElement(\"LABEL\");\n      labelAnswerOne.textContent = \"Answer 1: \";\n      var labelAnswerTwo = document.createElement(\"LABEL\");\n      labelAnswerTwo.textContent = \"Answer 2: \";\n      var labelAnswerThree = document.createElement(\"LABEL\");\n      labelAnswerThree.textContent = \"Answer 3: \";\n      var labelAnswerFour = document.createElement(\"LABEL\");\n      labelAnswerFour.textContent = \"Answer 4: \";\n      var answerOne = document.getElementById(\"AnswerId 1\");\n      var answerTwo = document.getElementById(\"AnswerId 2\");\n      questionInput.id = \"question\", questionInput.name = \"question\", questionInput.value = questionDiv.value;\n      var answerOneInput = document.createElement(\"input\");\n      answerOneInput.id = \"answer_one\", answerOneInput.name = \"answer\", answerOneInput.value = answerOne.value;\n      var answerTwoInput = document.createElement(\"input\");\n      answerTwoInput.id = \"answer_two\", answerTwoInput.name = \"answer\", answerTwoInput.value = answerTwo.value;\n      questionsdiv.appendChild(labelQuestion);\n      questionsdiv.appendChild(questionInput);\n      questionsdiv.appendChild(labelAnswerOne);\n      questionsdiv.appendChild(answerOneInput);\n      questionsdiv.appendChild(labelAnswerTwo);\n      questionsdiv.appendChild(answerTwoInput);\n      console.log(\"answerInputs len: \" + answerInputs.length);\n\n      if (answerInputs.length > 2) {\n        var answerThree = document.getElementById(\"AnswerId 3\");\n        var answerThreeInput = document.createElement(\"input\");\n        answerThreeInput.id = \"answer_three\", answerThreeInput.name = \"answer\", answerThreeInput.value = answerThree.value;\n        questionsdiv.appendChild(labelAnswerThree);\n        questionsdiv.appendChild(answerThreeInput);\n      }\n\n      if (answerInputs.length > 3) {\n        var answerFour = document.getElementById(\"AnswerId 4\");\n        var answerFourInput = document.createElement(\"input\");\n        answerFourInput.id = \"answer_four\", answerFourInput.name = \"answer\", answerFourInput.value = answerFour.value;\n        questionsdiv.appendChild(labelAnswerFour);\n        questionsdiv.appendChild(answerFourInput);\n      }\n\n      questionDiv.value = \"\";\n\n      for (var i = 0, len = answerInputs.length; i < len; i++) {\n        answerInputs[i].value = \"\";\n      }\n    },\n    addAnswerx: function addAnswerx(event) {\n      var answerDiv = document.getElementById(\"answer 1\");\n      var answerInput = answerDiv.cloneNode(true);\n      answerInput.id = \"answer \" + this.answerButtons;\n      var questionDiv = document.getElementById('questionDiv ' + event.target.id);\n      questionDiv.insertBefore(answerInput, questionDiv.lastChild);\n    },\n    addQuestionx: function addQuestionx() {\n      this.questionDivs++;\n      var questionDiv = document.getElementById(\"questionDiv 1\");\n      var nextQuestion = questionDiv.cloneNode(true);\n      var Addbutton = document.getElementById(\"1\");\n      var newAddbutton = Addbutton.cloneNode(true);\n      newAddbutton.id = this.questionDivs;\n      newAddbutton.addEventListener(\"click\", this.addAnswer, false);\n      nextQuestion.replaceChild(newAddbutton, nextQuestion.lastChild);\n      nextQuestion.id = \"questionDiv \" + String(this.questionDivs);\n      var form = document.getElementById('form');\n      form.appendChild(nextQuestion);\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://localhost:8002/\" + \"api/categories/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.categories = data;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/NTkwYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm1vZGUgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9kZXRhaWxzL1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICBRdWl6IE5hbWU6IDxpbnB1dCBuYW1lPVwiVGl0bGVcIiBpZD1cIlRpdGxlXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInR5cGUgdGl0bGVcIj4gPGJyPlxyXG4gICAgICAgIERlc2NyaXB0aW9uOiA8aW5wdXQgbmFtZT1cIkRlc2NyaXB0aW9uXCIgaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGRlc2NyaXB0aW9uXCI+IDxicj5cclxuICAgICAgICBJbWFnZTogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIkltYWdlXCIgaWQ9XCJJbWFnZVwiIHZhbHVlPVwiXCI+IDxicj5cclxuICAgICAgICBDYXRlZ29yeSA8c2VsZWN0IG5hbWU9XCJDYXRlZ29yeVwiIGlkPVwiQ2F0ZWdvcnlcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cImNhdGVnb3J5LmNhdGVnb3J5XCIgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCI+e3tjYXRlZ29yeS5jYXRlZ29yeX19PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+IDxicj4gPGJyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPiA8YnI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbkRpdlwiIGlkPVwicXVlc3Rpb25EaXZcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgUXVlc3Rpb246IDxpbnB1dCBpZD1cInF1ZXN0aW9uVmFsdWVcIj4gPGJyPjxicj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFuc3dlciAxXCIgY2xhc3M9XCJhbnN3ZXJcIj5BbnN3ZXIgMSA8aW5wdXQgY2xhc3M9XCJBbnN3ZXJJbnB1dFwiIGlkPVwiQW5zd2VySWQgMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDFcIj5cclxuICAgICAgICAgICAgICAgIENvcnJlY3RcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbnN3ZXIgMlwiIGNsYXNzPVwiYW5zd2VyXCI+QW5zd2VyIDIgPGlucHV0IGNsYXNzPVwiQW5zd2VySW5wdXRcIiBpZD1cIkFuc3dlcklkIDJcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZsZXhSYWRpb0RlZmF1bHRcIiBpZD1cImZsZXhSYWRpb0RlZmF1bHQxXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICAgICAgQ29ycmVjdFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJhZGRBbnN3ZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJhZGRBbnN3ZXJCdXR0b25cIj4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInJlbW92ZUFuc3dlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cInJlbW92ZUFuc3dlckJ1dHRvblwiPi08L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRRdWVzdGlvbigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQgUXVlc3Rpb248L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEFkZFF1aXpQcmUgdi1pZj1cIm1vZGUgPT09IG51bGxcIiBAbWVzc2FnZT1cInJvdXRlKCRldmVudClcIj48L0FkZFF1aXpQcmU+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFkZFF1aXpQcmUgZnJvbSAnLi9BZGRRdWl6UHJlLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdBZGRRdWl6JyxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBZGRRdWl6UHJlLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRGl2czogMSxcclxuICAgICAgICAgICAgYnV0dG9uc0NvdW50OiAyLFxyXG4gICAgICAgICAgICBtb2RlOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByb3V0ZSh0bykge1xyXG4gICAgICAgICAgICBpZiAodG8gPT09ICduZXcnKSB0aGlzLm1vZGUgPSAnbmV3J1xyXG4gICAgICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiZXhpc3RpbmdcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZEFuc3dlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uc0NvdW50IDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zQ291bnQrK1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyIDFcIilcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbkRpdicpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1vdmVBbnN3ZXJCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIGxldCBhZGRBbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEFuc3dlckJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5zd2VyQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlcklucHV0ID0gYW5zd2VyRGl2LmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYW5zd2VySW5wdXQuaWQgPSBcImFuc3dlciBcIiArIHRoaXMuYnV0dG9uc0NvdW50XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJJbnB1dC5pbm5lckhUTUwgPSBhbnN3ZXJJbnB1dC5pbm5lckhUTUwucmVwbGFjZSgvMS9nLCBcIjNcIilcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuaWQ9XCJBbnN3ZXJJZCBcIit0aGlzLmJ1dHRvbnNDb3VudCwgaW5wdXQuY2xhc3NMaXN0LmFkZChcIkFuc3dlcklucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkRpdi5pbnNlcnRCZWZvcmUoYW5zd2VySW5wdXQsIGFkZEFuc3dlckJ1dHRvbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uc0NvdW50KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5idXR0b25zQ291bnQgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uc0NvdW50KytcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlciAxXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25EaXYnKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFkZEFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQW5zd2VyQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VySW5wdXQgPSBhbnN3ZXJEaXYuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJJbnB1dC5pZCA9IFwiYW5zd2VyIFwiICsgdGhpcy5idXR0b25zQ291bnRcclxuICAgICAgICAgICAgICAgIGFuc3dlcklucHV0LmlubmVySFRNTCA9IGFuc3dlcklucHV0LmlubmVySFRNTC5yZXBsYWNlKC8xL2csIFwiNFwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZD1cIkFuc3dlcklkIFwiK3RoaXMuYnV0dG9uc0NvdW50LCBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiQW5zd2VySW5wdXRcIilcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uRGl2Lmluc2VydEJlZm9yZShhbnN3ZXJJbnB1dCwgYWRkQW5zd2VyQnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWRkQW5zd2VyQnV0dG9uLmRpc2FibGVkPXRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uc0NvdW50KVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVBbnN3ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbnNDb3VudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlciAzXCIpXHJcbiAgICAgICAgICAgICAgICBsYXN0SW5wdXQucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uc0NvdW50LS1cclxuICAgICAgICAgICAgICAgIGxldCByZW1vdmVBbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUFuc3dlckJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5zd2VyQnV0dG9uLmRpc2FibGVkPXRydWVcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5idXR0b25zQ291bnQgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlciA0XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkQW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRBbnN3ZXJCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIGFkZEFuc3dlckJ1dHRvbi5kaXNhYmxlZD1mYWxzZVxyXG4gICAgICAgICAgICAgICAgbGFzdElucHV0LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnNDb3VudC0tXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkUXVlc3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiQW5zd2VySW5wdXRcIilcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25zZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbnNcIilcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblZhbHVlXCIpXHJcblxyXG4gICAgICAgICAgICBsZXQgbGFiZWxRdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKVxyXG4gICAgICAgICAgICBsYWJlbFF1ZXN0aW9uLnRleHRDb250ZW50PVwiUXVlc3Rpb246IFwiXHJcbiAgICAgICAgICAgIGxldCBsYWJlbEFuc3dlck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKVxyXG4gICAgICAgICAgICBsYWJlbEFuc3dlck9uZS50ZXh0Q29udGVudD1cIkFuc3dlciAxOiBcIlxyXG4gICAgICAgICAgICBsZXQgbGFiZWxBbnN3ZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIilcclxuICAgICAgICAgICAgbGFiZWxBbnN3ZXJUd28udGV4dENvbnRlbnQ9XCJBbnN3ZXIgMjogXCJcclxuICAgICAgICAgICAgbGV0IGxhYmVsQW5zd2VyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIilcclxuICAgICAgICAgICAgbGFiZWxBbnN3ZXJUaHJlZS50ZXh0Q29udGVudD1cIkFuc3dlciAzOiBcIlxyXG4gICAgICAgICAgICBsZXQgbGFiZWxBbnN3ZXJGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpXHJcbiAgICAgICAgICAgIGxhYmVsQW5zd2VyRm91ci50ZXh0Q29udGVudD1cIkFuc3dlciA0OiBcIlxyXG5cclxuICAgICAgICAgICAgbGV0IGFuc3dlck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5zd2VySWQgMVwiKVxyXG4gICAgICAgICAgICBsZXQgYW5zd2VyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbnN3ZXJJZCAyXCIpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25JbnB1dC5pZCA9IFwicXVlc3Rpb25cIiwgcXVlc3Rpb25JbnB1dC5uYW1lID0gXCJxdWVzdGlvblwiLCBxdWVzdGlvbklucHV0LnZhbHVlID0gcXVlc3Rpb25EaXYudmFsdWUgXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJPbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICBhbnN3ZXJPbmVJbnB1dC5pZCA9IFwiYW5zd2VyX29uZVwiLCBhbnN3ZXJPbmVJbnB1dC5uYW1lID0gXCJhbnN3ZXJcIiwgIGFuc3dlck9uZUlucHV0LnZhbHVlID0gYW5zd2VyT25lLnZhbHVlIFxyXG4gICAgICAgICAgICBsZXQgYW5zd2VyVHdvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgYW5zd2VyVHdvSW5wdXQuaWQgPSBcImFuc3dlcl90d29cIiwgYW5zd2VyVHdvSW5wdXQubmFtZSA9IFwiYW5zd2VyXCIsICBhbnN3ZXJUd29JbnB1dC52YWx1ZSA9IGFuc3dlclR3by52YWx1ZSBcclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChsYWJlbFF1ZXN0aW9uKVxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25JbnB1dClcclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChsYWJlbEFuc3dlck9uZSlcclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGFuc3dlck9uZUlucHV0KVxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGxhYmVsQW5zd2VyVHdvKVxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQoYW5zd2VyVHdvSW5wdXQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VySW5wdXRzIGxlbjogXCIgKyBhbnN3ZXJJbnB1dHMubGVuZ3RoKVxyXG5cclxuICAgICAgICAgICAgaWYgKGFuc3dlcklucHV0cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyVGhyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFuc3dlcklkIDNcIilcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJUaHJlZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJUaHJlZUlucHV0LmlkID0gXCJhbnN3ZXJfdGhyZWVcIiwgYW5zd2VyVGhyZWVJbnB1dC5uYW1lID0gXCJhbnN3ZXJcIiwgIGFuc3dlclRocmVlSW5wdXQudmFsdWUgPSBhbnN3ZXJUaHJlZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGxhYmVsQW5zd2VyVGhyZWUpXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQoYW5zd2VyVGhyZWVJbnB1dClcclxuXHJcbiAgICAgICAgICAgIH0gaWYgKGFuc3dlcklucHV0cy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5zd2VySWQgNFwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlckZvdXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgYW5zd2VyRm91cklucHV0LmlkID0gXCJhbnN3ZXJfZm91clwiLCBhbnN3ZXJGb3VySW5wdXQubmFtZSA9IFwiYW5zd2VyXCIsICBhbnN3ZXJGb3VySW5wdXQudmFsdWUgPSBhbnN3ZXJGb3VyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQobGFiZWxBbnN3ZXJGb3VyKVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGFuc3dlckZvdXJJbnB1dClcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbkRpdi52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhbnN3ZXJJbnB1dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcklucHV0c1tpXS52YWx1ZSA9IFwiXCJcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgYWRkQW5zd2VyeChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgYW5zd2VyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXIgMVwiKVxyXG4gICAgICAgICAgICBsZXQgYW5zd2VySW5wdXQgPSBhbnN3ZXJEaXYuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgIGFuc3dlcklucHV0LmlkID0gXCJhbnN3ZXIgXCIgKyB0aGlzLmFuc3dlckJ1dHRvbnNcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uRGl2ICcgKyBldmVudC50YXJnZXQuaWQpXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbkRpdi5pbnNlcnRCZWZvcmUoYW5zd2VySW5wdXQsIHF1ZXN0aW9uRGl2Lmxhc3RDaGlsZClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRRdWVzdGlvbngoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25EaXZzKytcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25EaXYgMVwiKVxyXG4gICAgICAgICAgICBsZXQgbmV4dFF1ZXN0aW9uID0gcXVlc3Rpb25EaXYuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgIGxldCBBZGRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjFcIilcclxuICAgICAgICAgICAgbGV0IG5ld0FkZGJ1dHRvbiA9IEFkZGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgbmV3QWRkYnV0dG9uLmlkPXRoaXMucXVlc3Rpb25EaXZzXHJcbiAgICAgICAgICAgIG5ld0FkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hZGRBbnN3ZXIsIGZhbHNlKVxyXG4gICAgICAgICAgICBuZXh0UXVlc3Rpb24ucmVwbGFjZUNoaWxkKG5ld0FkZGJ1dHRvbiwgbmV4dFF1ZXN0aW9uLmxhc3RDaGlsZClcclxuICAgICAgICAgICAgbmV4dFF1ZXN0aW9uLmlkID0gXCJxdWVzdGlvbkRpdiBcIiArIFN0cmluZyh0aGlzLnF1ZXN0aW9uRGl2cylcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG5leHRRdWVzdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvY2F0ZWdvcmllcy9cIilcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5jYXRlZ29yaWVzID0gZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSlcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLnF1ZXN0aW9uRGl2IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6MnB4IDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxufVxyXG5cclxuI3F1ZXN0aW9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjoycHggO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG59XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBckpBO0FBdUpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUEzS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js\n");

/***/ })

})