(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fde14fc"],{"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),a=Math.floor,o=r("".charAt),u=r("".replace),c=r("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,l,b){var m=n+e.length,v=r.length,f=s;return void 0!==l&&(l=i(l),f=d),u(b,f,(function(i,u){var d;switch(o(u,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,m);case"<":d=l[c(u,1,-1)];break;default:var s=+u;if(0===s)return i;if(s>v){var b=a(s/10);return 0===b?i:b<=v?void 0===r[b-1]?o(u,1):r[b-1]+o(u,1):i}d=r[s-1]}return void 0===d?"":d}))}},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),a=n("e330"),o=n("d784"),u=n("d039"),c=n("825a"),d=n("1626"),s=n("5926"),l=n("50c4"),b=n("577e"),m=n("1d80"),v=n("8aa5"),f=n("dc4a"),h=n("0cb2"),p=n("14c3"),g=n("b622"),w=g("replace"),j=Math.max,O=Math.min,y=a([].concat),A=a([].push),C=a("".indexOf),I=a("".slice),B=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),k=!u((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var a=x?"$":"$0";return[function(e,n){var r=m(this),a=void 0==e?void 0:f(e,w);return a?i(a,e,r,n):i(t,b(r),e,n)},function(e,i){var o=c(this),u=b(e);if("string"==typeof i&&-1===C(i,a)&&-1===C(i,"$<")){var m=n(t,o,u,i);if(m.done)return m.value}var f=d(i);f||(i=b(i));var g=o.global;if(g){var w=o.unicode;o.lastIndex=0}var E=[];while(1){var x=p(o,u);if(null===x)break;if(A(E,x),!g)break;var k=b(x[0]);""===k&&(o.lastIndex=v(u,l(o.lastIndex),w))}for(var D="",q=0,_=0;_<E.length;_++){x=E[_];for(var L=b(x[0]),$=j(O(s(x.index),u.length),0),M=[],Q=1;Q<x.length;Q++)A(M,B(x[Q]));var R=x.groups;if(f){var z=y([L],M,$,u);void 0!==R&&A(z,R);var N=b(r(i,void 0,z))}else N=h(L,u,$,M,R,i);$>=q&&(D+=I(u,q,$)+N,q=$+L.length)}return D+I(u,q)}]}),!k||!E||x)},"542a":function(e,t,n){"use strict";n("a888")},"590c":function(e,t,n){"use strict";n.r(t);var r=n("f2bf"),i={key:0},a={action:"/api/details/",method:"post"},o=Object(r["j"])(" Quiz Name: "),u=Object(r["h"])("input",{name:"Title",id:"Title",value:"",placeholder:"type title"},null,-1),c=Object(r["j"])(),d=Object(r["h"])("br",null,null,-1),s=Object(r["j"])(" Description: "),l=Object(r["h"])("input",{name:"Description",id:"Description",value:"",placeholder:"type description"},null,-1),b=Object(r["j"])(),m=Object(r["h"])("br",null,null,-1),v=Object(r["j"])(" Image: "),f=Object(r["h"])("input",{type:"file",name:"Image",id:"Image",value:""},null,-1),h=Object(r["j"])(),p=Object(r["h"])("br",null,null,-1),g=Object(r["j"])(" Category "),w={name:"Category",id:"Category",value:""},j=["value"],O=Object(r["j"])(),y=Object(r["h"])("br",null,null,-1),A=Object(r["j"])(),C=Object(r["h"])("br",null,null,-1),I=Object(r["h"])("div",{id:"questions"},null,-1),B=Object(r["j"])(),E=Object(r["h"])("br",null,null,-1),x={class:"questionDiv",id:"questionDiv"},k=Object(r["i"])(' Question: <input id="questionValue"> <br><br><div id="answer 1" class="answer">Answer 1 <input class="AnswerInput" id="AnswerId 1"><div class="form-check" style="float:right;"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Correct </label></div></div><div id="answer 2" class="answer">Answer 2 <input class="AnswerInput" id="AnswerId 2"><div class="form-check" style="float:right;"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Correct </label></div></div>',7);function D(e,t,n,D,q,_){var L=Object(r["D"])("AddQuizPre");return Object(r["v"])(),Object(r["g"])("div",null,[null!==q.mode?(Object(r["v"])(),Object(r["g"])("div",i,[Object(r["h"])("form",a,[o,u,c,d,s,l,b,m,v,f,h,p,g,Object(r["h"])("select",w,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(q.categories,(function(e){return Object(r["v"])(),Object(r["g"])("option",{value:e.category,key:e.id},Object(r["F"])(e.category),9,j)})),128))]),O,y,A,C,I]),B,E,Object(r["h"])("div",x,[k,Object(r["h"])("button",{type:"button",onClick:t[0]||(t[0]=function(e){return _.addAnswer()}),class:"btn btn-primary",id:"addAnswerButton"},"+"),Object(r["h"])("button",{disabled:"true",type:"button",onClick:t[1]||(t[1]=function(e){return _.removeAnswer()}),class:"btn btn-primary",id:"removeAnswerButton"},"-")]),Object(r["h"])("button",{onClick:t[2]||(t[2]=function(e){return _.addQuestion()}),class:"btn btn-primary"},"Add Question")])):Object(r["f"])("",!0),null===q.mode?(Object(r["v"])(),Object(r["e"])(L,{key:1,onMessage:t[3]||(t[3]=function(e){return _.route(e)})})):Object(r["f"])("",!0)])}n("ac1f"),n("5319"),n("b0c0"),n("d3b7");var q=function(e){return Object(r["y"])("data-v-f1bcbff2"),e=e(),Object(r["w"])(),e},_={id:"AddQuizPre"},L=Object(r["j"])(" Modify existing"),$=q((function(){return Object(r["h"])("span",{"aria-hidden":""},"_",-1)})),M=q((function(){return Object(r["h"])("span",{"aria-hidden":"",class:"cybr-btn__glitch"},"Cyber_",-1)})),Q=q((function(){return Object(r["h"])("span",{"aria-hidden":"",class:"cybr-btn__tag"},"R25",-1)})),R=[L,$,M,Q],z=Object(r["j"])(" Add new"),N=q((function(){return Object(r["h"])("span",{"aria-hidden":""},"_",-1)})),T=q((function(){return Object(r["h"])("span",{"aria-hidden":"",class:"cybr-btn__glitch"},"Buttons_",-1)})),H=q((function(){return Object(r["h"])("span",{"aria-hidden":"",class:"cybr-btn__tag"},"R25",-1)})),P=[z,N,T,H];function J(e,t,n,i,a,o){return Object(r["v"])(),Object(r["g"])("div",_,[Object(r["h"])("button",{class:"cybr-btn",onClick:t[0]||(t[0]=function(e){return o.chooseMode("existing")})},R),Object(r["h"])("button",{class:"cybr-btn",onClick:t[1]||(t[1]=function(e){return o.chooseMode("new")})},P)])}var S={name:"AddQuizPre",methods:{chooseMode:function(e){this.$emit("message",e)}},mounted:function(){}},V=(n("542a"),n("6b0d")),F=n.n(V);const G=F()(S,[["render",J],["__scopeId","data-v-f1bcbff2"]]);var K=G,U={name:"AddQuiz",components:{AddQuizPre:K},data:function(){return{categories:[],questionDivs:1,buttonsCount:2,mode:null}},methods:{route:function(e){this.mode="new"===e?"new":"existing"},addAnswer:function(){if(this.buttonsCount<3){this.buttonsCount++;var e=document.getElementById("answer 1"),t=document.getElementById("questionDiv"),n=document.getElementById("removeAnswerButton"),r=document.getElementById("addAnswerButton");n.disabled=!1;var i=e.cloneNode(!0);i.id="answer "+this.buttonsCount,i.innerHTML=i.innerHTML.replace(/1/g,"3");var a=document.createElement("input");a.id="AnswerId "+this.buttonsCount,a.classList.add("AnswerInput"),t.insertBefore(i,r),console.log(this.buttonsCount)}else if(3===this.buttonsCount){this.buttonsCount++;var o=document.getElementById("answer 1"),u=document.getElementById("questionDiv"),c=document.getElementById("addAnswerButton"),d=o.cloneNode(!0);d.id="answer "+this.buttonsCount,d.innerHTML=d.innerHTML.replace(/1/g,"4");var s=document.createElement("input");s.id="AnswerId "+this.buttonsCount,s.classList.add("AnswerInput"),u.insertBefore(d,c),c.disabled=!0,console.log(this.buttonsCount)}},removeAnswer:function(){if(this.buttonsCount<4){var e=document.getElementById("answer 3");e.remove(),this.buttonsCount--;var t=document.getElementById("removeAnswerButton");t.disabled=!0}else if(4===this.buttonsCount){var n=document.getElementById("answer 4"),r=document.getElementById("addAnswerButton");r.disabled=!1,n.remove(),this.buttonsCount--}},addQuestion:function(){var e=document.getElementsByClassName("AnswerInput"),t=document.createElement("input"),n=document.getElementById("questions"),r=document.getElementById("questionValue"),i=document.createElement("LABEL");i.textContent="Question: ";var a=document.createElement("LABEL");a.textContent="Answer 1: ";var o=document.createElement("LABEL");o.textContent="Answer 2: ";var u=document.createElement("LABEL");u.textContent="Answer 3: ";var c=document.createElement("LABEL");c.textContent="Answer 4: ";var d=document.getElementById("AnswerId 1"),s=document.getElementById("AnswerId 2");t.id="question",t.name="question",t.value=r.value;var l=document.createElement("input");l.id="answer_one",l.name="answer",l.value=d.value;var b=document.createElement("input");if(b.id="answer_two",b.name="answer",b.value=s.value,n.appendChild(i),n.appendChild(t),n.appendChild(a),n.appendChild(l),n.appendChild(o),n.appendChild(b),console.log("answerInputs len: "+e.length),e.length>2){var m=document.getElementById("AnswerId 3"),v=document.createElement("input");v.id="answer_three",v.name="answer",v.value=m.value,n.appendChild(u),n.appendChild(v)}if(e.length>3){var f=document.getElementById("AnswerId 4"),h=document.createElement("input");h.id="answer_four",h.name="answer",h.value=f.value,n.appendChild(c),n.appendChild(h)}r.value="";for(var p=0,g=e.length;p<g;p++)e[p].value=""},addAnswerx:function(e){var t=document.getElementById("answer 1"),n=t.cloneNode(!0);n.id="answer "+this.answerButtons;var r=document.getElementById("questionDiv "+e.target.id);r.insertBefore(n,r.lastChild)},addQuestionx:function(){this.questionDivs++;var e=document.getElementById("questionDiv 1"),t=e.cloneNode(!0),n=document.getElementById("1"),r=n.cloneNode(!0);r.id=this.questionDivs,r.addEventListener("click",this.addAnswer,!1),t.replaceChild(r,t.lastChild),t.id="questionDiv "+String(this.questionDivs);var i=document.getElementById("form");i.appendChild(t)}},mounted:function(){var e=this;fetch("https://www.quizcity.net/api/categories/").then((function(e){return e.json()})).then((function(t){return e.categories=t})).catch((function(e){return console.log(e.message)}))}};n("c031");const W=F()(U,[["render",D]]);t["default"]=W},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},a888:function(e,t,n){},c031:function(e,t,n){"use strict";n("c250")},c250:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0fde14fc.js.map