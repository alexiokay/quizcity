webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n // TODO: Make imposible to change user points in code, hack\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      rounds: [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"],\n      players: [{\n        // load player data here\n        \"id\": 0,\n        \"name\": \"guest\",\n        \"photo_url\": \"http://10.10.10.23:8002/\" + \"static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      }, {\n        // load player data here\n        \"id\": 1,\n        \"name\": \"guest2\",\n        \"photo_url\": \"http://10.10.10.23:8002/\" + \"static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      } // Load opponent data here\n      ],\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false,\n      isChoosed: false,\n      timer: false,\n      socket: null,\n      EmptyIcon: \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\",\n      CurrentIcon: \"http://10.10.10.23:8002/\" + \"static/assets/297806.png\",\n      // current\n      IncorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786049.png\",\n      // Failed\n      CorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786042.png\" // correct\n\n    };\n  },\n  watch: {\n    loading: function loading() {\n      var progresBar = document.getElementById(\"quiz-timer\");\n\n      if (this.loading === false) {\n        this.timer = true;\n        progresBar.animate({\n          width: \"100%\"\n        }, 5000); // let animate = progresBar.getAnimations\n        // setTimeout(() =>  {console.log(\"tiime is over\")}  }, 5000)\n        // Add next round funcionality after timeout\n        // Stop animation if user choosenanswer\n        // stop next round timeout\n      } else if (this.timer === true) {\n        var animations = progresBar.getAnimations();\n        if (animations.length > 0) animations[0].finish();\n        this.timer = false;\n      }\n    }\n  },\n  methods: {\n    connectPlayer: function connectPlayer() {\n      this.socket = new WebSocket('ws://10.10.10.23:8002/ws/playrooms/');\n\n      this.socket.onmessage = function (event) {\n        var data = event.data;\n        console.log(data);\n      };\n    },\n    playDuel: function playDuel() {\n      this.socket.send(\"whats my name?\");\n    },\n    saveQuizTaker: function saveQuizTaker() {},\n    loadOppponent: function loadOppponent() {\n      // Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n      this.$router.push({\n        name: 'Friends',\n        params: {\n          quiz_to_invite: this.quiz.slug\n        }\n      });\n    },\n    loadNextRound: function loadNextRound() {\n      var _this = this;\n\n      if (this.quizFinished === false) {\n        this.loading = true;\n        setTimeout(function () {\n          return _this.loading = false;\n        }, 2000);\n        this.isChoosed = false; // set current icon for\n\n        this.players[0].rounds[this.actualQuiz] = this.CurrentIcon; // if (this.socket === null) this.connectPlayer()\n        // this.playDuel()\n      }\n    },\n    checkCorrectAnswer: function checkCorrectAnswer() {\n      // TODO: Create animation\n      if (this.selectedAnswer == this.correctAnswer) {\n        this.rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.points += 10;\n      } else {\n        this.rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n      }\n    },\n    resetOptions: function resetOptions() {\n      var _this2 = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\");\n        option.classList.add(\"option-hover\"); // adds option-hover to set hover effect\n        //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this2.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this3 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this3.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this3.correctAnswer = answer[\"text\"];\n          }); // if there is no more question, QUIZ FINISHED:\n        } else if (this.actualQuizNumber == 5) {\n          this.question = \"\";\n          this.quizFinished = true; // Prevents loading next question\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      }\n\n      this.loadNextRound(); //increment Actual Question +1 if quiz hasnt been finished\n\n      if (!this.quizFinished && this.actualQuiz <= 5) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item) {\n      var _this4 = this;\n\n      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (this.isChoosed === false) {\n        var progresBar = document.getElementById(\"quiz-timer\");\n        var animations = progresBar.getAnimations();\n\n        if (animations.length > 0) {\n          animations[0].pause();\n        }\n\n        setTimeout(function () {\n          return _this4.getActualQuiz(_this4.actualQuiz);\n        }, 2000);\n        if (this.selectedAnswer === \"\") this.selectedAnswer = item; // Check if selected answer is true\n\n        this.checkCorrectAnswer();\n        this.quizStarted = true; // set next round icon to Current quiz icon\n\n        this.rounds[this.actualQuiz] = this.CurrentIcon;\n        event.target.classList.add(\"active\");\n        var options = document.getElementsByClassName(\"option\");\n        Array.from(options).forEach(function (option) {\n          if (option.textContent !== _this4.correctAnswer && option.textContent === event.target.textContent) {\n            option.classList.add(\"incorrect\");\n          }\n\n          if (option.textContent === _this4.correctAnswer) option.classList.add(\"correct\");\n          option.classList.remove(\"option-hover\"); // remove hover effects from option after choose answer\n        });\n      }\n\n      this.isChoosed = true;\n    }\n  },\n  mounted: function mounted() {\n    var _this5 = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this5.quiz = data;\n    }).then(function (data) {\n      return _this5.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n    console.log(this.quiz.get_random_question());\n  } //created() {\n  ///  this.connection = new WebSocket(\"wss://echo.websocket.org\")\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8IS0tIENoYW5nZSB0byB2LXNob3cgdG8gaW5jcmVhc2UgcGVyZm9ybWFjZSwgYnV0IHlvdSBoYXZlIHRvIHJlcGFpciBidWcgd2l0aCBub3Qgc2hvd2luZyBhbnN3ZXIgMCBzb21ldGltZXMgLS0+XHJcbiAgPGRpdiB2LXNob3c9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwbGF5ZXItaW5mb1wiIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWluZm8tY29udGVudFwiIHYtZm9yPVwicGxheWVyIGluIHBsYXllcnNcIiA6a2V5PVwicGxheWVyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwicGxheWVyLXBob3RvXCIgOmNsYXNzPVwiYHBsYXllci1waG90by0ke3BsYXllci5pZH1gXCIgOnNyYz1cInBsYXllci5waG90b191cmxcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicGxheWVyLW5hbWVcIiA6Y2xhc3M9XCJgcGxheWVyLW5hbWUtJHtwbGF5ZXIuaWR9YFwiID57e3BsYXllci5uYW1lfX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzBdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbMV19YFwiPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHhcIiA6c3JjPVwiYCR7cGxheWVyLnJvdW5kc1syXX1gXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzNdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbNF19YFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDwhLS0gVE9ETzogQ2hhbmdlIHRvIHVzZXJzW10ubGVuZ3RoPT09MiB3aGVuIHByb2QgYW5kIGxvYWQgdXNlciBpbiBwYXJlbnQgY29tcG9uZW50IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cIm1hcmdpbjogYXV0b1wiPlxyXG4gICAgPGltZyA6c3JjPVwiYCR7cXVpei5pbWFnZX1gXCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8aDEgaWQ9XCJ0aXRsZVwiPnt7IHRoaXMucXVpeltcInRpdGxlXCJdIH19PC9oMT5cclxuICAgICAgPGg1IGlkPVwiY291bnRlclwiIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgIHt7IGFjdHVhbFF1aXogfX0gLyB7eyBxdWl6W1wibnVtYmVyX29mX3F1ZXN0aW9uc1wiXSB9fVxyXG4gICAgICA8L2g1PlxyXG4gICAgICA8aDMgdi1pZj1cInRoaXMucXVlc3Rpb25cIiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgIFF1ZXN0aW9uOiB7eyB0aGlzLnF1ZXN0aW9uIH19XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHYtc2hvdz1cImFuc3dlcnNbMF1cIj5cclxuICAgICAgICA8ZGl2IGlkPVwicXVpei10aW1lclwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDowJVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCB2LWlmPVwibG9hZGluZyA9PT0gZmFsc2VcIiBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1ob3Jpem9udGFsIFwiPiA8IS0tIFdBUk5JTkchIHBsZWFzZSBkb250IGNoYW5nZSB2LWlmIHN0YXRlbWVudCBpdCBtYXkgY2F1c2UgbG9zdCBhbnN3ZXJzIGJ1ZyAtLT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzBdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1swXSwgJGV2ZW50KVwiIFxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1swXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LXNob3c9XCJ0aGlzLmFuc3dlcnNbMV1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzFdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjJcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIG9wdGlvbi1ob3ZlciBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1syXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBvcHRpb24taG92ZXIgbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzJdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1szXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbM10sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiNFwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1szXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblxyXG4gICAgICA8IS0tIFBsYXkgYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCI+XHJcbiAgICAgICAgPCEtLVJhbmtzIC0tPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+U29sbzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJsb2FkT3BwcG9uZW50KClcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgaWQ9XCJzdGFydC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCI+UGxheSB3aXRoIGZyaWVuZDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj48YnI+PGJyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGlkPVwic3RhcnQtYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICA8ZGl2IHYtaWY9XCJxdWl6RmluaXNoZWRcIiAgPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1sxXX1gXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzJdfWBcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1s0XX1gXCI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7eyBwb2ludHMgfX0gLyB7eyBxdWl6W1wicmVxdWlyZWRfc2NvcmVfdG9fcGFzc1wiXSB9fTwvaDI+XHJcblxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidGhpcy4kcm91dGVyLmdvKClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlJldHJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdIb21lJ31cIj5UYWtlIGFub3RoZXIgcXVpejwvcm91dGVyLWxpbms+PC9idXR0b24+XHJcbiAgICAgICAgPHA+YXV0aG9yOiB7eyBxdWl6W1wiYXV0aG9yXCJdIH19PC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHJvdW5kLXRyYW5zaXRpb24gdi1pZj1cInF1aXpbJ3RpdGxlJ11cIiAgdi1zaG93PVwibG9hZGluZyA9PT0gdHJ1ZSAmJiBxdWl6RmluaXNoZWQgPT09IGZhbHNlXCIgIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaWNvbiddXCIgOnJvdW5kPVwiYWN0dWFsUXVpelwiID5cclxuICAgIDwhLS0gY3VycmVudCBwbGF5ZXIgcG9pbnRzIGltYWdlcyAtLT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQxPjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kMj48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzFdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpyb3VuZDM+PGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1syXX1gXCI+PC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQ0PjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kNT48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzRdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPCEtLSBvcHBvbmVudCBwb2ludHMgaW1hZ2VzIC0tPlxyXG5cclxuICA8L3JvdW5kLXRyYW5zaXRpb24+XHJcblxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBSb3VuZFRyYW5zaXRpb24gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvcXVpei9Sb3VuZFRyYW5zaXRpb24udnVlJ1xyXG4vLyBUT0RPOiBNYWtlIGltcG9zaWJsZSB0byBjaGFuZ2UgdXNlciBwb2ludHMgaW4gY29kZSwgaGFja1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiUXVpekRldGFpbHNcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBSb3VuZFRyYW5zaXRpb24sXHJcbiAgfSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvdW5kczogW1xyXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLFxyXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgXSxcclxuICAgICAgcGxheWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAvLyBsb2FkIHBsYXllciBkYXRhIGhlcmVcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiZ3Vlc3RcIixcclxuICAgICAgICBcInBob3RvX3VybFwiOiBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgIFwic3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiLCAvLyBUT0RPOiBjaGFuZ2UgZGVmYXVsdCB1cmwgdG8gZ3Vlc3QgcGhvdG8gdXJsXHJcbiAgICAgICAgXCJsYXN0X2Fuc3dlclwiOiBcImFcIixcclxuICAgICAgICBcInJvdW5kc1wiOiBbXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzLzI5NzgwNi5wbmdcIixcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIC8vIGxvYWQgcGxheWVyIGRhdGEgaGVyZVxyXG4gICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICBcIm5hbWVcIjogXCJndWVzdDJcIixcclxuICAgICAgICBcInBob3RvX3VybFwiOiBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsIC8vIFRPRE86IGNoYW5nZSBkZWZhdWx0IHVybCB0byBndWVzdCBwaG90byB1cmxcclxuICAgICAgICBcImxhc3RfYW5zd2VyXCI6IFwiYVwiLFxyXG4gICAgICAgIFwicm91bmRzXCI6IFtcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gTG9hZCBvcHBvbmVudCBkYXRhIGhlcmVcclxuXHJcbiAgICAgICAgXHJcbiAgICAgIF0sXHJcbiAgICAgIHF1aXo6IFtdLFxyXG4gICAgICBzbHVnOiB0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZyxcclxuICAgICAgc2VsZWN0ZWRBbnN3ZXI6IG51bGwsXHJcbiAgICAgIGNvcnJlY3RBbnN3ZXI6IDAsXHJcbiAgICAgIHF1ZXN0aW9uOiBcIlwiLFxyXG4gICAgICBhbnN3ZXJzOiBbXSxcclxuICAgICAgYWN0dWFsUXVpejogMCxcclxuICAgICAgcXVpekZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgcXVpelN0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICBwb2ludHM6IDAsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBpc0Nob29zZWQ6IGZhbHNlLFxyXG4gICAgICB0aW1lcjogZmFsc2UsXHJcbiAgICAgIHNvY2tldDogbnVsbCxcclxuXHJcbiAgICAgIEVtcHR5SWNvbjogcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICBDdXJyZW50SWNvbjogcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy8yOTc4MDYucG5nXCIsIC8vIGN1cnJlbnRcclxuICAgICAgSW5jb3JyZWN0SWNvbjogcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy8zNzg2MDQ5LnBuZ1wiLCAvLyBGYWlsZWRcclxuICAgICAgQ29ycmVjdEljb246IHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvMzc4NjA0Mi5wbmdcIiwgLy8gY29ycmVjdFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHByb2dyZXNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXotdGltZXJcIilcclxuICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gdHJ1ZVxyXG4gICAgICAgIHByb2dyZXNCYXIuYW5pbWF0ZSh7d2lkdGg6IFwiMTAwJVwifSwgNTAwMClcclxuICAgICAgIC8vIGxldCBhbmltYXRlID0gcHJvZ3Jlc0Jhci5nZXRBbmltYXRpb25zXHJcbiAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+ICB7Y29uc29sZS5sb2coXCJ0aWltZSBpcyBvdmVyXCIpfSAgfSwgNTAwMClcclxuICAgICAgICBcclxuXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vIEFkZCBuZXh0IHJvdW5kIGZ1bmNpb25hbGl0eSBhZnRlciB0aW1lb3V0XHJcbiAgICAgICAgLy8gU3RvcCBhbmltYXRpb24gaWYgdXNlciBjaG9vc2VuYW5zd2VyXHJcbiAgICAgICAgLy8gc3RvcCBuZXh0IHJvdW5kIHRpbWVvdXRcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPT09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gcHJvZ3Jlc0Jhci5nZXRBbmltYXRpb25zKCk7XHJcbiAgICAgICAgaWYoYW5pbWF0aW9ucy5sZW5ndGggPjApIGFuaW1hdGlvbnNbMF0uZmluaXNoKClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sXHJcblxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY29ubmVjdFBsYXllcigpIHtcclxuICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovLzEwLjEwLjEwLjIzOjgwMDIvd3MvcGxheXJvb21zLycpXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBldmVudC5kYXRhXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlEdWVsKCkge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChcIndoYXRzIG15IG5hbWU/XCIpO1xyXG4gICAgfSxcclxuICAgIHNhdmVRdWl6VGFrZXIoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkT3BwcG9uZW50KCkge1xyXG4gICAgICAvLyBDcmVhdGUgRGphbmdvIENoYW5uZWxzIG9yIHNvY2tldC5pbyBvciB3ZWJzb2NrZXRzIHJvb21cclxuICAgICAgLy8gc2VudCBvcHBvbmVudCBkYXRhIGZyb20gYXBwIHRvIHNvY2tldCByb29tXHJcbiAgICAgIC8vIGxvYWQgZGF0YSBoZXJlIGFuZCB1bnBhY2sgaXRcclxuICAgICAgLy8gc2F2ZSBkYXRhIHRvIHBsYXllcnNbMV1cclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnRnJpZW5kcycsIHBhcmFtczoge3F1aXpfdG9faW52aXRlOiB0aGlzLnF1aXouc2x1Z319KVxyXG4gICAgfSxcclxuICAgIGxvYWROZXh0Um91bmQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnF1aXpGaW5pc2hlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRpbmc9ZmFsc2UsIDIwMDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0Nob29zZWQgPSBmYWxzZVxyXG4gICAgICAgIC8vIHNldCBjdXJyZW50IGljb24gZm9yXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXpdID0gdGhpcy5DdXJyZW50SWNvblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNvY2tldCA9PT0gbnVsbCkgdGhpcy5jb25uZWN0UGxheWVyKClcclxuICAgICAgICAvLyB0aGlzLnBsYXlEdWVsKClcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrQ29ycmVjdEFuc3dlcigpIHtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE86IENyZWF0ZSBhbmltYXRpb25cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5Db3JyZWN0SWNvblxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5Db3JyZWN0SWNvblxyXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5JbmNvcnJlY3RJY29uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXotMV0gPSB0aGlzLkluY29ycmVjdEljb25cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldE9wdGlvbnMoKSB7XHJcbiAgICAgIC8vcmVzZXQgYW5zd2VycyBhbmQgc2VsZWN0ZWRBbnN3ZXJcclxuICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBcIlwiO1xyXG5cclxuICAgICAgLy9nZXQgYW5zd2VyIGRpdnNcclxuICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgLy9Gb3IgZWFjaCBvcHRpb24gZGl2IHJlbW92ZSBhbGwgb3BlcmF0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1ob3ZlclwiKTsgLy8gYWRkcyBvcHRpb24taG92ZXIgdG8gc2V0IGhvdmVyIGVmZmVjdFxyXG5cclxuICAgICAgICAvL1Jlc2V0IG9wdGlvbiBkaXZzIHRleHRDb250ZW50XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRBY3R1YWxRdWl6KGFjdHVhbFF1aXpOdW1iZXIpIHtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvL3NvbG8sIGR1ZWwsIGZpbmRcclxuICAgICAgLy9yZXNldCBvcHRpb24gZGl2c1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciB8fCAhdGhpcy5xdWl6U3RhcnRlZCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgbW9yZSBxdWVzdGlvbnMgbGVmdFxyXG4gICAgICAgIGlmICh0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy9xdWVzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdLnRleHQ7XHJcblxyXG4gICAgICAgICAgLy8gZm9yIGVhY2ggYW5zd2VyIGluIGFjdHVhbCBRdWVzdGlvbiBzZXQgYW5zd2Vyc1xyXG4gICAgICAgICAgdGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdW1wiYW5zd2VyX3NldFwiXS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzLnB1c2goYW5zd2VyW1widGV4dFwiXSk7XHJcbiAgICAgICAgICAgICAgLy9pZiBhbnN3ZXIgaXMgY29ycmVjdCBhZGQgaXQgdG8gY29ycmVjdEFuc3dlciBWYXJpYWJsZVxyXG4gICAgICAgICAgICAgIGlmIChhbnN3ZXJbXCJpc19jb3JyZWN0XCJdID09PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gYW5zd2VyW1widGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbW9yZSBxdWVzdGlvbiwgUVVJWiBGSU5JU0hFRDpcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5hY3R1YWxRdWl6TnVtYmVyID09NSkge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnF1aXpGaW5pc2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnRzIGxvYWRpbmcgbmV4dCBxdWVzdGlvblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMucXVpekZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMubG9hZE5leHRSb3VuZCgpXHJcblxyXG4gICAgICAvL2luY3JlbWVudCBBY3R1YWwgUXVlc3Rpb24gKzEgaWYgcXVpeiBoYXNudCBiZWVuIGZpbmlzaGVkXHJcbiAgICAgIGlmICghdGhpcy5xdWl6RmluaXNoZWQgJiYgdGhpcy5hY3R1YWxRdWl6IDw9IDUpIHRoaXMuYWN0dWFsUXVpeisrO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtKGl0ZW0sIGV2ZW50PXt9KSB7XHJcbiAgICAgIGlmICh0aGlzLmlzQ2hvb3NlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9ncmVzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6LXRpbWVyXCIpXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHByb2dyZXNCYXIuZ2V0QW5pbWF0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGFuaW1hdGlvbnNbMF0ucGF1c2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ2V0QWN0dWFsUXVpeih0aGlzLmFjdHVhbFF1aXopLCAyMDAwKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciA9PT0gXCJcIikgdGhpcy5zZWxlY3RlZEFuc3dlciA9IGl0ZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0ZWQgYW5zd2VyIGlzIHRydWVcclxuICAgICAgICB0aGlzLmNoZWNrQ29ycmVjdEFuc3dlcigpXHJcbiAgICAgICAgdGhpcy5xdWl6U3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gc2V0IG5leHQgcm91bmQgaWNvbiB0byBDdXJyZW50IHF1aXogaWNvblxyXG4gICAgICAgIHRoaXMucm91bmRzW3RoaXMuYWN0dWFsUXVpel0gPSB0aGlzLkN1cnJlbnRJY29uXHJcbiAgICAgICAgXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSB0aGlzLmNvcnJlY3RBbnN3ZXIgJiYgb3B0aW9uLnRleHRDb250ZW50ID09PSBldmVudC50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmNvcnJlY3RcIik7XHJcbiAgICAgICAgICB9IGlmIChvcHRpb24udGV4dENvbnRlbnQgPT09IHRoaXMuY29ycmVjdEFuc3dlcikgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xyXG4gICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb24taG92ZXJcIikgLy8gcmVtb3ZlIGhvdmVyIGVmZmVjdHMgZnJvbSBvcHRpb24gYWZ0ZXIgY2hvb3NlIGFuc3dlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5pc0Nob29zZWQgPSB0cnVlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL2RldGFpbHMvYCArIHRoaXMuc2x1ZyArIGAvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnF1aXogPSBkYXRhKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmNvcnJlY3RBbnN3ZXIgPSBkYXRhLmFuc3dlcikpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5xdWl6LmdldF9yYW5kb21fcXVlc3Rpb24oKSlcclxuICB9LFxyXG4gIC8vY3JlYXRlZCgpIHtcclxuICAvLy8gIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9lY2hvLndlYnNvY2tldC5vcmdcIilcclxuIC8vIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uUXVpekNvdW50ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm9wdGlvbi1ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuYWN0aXZlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDZmZjtcclxufVxyXG5cclxudWwubGlzdC1ncm91cCBsaS5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxudWwubGlzdC1ncm91cCBsaS5pbmNvcnJlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcGxheWVyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiByb3cgbm8td3JhcDtcclxuXHJcbiAgXHJcbn1cclxuXHJcbi5wbGF5ZXItaW5mby1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wbGF5ZXItcGhvdG8ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLnBsYXllci1waG90by0wIHtcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuLnBsYXllci1waG90by0xIHtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG59XHJcblxyXG4ucGxheWVyLW5hbWUge1xyXG4gIGhlaWdodDogNnB4O1xyXG59XHJcbi5wbGF5ZXItbmFtZS0wIHtcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG4ucGxheWVyLW5hbWUtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGJ1dHRvbi5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBOElBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQWZBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTdEQTtBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBdkJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUF2SkE7QUF5SkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXJRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})