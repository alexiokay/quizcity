(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-beca8762"],{"0d35":function(t,e,s){"use strict";s.r(e);s("b0c0");var i=s("f2bf"),n={id:"player-info"},c=["src"],r={class:"d-flex"},o=["src"],u=["src"],a=["src"],l=["src"],h=["src"],d={class:"card",style:{margin:"auto"}},b=["src"],p={class:"card-body"},g={id:"title"},w={id:"counter",class:"card-title"},f={key:0,class:"card-text"},O={class:"progress"},j=Object(i["g"])("div",{id:"quiz-timer",class:"progress-bar",role:"progressbar",style:{width:"0%"}},null,-1),y=[j],m={key:0,class:"list-group list-group-horizontal"},_={class:"list-group list-group-horizontal"},z={class:"card-body"},q={key:0},v=Object(i["g"])("span",null,"Solo",-1),x=[v],I=Object(i["i"])(),k=Object(i["g"])("br",null,null,-1),A=Object(i["g"])("br",null,null,-1),C=Object(i["g"])("span",{class:""},"Play with friend",-1),N=[C],F=Object(i["g"])("br",null,null,-1),E=Object(i["g"])("br",null,null,-1),Q=Object(i["g"])("span",null,"Find opponent",-1),S=[Q],D={key:1},T={class:"d-flex",style:{"align-items":"center","justify-content":"center"}},L=["src"],R=["src"],$=["src"],H=["src"],B=["src"],M=Object(i["g"])("h1",null,"Quiz has been finished",-1),P=Object(i["g"])("br",null,null,-1),U={class:"btn btn-success"},V=Object(i["i"])("Take another quiz"),G=["src"],Y=["src"],J=["src"],X=["src"],W=["src"];function K(t,e,s,j,v,C){var Q=this,K=Object(i["B"])("router-link"),Z=Object(i["B"])("round-transition");return Object(i["t"])(),Object(i["f"])("div",null,[Object(i["I"])(Object(i["g"])("div",null,[Object(i["I"])(Object(i["g"])("div",n,[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(v.players,(function(t){return Object(i["t"])(),Object(i["f"])("div",{class:"player-info-content",key:t},[Object(i["g"])("img",{class:Object(i["p"])(["player-photo","player-photo-".concat(t.id)]),src:t.photo_url},null,10,c),Object(i["g"])("p",{class:Object(i["p"])(["player-name","player-name-".concat(t.id)])},Object(i["D"])(t.name),3),Object(i["g"])("div",r,[Object(i["g"])("img",{style:{width:"32px",height:"32px"},src:"".concat(t.rounds[0])},null,8,o),Object(i["g"])("img",{style:{width:"32px",height:"32px"},src:"".concat(t.rounds[1])},null,8,u),Object(i["g"])("img",{style:{width:"32px",height:"32px"},src:"".concat(t.rounds[2])},null,8,a),Object(i["g"])("img",{style:{width:"32px",height:"32px"},src:"".concat(t.rounds[3])},null,8,l),Object(i["g"])("img",{style:{width:"32px",height:"32px"},src:"".concat(t.rounds[4])},null,8,h)])])})),128))],512),[[i["F"],this.answers[0]]]),Object(i["g"])("div",d,[Object(i["g"])("img",{src:"".concat(v.quiz.image),class:"card-img-top",alt:""},null,8,b),Object(i["g"])("div",p,[Object(i["g"])("h1",g,Object(i["D"])(this.quiz["title"]),1),Object(i["g"])("h5",w,Object(i["D"])(v.actualQuiz)+" / "+Object(i["D"])(v.quiz["number_of_questions"]),1),this.question?(Object(i["t"])(),Object(i["f"])("h3",f," Question: "+Object(i["D"])(this.question),1)):Object(i["e"])("",!0),Object(i["I"])(Object(i["g"])("div",O,y,512),[[i["F"],v.answers[0]]])]),!1===v.loading?(Object(i["t"])(),Object(i["f"])("ul",m,[Object(i["I"])(Object(i["g"])("li",{onClick:e[0]||(e[0]=function(t){return C.handleSelectItem(Q.answers[0],t)}),id:"1",class:"option option-hover list-group-item w-50"},Object(i["D"])(this.answers[0]),513),[[i["F"],this.answers[0]]]),Object(i["I"])(Object(i["g"])("li",{onClick:e[1]||(e[1]=function(t){return C.handleSelectItem(Q.answers[1],t)}),id:"2",class:"option option-hover list-group-item w-50"},Object(i["D"])(this.answers[1]),513),[[i["F"],this.answers[1]]])])):Object(i["e"])("",!0),Object(i["I"])(Object(i["g"])("ul",_,[Object(i["I"])(Object(i["g"])("li",{onClick:e[2]||(e[2]=function(t){return C.handleSelectItem(Q.answers[2],t)}),id:"3",class:"option option-hover list-group-item w-50"},Object(i["D"])(this.answers[2]),513),[[i["F"],this.answers[2]]]),Object(i["I"])(Object(i["g"])("li",{onClick:e[3]||(e[3]=function(t){return C.handleSelectItem(Q.answers[3],t)}),id:"4",class:"option option-hover list-group-item w-50"},Object(i["D"])(this.answers[3]),513),[[i["F"],this.answers[3]]])],512),[[i["F"],this.answers[2]]]),Object(i["g"])("div",z,[this.question||this.quizFinished?Object(i["e"])("",!0):(Object(i["t"])(),Object(i["f"])("div",q,[Object(i["g"])("button",{onClick:e[4]||(e[4]=function(t){return C.getActualQuiz(Q.actualQuiz)}),href:"#",class:"btn btn-success play-btn full-width",id:"start-button"},x),I,k,A,Object(i["g"])("button",{onClick:e[5]||(e[5]=function(t){return C.loadOppponent()}),href:"#",class:"btn btn-success play-btn full-width",id:"start-button"},N),F,E,Object(i["g"])("button",{onClick:e[6]||(e[6]=function(t){return C.getActualQuiz(Q.actualQuiz)}),href:"#",class:"btn btn-success play-btn full-width",id:"start-button"},S)])),v.quizFinished?(Object(i["t"])(),Object(i["f"])("div",D,[Object(i["g"])("div",T,[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[0])},null,8,L),Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[1])},null,8,R),Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[2])},null,8,$),Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[3])},null,8,H),Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[4])},null,8,B)]),M,Object(i["g"])("h2",null,"Your points: "+Object(i["D"])(v.points)+" / "+Object(i["D"])(v.quiz["required_score_to_pass"]),1),Object(i["g"])("button",{onClick:e[7]||(e[7]=function(t){return Q.$router.go()}),class:"btn btn-success"},"Retry"),P,Object(i["g"])("button",U,[Object(i["j"])(K,{to:{name:"Home"}},{default:Object(i["H"])((function(){return[V]})),_:1})]),Object(i["g"])("p",null,"author: "+Object(i["D"])(v.quiz["author"]),1)])):Object(i["e"])("",!0)])])],512),[[i["F"],!1===v.loading]]),v.quiz["title"]?Object(i["I"])((Object(i["t"])(),Object(i["d"])(Z,{key:0,quiz_name:v.quiz["title"],quizIcon:v.quiz["icon"],round:v.actualQuiz},{round1:Object(i["H"])((function(){return[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[0])},null,8,G)]})),round2:Object(i["H"])((function(){return[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[1])},null,8,Y)]})),round3:Object(i["H"])((function(){return[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[2])},null,8,J)]})),round4:Object(i["H"])((function(){return[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[3])},null,8,X)]})),round5:Object(i["H"])((function(){return[Object(i["g"])("img",{style:{width:"64px",height:"64px"},src:"".concat(v.rounds[4])},null,8,W)]})),_:1},8,["quiz_name","quizIcon","round"])),[[i["F"],!0===v.loading&&!1===v.quizFinished]]):Object(i["e"])("",!0)])}s("d3b7"),s("159b"),s("a630"),s("3ca3");var Z=function(t){return Object(i["w"])("data-v-16e5dc9f"),t=t(),Object(i["u"])(),t},tt={class:"RoundTransition"},et=Object(i["i"])(),st=Z((function(){return Object(i["g"])("br",null,null,-1)})),it={class:"d-flex"},nt=Object(i["i"])(),ct=Z((function(){return Object(i["g"])("br",null,null,-1)})),rt={class:"container"},ot=["src"],ut=Z((function(){return Object(i["g"])("br",null,null,-1)})),at=Object(i["i"])(),lt=Z((function(){return Object(i["g"])("br",null,null,-1)})),ht=["src"];function dt(t,e,s,n,c,r){return Object(i["t"])(),Object(i["f"])("div",tt,[Object(i["g"])("h1",null,"Round "+Object(i["D"])(s.round),1),et,st,Object(i["g"])("div",it,[Object(i["A"])(t.$slots,"round1",{},void 0,!0),Object(i["A"])(t.$slots,"round2",{},void 0,!0),Object(i["A"])(t.$slots,"round3",{},void 0,!0),Object(i["A"])(t.$slots,"round4",{},void 0,!0),Object(i["A"])(t.$slots,"round5",{},void 0,!0)]),nt,ct,Object(i["g"])("div",rt,[Object(i["g"])("img",{id:"gif",style:{width:"100%",height:"100%"},src:"".concat(this.gifUrl),alt:""},null,8,ot)]),ut,at,lt,Object(i["g"])("h2",null,Object(i["D"])(s.quiz_name),1),Object(i["g"])("img",{id:"icon",style:{width:"64px",height:"64px"},src:"".concat(s.quizIcon),alt:""},null,8,ht)])}s("a9e3");var bt={name:"RoundTransition",props:{quiz_name:{type:String,required:!0},quizIcon:{type:String,required:!0},round:{type:Number,required:!0}},data:function(){return{gifUrl:"https://www.quizcity.net/static/assets/tram-animation.gif"}}},pt=(s("2397"),s("6b0d")),gt=s.n(pt);const wt=gt()(bt,[["render",dt],["__scopeId","data-v-16e5dc9f"]]);var ft=wt,Ot={name:"QuizDetails",components:{RoundTransition:ft},data:function(){return{rounds:["https://www.quizcity.net/static/assets/297806.png","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp"],players:[{id:0,name:"guest",photo_url:"https://www.quizcity.net/static/assets/gamer-esports-player-competition-activity-256.webp",last_answer:"a",rounds:["https://www.quizcity.net/static/assets/297806.png","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp"]},{id:1,name:"guest2",photo_url:"https://www.quizcity.net/static/assets/gamer-esports-player-competition-activity-256.webp",last_answer:"a",rounds:["https://www.quizcity.net/static/assets/297806.png","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp","https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp"]}],quiz:[],slug:this.$route.params.slug,selectedAnswer:null,correctAnswer:0,question:"",answers:[],actualQuiz:0,quizFinished:!1,quizStarted:!1,points:0,loading:!1,isChoosed:!1,timer:!1,socket:null,EmptyIcon:"https://www.quizcity.net/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",CurrentIcon:"https://www.quizcity.net/static/assets/297806.png",IncorrectIcon:"https://www.quizcity.net/static/assets/3786049.png",CorrectIcon:"https://www.quizcity.net/static/assets/3786042.png"}},watch:{loading:function(){var t=document.getElementById("quiz-timer");if(!1===this.loading)this.timer=!0,t.animate({width:"100%"},5e3);else if(!0===this.timer){var e=t.getAnimations();e.length>0&&e[0].finish(),this.timer=!1}}},methods:{connectPlayer:function(){this.socket=new WebSocket("ws://10.10.10.23:8002/ws/playrooms/"),this.socket.onmessage=function(t){var e=t.data;console.log(e)}},playDuel:function(){this.socket.send("whats my name?")},saveQuizTaker:function(){},loadOppponent:function(){this.$router.push({name:"Friends",params:{quiz_to_invite:this.quiz.slug}})},loadNextRound:function(){var t=this;!1===this.quizFinished&&(this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3),this.isChoosed=!1,this.players[0].rounds[this.actualQuiz]=this.CurrentIcon)},checkCorrectAnswer:function(){this.selectedAnswer==this.correctAnswer?(this.rounds[this.actualQuiz-1]=this.CorrectIcon,this.players[0].rounds[this.actualQuiz-1]=this.CorrectIcon,this.points+=10):(this.rounds[this.actualQuiz-1]=this.IncorrectIcon,this.players[0].rounds[this.actualQuiz-1]=this.IncorrectIcon)},resetOptions:function(){var t=this;this.answers=[],this.selectedAnswer="";var e=document.getElementsByClassName("option");Array.from(e).forEach((function(e){e.classList.remove("active"),e.classList.remove("correct"),e.classList.remove("incorrect"),e.classList.add("option-hover"),e.textContent="",t.correctAnswer=""}))},getActualQuiz:function(t){var e=this;!this.selectedAnswer&&this.quizStarted||(this.resetOptions(),void 0!==this.quiz["question_set"][t]?(this.question=this.quiz["question_set"][t].text,this.quiz["question_set"][t]["answer_set"].forEach((function(t){e.answers.push(t["text"]),!0===t["is_correct"]&&(e.correctAnswer=t["text"])}))):(this.actualQuizNumber,this.question="",this.quizFinished=!0)),this.loadNextRound(),!this.quizFinished&&this.actualQuiz<=5&&this.actualQuiz++},handleSelectItem:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!1===this.isChoosed){var i=document.getElementById("quiz-timer"),n=i.getAnimations();n.length>0&&n[0].pause(),setTimeout((function(){return e.getActualQuiz(e.actualQuiz)}),2e3),""===this.selectedAnswer&&(this.selectedAnswer=t),this.checkCorrectAnswer(),this.quizStarted=!0,this.rounds[this.actualQuiz]=this.CurrentIcon,s.target.classList.add("active");var c=document.getElementsByClassName("option");Array.from(c).forEach((function(t){t.textContent!==e.correctAnswer&&t.textContent===s.target.textContent&&t.classList.add("incorrect"),t.textContent===e.correctAnswer&&t.classList.add("correct"),t.classList.remove("option-hover")}))}this.isChoosed=!0}},mounted:function(){var t=this;fetch("https://www.quizcity.net/api/details/"+this.slug+"/").then((function(t){return t.json()})).then((function(e){return t.quiz=e})).then((function(e){return t.correctAnswer=e.answer})).catch((function(t){return console.log(t.message)}))}};s("c6fc");const jt=gt()(Ot,[["render",K]]);e["default"]=jt},2397:function(t,e,s){"use strict";s("6f19")},"408a":function(t,e,s){var i=s("e330");t.exports=i(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("e330"),n=s("1d80"),c=s("577e"),r=s("5899"),o=i("".replace),u="["+r+"]",a=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),h=function(t){return function(e){var s=c(n(e));return 1&t&&(s=o(s,a,"")),2&t&&(s=o(s,l,"")),s}};t.exports={start:h(1),end:h(2),trim:h(3)}},"6f19":function(t,e,s){},7156:function(t,e,s){var i=s("1626"),n=s("861d"),c=s("d2bb");t.exports=function(t,e,s){var r,o;return c&&i(r=e.constructor)&&r!==s&&n(o=r.prototype)&&o!==s.prototype&&c(t,o),t}},a9e3:function(t,e,s){"use strict";var i=s("83ab"),n=s("da84"),c=s("e330"),r=s("94ca"),o=s("6eeb"),u=s("1a2d"),a=s("7156"),l=s("3a9b"),h=s("d9b5"),d=s("c04e"),b=s("d039"),p=s("241c").f,g=s("06cf").f,w=s("9bf2").f,f=s("408a"),O=s("58a8").trim,j="Number",y=n[j],m=y.prototype,_=n.TypeError,z=c("".slice),q=c("".charCodeAt),v=function(t){var e=d(t,"number");return"bigint"==typeof e?e:x(e)},x=function(t){var e,s,i,n,c,r,o,u,a=d(t,"number");if(h(a))throw _("Cannot convert a Symbol value to a number");if("string"==typeof a&&a.length>2)if(a=O(a),e=q(a,0),43===e||45===e){if(s=q(a,2),88===s||120===s)return NaN}else if(48===e){switch(q(a,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+a}for(c=z(a,2),r=c.length,o=0;o<r;o++)if(u=q(c,o),u<48||u>n)return NaN;return parseInt(c,i)}return+a};if(r(j,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,k=function(t){var e=arguments.length<1?0:y(v(t)),s=this;return l(m,s)&&b((function(){f(s)}))?a(Object(e),s,k):e},A=i?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;A.length>C;C++)u(y,I=A[C])&&!u(k,I)&&w(k,I,g(y,I));k.prototype=m,m.constructor=k,o(n,j,k)}},c6fc:function(t,e,s){"use strict";s("ec9a")},ec9a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-beca8762.js.79ee41cffdd8.map